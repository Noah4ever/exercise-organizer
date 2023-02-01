import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import SlideUpContainer from "../utils/SlideUpContainer";
import { ColorThemes, GLOBAL_STYLES } from "../../styles/Style";
import DropDownPicker from "react-native-dropdown-picker";

export default function ColorThemeSlideUp({ themeProvider, visible, toggleSlideUp, setTheme }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState({ label: "Light", value: "light" });
  const [dropdownItems, setDropdownItems] = useState(
    ColorThemes.map((ex) => {
      return { label: ex.name, value: ex.id };
    })
  );

  return (
    <SlideUpContainer themeProvider={themeProvider} visible={visible} toggleOverlay={toggleSlideUp}>
      <View>
        <Text style={{ color: themeProvider.text }}>Select Color Theme: </Text>
        <DropDownPicker
          open={dropdownOpen}
          value={dropdownValue}
          items={dropdownItems}
          setOpen={setDropdownOpen}
          setValue={setDropdownValue}
          setItems={setDropdownItems}
          onChangeValue={(theme) => {
            console.log(theme);
            setTheme(theme);
          }}
          theme={themeProvider.dropdownTheme}
          placeholder="Select Theme"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            minHeight: 50,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: themeProvider.background,
            paddingHorizontal: 10,
            paddingVertical: 3,
            backgroundColor: themeProvider.background1,
          }}
          dropDownContainerStyle={{
            position: "absolute",
            backgroundColor: themeProvider.background1,
            borderRadius: 8,
            borderColor: themeProvider.background,
            borderWidth: 1,
            width: "100%",
            overflow: "hidden",
            zIndex: 1000,
          }}
        />
      </View>
    </SlideUpContainer>
  );
}
