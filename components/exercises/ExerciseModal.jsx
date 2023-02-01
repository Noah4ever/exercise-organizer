import React, { useState, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Overlay, Input, Button, ListItem } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { GLOBAL_STYLES } from "../../styles/Style";
import ColorPicker from "react-native-wheel-color-picker";
import SlideUpContainer from "../utils/SlideUpContainer";

export default function ExerciseModal({
  themeProvider,
  visible,
  toggleOverlay,
  exercise,
  exerciseIndex,
  updateExercise,
  deleteExercise,
}) {
  const [colorpickerVisible, setColorpickerVisible] = useState(false);
  const toggleColorpickerOverlay = () => {
    setColorpickerVisible(!colorpickerVisible);
  };

  const exerciseColor = useRef(exercise.color);
  const exerciseIcon = useRef(exercise.icon);
  const exerciseName = useRef(exercise.name);

  const [slideAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  const styles = StyleSheet.create({
    ListItemContainer: {
      backgroundColor: themeProvider.background2,
      paddingVertical: 10,
    },
  });

  return (
    <SlideUpContainer themeProvider={themeProvider} visible={visible} toggleOverlay={toggleOverlay}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}>
        <View>
          <View>
            <Button
              onPress={toggleOverlay}
              color={"transparent"}
              containerStyle={{ marginLeft: "85%" }}
              icon={<Icon name="close-outline" size={24} color={themeProvider.textMuted} />}
            />
          </View>
          <ListItem containerStyle={styles.ListItemContainer}>
            <ListItem.Content>
              <Input
                inputStyle={{
                  color: themeProvider.text,
                }}
                containerStyle={{
                  marginTop: 0,
                  marginBottom: -15,
                  paddingHorizontal: 0,
                }}
                defaultValue={exerciseName.current}
                onChangeText={(input) => {
                  exerciseName.current = input;
                }}
                placeholder="Exercise Name"
              />
            </ListItem.Content>
          </ListItem>

          <ListItem containerStyle={styles.ListItemContainer}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: exerciseColor.current,
                width: 32,
                height: 32,
              }}></View>
            <ListItem.Content>
              <View>
                <Button
                  title={"Change color"}
                  type="clear"
                  containerStyle={{}}
                  titleStyle={{ color: themeProvider.text }}
                  onPress={toggleColorpickerOverlay}
                />
              </View>
            </ListItem.Content>
          </ListItem>

          <Overlay
            isVisible={colorpickerVisible}
            onBackdropPress={toggleColorpickerOverlay}
            containerStyle={{ transform: [{ translateY: slideAnim }] }}
            overlayStyle={{
              width: 300,
              height: 400,
              padding: 25,
              backgroundColor: themeProvider.background2,
            }}>
            <View
              style={{
                marginTop: -30,
                height: 300,
              }}>
              <ColorPicker
                gapSize={4}
                color={exerciseColor.current}
                onColorChangeComplete={(newColor) => {
                  exerciseColor.current = newColor;
                }}
              />
            </View>
            <Button
              title="Save color"
              type="clear"
              titleStyle={{ color: themeProvider.accent }}
              containerStyle={{ marginTop: 25 }}
              onPress={toggleColorpickerOverlay}
            />
          </Overlay>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {/* ExerciseIndex is null when new exercise is created */}
          {exerciseIndex !== null ? (
            <Button
              title={"Delete"}
              type="clear"
              containerStyle={{ marginTop: 10 }}
              titleStyle={{ color: themeProvider.danger }}
              onPress={() => {
                toggleOverlay();
                if (exerciseIndex === null) {
                  return;
                }
                deleteExercise(exerciseIndex);
              }}
            />
          ) : (
            ""
          )}
          <Button
            title={exerciseIndex === null ? "Add" : "Update"}
            type="clear"
            containerStyle={{ marginTop: 10 }}
            titleStyle={{ color: themeProvider.accent }}
            onPress={() => {
              const newExercise = {
                name: exerciseName.current,
                color: exerciseColor.current,
                icon: exerciseIcon.current,
              };
              toggleOverlay();
              updateExercise(exerciseIndex, newExercise);
            }}
          />
        </View>
      </View>
    </SlideUpContainer>
  );
}
