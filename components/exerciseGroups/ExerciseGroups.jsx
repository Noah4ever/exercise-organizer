import React, { useState } from "react";
import { FlatList, View, LayoutAnimation } from "react-native";
import { Text, Button } from "@rneui/themed";
import { GLOBAL_STYLES, useTheme } from "../../styles/Style";
import ExerciseGroupModal from "./ExerciseGroupModal";
import uuid from "react-native-uuid";
import ExerciseGroupItem from "./ExerciseGroupItem";

export default function ExerciseGroups({
  themeProvider,
  exerciseGroups,
  setExerciseGroups,
  exerciseList,
  setExerciseList,
}) {
  const [exerciseGroupVisible, setExerciseGroupVisible] = useState(false);

  function toggleOverlay() {
    LayoutAnimation.configureNext({
      update: {
        type: "EaseOut",
      },
      duration: 250,
    });
    setExerciseGroupVisible(!exerciseGroupVisible);
  }

  function deleteExerciseGroup(exerciseGroupIndex) {
    setExerciseGroups((curExerciseGroupList) => {
      if (exerciseGroupIndex === null) {
        return;
      }
      curExerciseGroupList.splice(exerciseGroupIndex, 1);
      return [...curExerciseGroupList];
    });
  }

  function updateExerciseGroup(exerciseGroupIndex, newExerciseGroup) {
    setExerciseGroups((curExerciseGroupList) => {
      // If current ExerciseList is empty
      if (!curExerciseGroupList || curExerciseGroupList.length <= 0) {
        return [
          {
            name: newExerciseGroup.name,
            color: newExerciseGroup.color,
            list: newExerciseGroup.list,
            icon: newExerciseGroup.icon,
            id: uuid.v4(),
          },
        ];
      }
      // If user adds new exercise to list
      if (exerciseGroupIndex === null) {
        const newExObj = {
          name: newExerciseGroup.name,
          color: newExerciseGroup.color,
          list: newExerciseGroup.list,
          icon: newExerciseGroup.icon,
          id: uuid.v4(),
        };
        curExerciseGroupList.push(newExObj);
      } else {
        curExerciseGroupList[exerciseGroupIndex].name = newExerciseGroup.name;
        curExerciseGroupList[exerciseGroupIndex].color = newExerciseGroup.color;
        curExerciseGroupList[exerciseGroupIndex].list = newExerciseGroup.list;
        curExerciseGroupList[exerciseGroupIndex].icon = newExerciseGroup.icon;
      }
      return [...curExerciseGroupList];
    });
  }

  return (
    <>
      <Text h1 style={[GLOBAL_STYLES.h1, { color: themeProvider.text }]}>
        ExercisesGroups
      </Text>
      <Button
        type="clear"
        color={themeProvider.text}
        icon={{
          name: "add-outline",
          type: "ionicon",
          color: themeProvider.text,
          size: 32,
        }}
        onPress={toggleOverlay}
      />
      <ExerciseGroupModal
        themeProvider={themeProvider}
        visible={exerciseGroupVisible}
        toggleOverlay={toggleOverlay}
        updateExerciseGroup={updateExerciseGroup}
        deleteExerciseGroup={deleteExerciseGroup}
        exerciseGroupIndex={null}
        exerciseList={exerciseList}
        exerciseGroup={{
          name: "",
          color: themeProvider.accent,
          list: [],
          icon: "",
        }}
      />
      <View>
        <FlatList
          data={exerciseGroups}
          ItemSeparatorComponent={<View style={{ height: 4 }} />}
          renderItem={({ item, index }) => (
            <ExerciseGroupItem
              themeProvider={themeProvider}
              exerciseGroup={item}
              exerciseGroupIndex={index}
              updateExerciseGroup={updateExerciseGroup}
              deleteExerciseGroup={deleteExerciseGroup}
              exerciseList={exerciseList}
            />
          )}
        />
      </View>
    </>
  );
}
