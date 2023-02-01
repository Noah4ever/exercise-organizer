import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Overlay, Input, Button, ListItem } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { GLOBAL_STYLES } from "../../styles/Style";
import DropDownPicker from "react-native-dropdown-picker";
import ColorPicker from "react-native-wheel-color-picker";
import SlideUpContainer from "../utils/SlideUpContainer";

export default function ExerciseGroupModal({
  visible,
  toggleOverlay,
  updateExerciseGroup,
  deleteExerciseGroup,
  exerciseGroupIndex,
  exerciseGroup,
  exerciseList,
}) {
  const [colorpickerVisible, setColorpickerVisible] = useState(false);
  const toggleColorpickerOverlay = () => {
    setColorpickerVisible(!colorpickerVisible);
  };

  const exerciseGroupColor = useRef(exerciseGroup.color);
  const exerciseGroupIcon = useRef(exerciseGroup.icon);
  const exerciseGroupName = useRef(exerciseGroup.name);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(exerciseGroup.list ?? []);
  const [dropdownItems, setDropdownItems] = useState(
    exerciseList.map((ex) => {
      return { label: ex.name, value: ex.id };
    })
  );

  const [slideAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  useEffect(() => {
    setDropdownValue(exerciseGroup.list);
  }, [visible]);

  useEffect(() => {
    setDropdownItems(
      exerciseList.map((ex) => {
        return {
          label: ex.name,
          value: ex.id,
          icon: () => <Icon name={ex.icon} size={18} color={GLOBAL_STYLES.COLORS.text} />,
        };
      })
    );
  }, [exerciseList]);

  return (
    <SlideUpContainer visible={visible} toggleOverlay={toggleOverlay}>
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
              icon={<Icon name="close-outline" size={24} color={GLOBAL_STYLES.COLORS.textMuted} />}
            />
          </View>
          <ListItem containerStyle={styles.ListItemContainer}>
            <ListItem.Content>
              <Input
                inputStyle={{
                  color: GLOBAL_STYLES.COLORS.text,
                }}
                containerStyle={{
                  marginTop: 0,
                  marginBottom: -15,
                  paddingHorizontal: 0,
                }}
                defaultValue={exerciseGroupName.current}
                onChangeText={(input) => {
                  exerciseGroupName.current = input;
                }}
                placeholder="Exercise Group Name"
              />
            </ListItem.Content>
          </ListItem>

          <ListItem containerStyle={styles.ListItemContainer}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: exerciseGroupColor.current,
                width: 32,
                height: 32,
              }}></View>
            <ListItem.Content>
              <View>
                <Button
                  title={"Change color"}
                  type="clear"
                  containerStyle={{}}
                  titleStyle={{ color: GLOBAL_STYLES.COLORS.text }}
                  onPress={toggleColorpickerOverlay}
                />
              </View>
            </ListItem.Content>
          </ListItem>

          <ListItem containerStyle={styles.ListItemContainer}>
            <ListItem.Content>
              <DropDownPicker
                multiple={true}
                open={dropdownOpen}
                value={dropdownValue}
                items={dropdownItems}
                setOpen={setDropdownOpen}
                setValue={setDropdownValue}
                setItems={setDropdownItems}
                listMode="MODAL"
                modalAnimationType="slide"
                modalContentContainerStyle={{
                  backgroundColor: GLOBAL_STYLES.COLORS.background2,
                }}
                theme="DARK"
                mode="BADGE"
                showBadgeDot={false}
                placeholder="Select Exercises"
                searchPlaceholder="Search Exercise List..."
                searchable={true}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  minHeight: 50,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: GLOBAL_STYLES.COLORS.background,
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  backgroundColor: GLOBAL_STYLES.COLORS.background1,
                }}
                dropDownContainerStyle={{
                  position: "absolute",
                  backgroundColor: GLOBAL_STYLES.COLORS.background1,
                  borderRadius: 8,
                  borderColor: GLOBAL_STYLES.COLORS.background,
                  borderWidth: 1,
                  width: "100%",
                  overflow: "hidden",
                  zIndex: 1000,
                }}
              />
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
              backgroundColor: GLOBAL_STYLES.COLORS.background2,
            }}>
            <View
              style={{
                marginTop: -30,
                height: 300,
              }}>
              <ColorPicker
                gapSize={4}
                color={exerciseGroupColor.current}
                onColorChangeComplete={(newColor) => {
                  exerciseGroupColor.current = newColor;
                }}
              />
            </View>
            <Button
              title="Save color"
              type="clear"
              titleStyle={{ color: GLOBAL_STYLES.COLORS.accent }}
              containerStyle={{ marginTop: 25 }}
              onPress={toggleColorpickerOverlay}
            />
          </Overlay>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {/* ExerciseGroupIndex is null when new exercise is created */}
          {exerciseGroupIndex !== null ? (
            <Button
              title={"Delete"}
              type="clear"
              containerStyle={{ marginTop: 10 }}
              titleStyle={{ color: GLOBAL_STYLES.COLORS.danger, zIndex: 10 }}
              onPress={() => {
                toggleOverlay();
                if (exerciseGroupIndex === null) {
                  return;
                }
                deleteExerciseGroup(exerciseGroupIndex);
              }}
            />
          ) : (
            ""
          )}
          <Button
            title={exerciseGroupIndex === null ? "Add" : "Update"}
            type="clear"
            containerStyle={{ marginTop: 10 }}
            titleStyle={{ color: GLOBAL_STYLES.COLORS.accent, zIndex: 10 }}
            onPress={() => {
              const newExerciseGroup = {
                name: exerciseGroupName.current,
                color: exerciseGroupColor.current,
                list: dropdownValue,
                icon: exerciseGroupIcon.current,
              };
              toggleOverlay();
              updateExerciseGroup(exerciseGroupIndex, newExerciseGroup);
            }}
          />
        </View>
      </View>
    </SlideUpContainer>
  );
}

const styles = StyleSheet.create({
  ListItemContainer: {
    backgroundColor: GLOBAL_STYLES.COLORS.background2,
    paddingVertical: 10,
  },
});
