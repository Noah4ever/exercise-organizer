import { useState } from "react";
import { View, LayoutAnimation, Dimensions } from "react-native";
import { ListItem, Button, Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

// Components import
import ExerciseModal from "./ExerciseModal";

// Styles
import { GLOBAL_STYLES } from "../../styles/Style";

export default function ExerciseItem({ themeProvider, exercise, exerciseIndex, updateExercise, deleteExercise }) {
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
      minSlideWidth={Dimensions.get("window").width / 4}
      containerStyle={{
        borderStartColor: exercise.color,
        borderLeftWidth: 6,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: themeProvider.background1,
        paddingVertical: 10,
        marginLeft: 5,
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
            backgroundColor: themeProvider.danger,
          }}
        />
      }>
      <View style={{ minWidth: 18 }}>
        <Icon name={exercise.icon} size={18} color={themeProvider.text} />
      </View>
      <ListItem.Content>
        <ListItem.Title style={{ color: themeProvider.text, fontWeight: "bold" }}>{exercise.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />

      <ExerciseModal
        themeProvider={themeProvider}
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
