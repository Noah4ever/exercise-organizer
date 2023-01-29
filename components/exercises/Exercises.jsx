import React from "react";
import { FlatList, View } from "react-native";
import { Text } from "@rneui/themed";

// Components import
import ExerciseItem from "./ExerciseItem";

// Styles
import { GLOBAL_STYLES } from "../../styles/Style";

export default function Exercises({ exerciseList, setExerciseList }) {
  function deleteExercise(exerciseIndex) {
    setExerciseList((curExerciseList) => {
      if (exerciseIndex === null) {
        return;
      }
      curExerciseList.splice(exerciseIndex, 1);
      return [...curExerciseList];
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
        // console.log("NewExercise:", newExObj);
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
      <FlatList
        data={exerciseList}
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
