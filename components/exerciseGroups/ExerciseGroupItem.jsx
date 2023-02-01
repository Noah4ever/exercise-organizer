import { useState } from "react";
import { View, LayoutAnimation } from "react-native";
import { ListItem, Button, Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

// Components import
import ExerciseGroupModal from "./ExerciseGroupModal";

// Styles
import { GLOBAL_STYLES } from "../../styles/Style";

export default function ExerciseGroupItem({
  themeProvider,
  exerciseGroup,
  exerciseGroupIndex,
  updateExerciseGroup,
  deleteExerciseGroup,
  exerciseList,
}) {
  const [exerciseGroupModalVisible, setExerciseGroupModalVisible] = useState(false);
  function toggleOverlay() {
    LayoutAnimation.configureNext({
      update: {
        type: "EaseOut",
      },
      duration: 250,
    });
    setExerciseGroupModalVisible(!exerciseGroupModalVisible);
  }
  return (
    <ListItem.Swipeable
      key={exerciseGroup.id}
      containerStyle={{
        borderStartColor: exerciseGroup.color,
        borderLeftWidth: 6,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: themeProvider.background1,
        paddingVertical: 25,
        marginLeft: 5,
      }}
      onPress={toggleOverlay}
      rightContent={
        <Button
          title="Delete"
          onPress={() => deleteExerciseGroup(exerciseGroupIndex)}
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
        <Icon name={exerciseGroup.icon} size={18} color={themeProvider.text} />
      </View>
      <ListItem.Content>
        <ListItem.Title style={{ color: themeProvider.text, fontWeight: "bold" }}>
          {exerciseGroup.name === "" ? "Exercise Group Name" : exerciseGroup.name}
        </ListItem.Title>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
          {exerciseGroup.list?.map((ex, index) => {
            const exercise = exerciseList.find((exer) => exer.id === ex);
            return (
              <Text
                key={exercise.id}
                style={{
                  color: themeProvider.text,
                  backgroundColor: themeProvider.background2,
                  borderLeftColor: exercise.color,
                  borderLeftWidth: 2,
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                  borderRadius: 3,
                  marginRight: 6,
                  marginBottom: 6,
                }}>
                {exercise.name}
              </Text>
            );
          })}
        </View>
      </ListItem.Content>
      {/* <Icon
        name="ellipsis-horizontal"
        size={24}
        color={themeProvider.text}
      /> */}
      <ListItem.Chevron />

      <ExerciseGroupModal
        themeProvider={themeProvider}
        exerciseGroup={exerciseGroup}
        exerciseGroupIndex={exerciseGroupIndex}
        updateExerciseGroup={updateExerciseGroup}
        deleteExerciseGroup={deleteExerciseGroup}
        visible={exerciseGroupModalVisible}
        toggleOverlay={toggleOverlay}
        exerciseList={exerciseList}
      />
    </ListItem.Swipeable>
  );
}
