import { useState } from "react";
import { Icon, ListItem, Text } from "@rneui/themed";
import { GLOBAL_STYLES } from "../../styles/Style";

export default function Settings() {
  const [slideUpColorThemeVisible, setSlideUpColorThemeVisible] =
    useState(false);

  return (
    <>
      <Text h1 style={GLOBAL_STYLES.h1}>
        Settings
      </Text>

      <ListItem
        containerStyle={{ backgroundColor: GLOBAL_STYLES.COLORS.background1 }}
      >
        <Icon
          name="trash-outline"
          type="ionicon"
          color={GLOBAL_STYLES.COLORS.text}
        />
        <ListItem.Content>
          <ListItem.Title style={{ color: GLOBAL_STYLES.COLORS.text }}>
            Clear Data
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem
        containerStyle={{ backgroundColor: GLOBAL_STYLES.COLORS.background1 }}
      >
        <Icon
          name="color-palette-outline"
          type="ionicon"
          color={GLOBAL_STYLES.COLORS.text}
        />
        <ListItem.Content>
          <ListItem.Title style={{ color: GLOBAL_STYLES.COLORS.text }}>
            Color Theme
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </>
  );
}
