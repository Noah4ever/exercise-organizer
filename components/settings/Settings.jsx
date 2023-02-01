import { useState } from "react";
import { LayoutAnimation } from "react-native";
import { Icon, ListItem, Text } from "@rneui/themed";
import { GLOBAL_STYLES } from "../../styles/Style";
import ColorThemeSlideUp from "./ColorThemeSlideUp";

export default function Settings({ themeProvider, setTheme }) {
  const [slideUpColorThemeVisible, setSlideUpColorThemeVisible] = useState(false);
  function toggleColorThemeSlideUp() {
    LayoutAnimation.configureNext({
      update: {
        type: "EaseOut",
      },
      duration: 250,
    });
    setSlideUpColorThemeVisible(!slideUpColorThemeVisible);
  }

  return (
    <>
      <Text h1 style={[GLOBAL_STYLES.h1, { color: themeProvider.text }]}>
        Settings
      </Text>

      <ListItem containerStyle={{ backgroundColor: themeProvider.background1 }}>
        <Icon name="trash-outline" type="ionicon" color={themeProvider.text} />
        <ListItem.Content>
          <ListItem.Title style={{ color: themeProvider.text }}>Clear Data</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem containerStyle={{ backgroundColor: themeProvider.background1 }} onPress={toggleColorThemeSlideUp}>
        <Icon name="color-palette-outline" type="ionicon" color={themeProvider.text} />
        <ListItem.Content>
          <ListItem.Title style={{ color: themeProvider.text }}>Color Theme</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ColorThemeSlideUp
        themeProvider={themeProvider}
        visible={slideUpColorThemeVisible}
        toggleSlideUp={toggleColorThemeSlideUp}
        setTheme={setTheme}
      />
    </>
  );
}
