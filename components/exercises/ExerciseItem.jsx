import { useState } from "react";
import { View, LayoutAnimation } from "react-native";
import { ListItem, Button, Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

// Components import
import ExerciseModal from "./ExerciseModal";

// Styles
import { GLOBAL_STYLES } from "../../styles/Style";

export default function ExerciseItem({
  exercise,
  exerciseIndex,
  updateExercise,
  deleteExercise,
}) {
  const [exerciseModalVisible, setExerciseModalVisible] = useState(false);
  function toggleOverlay() {
    LayoutAnimation.configureNext({
      update: {
        type: "EaseOut",
      },
      duration: 250,
    });
    setExerciseModalVisible(!exerciseModalVisible);
  }
  return (
    <ListItem.Swipeable
      key={exercise.id}
      containerStyle={{
        borderStartColor: exercise.color,
        borderLeftWidth: 6,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: GLOBAL_STYLES.COLORS.background1,
        paddingVertical: 10,
      }}
      onPress={toggleOverlay}
      rightContent={
        <Button
          title="Delete"
          onPress={() => deleteExercise(exerciseIndex)}
          icon={{ name: "delete", color: "white" }}
          containerStyle={{
            display: "flex",
            justifyContent: "center",
          }}
          buttonStyle={{
            minHeight: "100%",
            backgroundColor: GLOBAL_STYLES.COLORS.danger,
          }}
        />
      }
    >
      <View style={{ minWidth: 18 }}>
        <Icon
          name={exercise.icon}
          size={18}
          color={GLOBAL_STYLES.COLORS.text}
        />
      </View>
      <ListItem.Content>
        <ListItem.Title
          style={{ color: GLOBAL_STYLES.COLORS.text, fontWeight: "bold" }}
        >
          {exercise.name}
        </ListItem.Title>
      </ListItem.Content>
      {/* <Icon
        name="ellipsis-horizontal"
        size={24}
        color={GLOBAL_STYLES.COLORS.text}
      /> */}
      <ListItem.Chevron />
      <ExerciseModal
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        updateExercise={updateExercise}
        deleteExercise={deleteExercise}
        visible={exerciseModalVisible}
        toggleOverlay={toggleOverlay}
      />
    </ListItem.Swipeable>
  );
}
