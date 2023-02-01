import { useState } from "react";
import { Icon, ListItem, Text } from "@rneui/themed";
import { GLOBAL_STYLES } from "../../styles/Style";
import ColorThemeSlideUp from "./ColorThemeSlideUp";

export default function Settings({ themeProvider }) {
  const [slideUpColorThemeVisible, setSlideUpColorThemeVisible] = useState(false);

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

      <ListItem containerStyle={{ backgroundColor: themeProvider.background1 }}>
        <Icon name="color-palette-outline" type="ionicon" color={themeProvider.text} />
        <ListItem.Content>
          <ListItem.Title style={{ color: themeProvider.text }}>Color Theme</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      {/* <ColorThemeSlideUp /> */}
    </>
  );
}
