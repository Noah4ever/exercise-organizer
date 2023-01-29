import { useState } from "react";
import { View } from "react-native";
import { ListItem, Button, Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

// Components import
import ExerciseModal from "./ExerciseModal";

// Styles
import { GLOBAL_STYLES } from "../../styles/Style";

export default function ExerciseItem({ exercise, exerciseIndex, updateExercise, deleteExercise }) {
  const [exerciseModalVisible, setExerciseModalVisible] = useState(false);
  const toggleOverlay = () => {
    setExerciseModalVisible(!exerciseModalVisible);
  };
  return (
    <ListItem.Swipeable
      key={exercise.id}
      containerStyle={{
        backgroundColor: GLOBAL_STYLES.COLORS.background1,
        paddingVertical: 10,
      }}
      onPress={toggleOverlay}
      rightContent={() => (
        <Button
          title="Delete"
          onPress={() => deleteExercise(exerciseIndex)}
          icon={{ name: "delete", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: GLOBAL_STYLES.COLORS.danger }}
        />
      )}>
      <View
        style={{
          backgroundColor: exercise.color,
          borderRadius: 50,
          paddingLeft: 1.5,
          justifyContent: "center",
          alignItems: "center",
          width: 32,
          height: 32,
        }}>
        <Icon name={exercise.icon} size={15} color={GLOBAL_STYLES.COLORS.text} />
      </View>
      <ListItem.Content>
        <ListItem.Title style={{ color: GLOBAL_STYLES.COLORS.text }}>{exercise.name}</ListItem.Title>
      </ListItem.Content>
      <Icon name="ellipsis-horizontal" size={24} color={GLOBAL_STYLES.COLORS.text} />
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
