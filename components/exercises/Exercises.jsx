import { useState } from "react";
import { FlatList, View, LayoutAnimation } from "react-native";
import { Text, Button } from "@rneui/themed";
import uuid from "react-native-uuid";

// Components import
import ExerciseItem from "./ExerciseItem";
import ExerciseModal from "./ExerciseModal";

// Styles
import { GLOBAL_STYLES } from "../../styles/Style";

export default function Exercises({
  exerciseList,
  setExerciseList,
  setExerciseGroup,
}) {
  const [addExerciseVisible, setAddExerciseVisible] = useState(false);

  function toggleAddExercise() {
    LayoutAnimation.configureNext({
      update: {
        type: "EaseOut",
      },
      duration: 250,
    });
    setAddExerciseVisible(!addExerciseVisible);
  }

  function deleteExercise(exerciseIndex) {
    const deleteExercise = exerciseList[exerciseIndex];
    setExerciseList((curExerciseList) => {
      if (exerciseIndex === null) {
        return;
      }
      curExerciseList.splice(exerciseIndex, 1);
      return [...curExerciseList];
    });
    setExerciseGroup((exerciseGroup) => {
      exerciseGroup.forEach((group) => {
        console.log("Group:", group);
      });
      const index = exerciseGroup.indexOf(deleteExercise.id);
      if (index > -1) {
        exerciseGroup.splice(index, 1);
      }
      return [...exerciseGroup];
    });
  }

  function updateExercise(exerciseIndex, newExercise) {
    setExerciseList((curExeriseList) => {
      // If current ExerciseList is empty
      if (!curExeriseList || curExeriseList.length <= 0) {
        return [
          {
            name: newExercise.name,
            color: newExercise.color,
            icon: newExercise.icon,
            id: uuid.v4(),
          },
        ];
      }
      // If user adds new exercise to list
      if (exerciseIndex === null) {
        const newExObj = {
          name: newExercise.name,
          color: newExercise.color,
          icon: newExercise.icon,
          id: uuid.v4(),
        };
        curExeriseList.push(newExObj);
      } else {
        curExeriseList[exerciseIndex].name = newExercise.name;
        curExeriseList[exerciseIndex].color = newExercise.color;
        curExeriseList[exerciseIndex].icon = newExercise.icon;
      }
      return [...curExeriseList];
    });
  }

  return (
    <View>
      <Text h1 style={GLOBAL_STYLES.h1}>
        Exercises
      </Text>
      <Button
        type="clear"
        color={GLOBAL_STYLES.COLORS.foreground}
        icon={{
          name: "add-outline",
          type: "ionicon",
          color: GLOBAL_STYLES.COLORS.foreground,
          size: 32,
        }}
        onPress={toggleAddExercise}
      />
      <ExerciseModal
        visible={addExerciseVisible}
        updateExercise={updateExercise}
        toggleOverlay={toggleAddExercise}
        exerciseIndex={null}
        exercise={{
          name: "",
          color: GLOBAL_STYLES.COLORS.accent,
          icon: "barbell-outline",
        }}
      />
      <FlatList
        data={exerciseList}
        ItemSeparatorComponent={<View style={{ height: 4 }} />}
        renderItem={({ item, index }) => (
          <ExerciseItem
            exercise={item}
            exerciseIndex={index}
            updateExercise={updateExercise}
            deleteExercise={deleteExercise}
          />
        )}
      />
    </View>
  );
}
