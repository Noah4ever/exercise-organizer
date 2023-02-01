import React from "react";
import { Text } from "@rneui/themed";
import { GLOBAL_STYLES } from "../../styles/Style";

export default function Workouts({ themeProvider }) {
  return (
    <Text h1 style={[GLOBAL_STYLES.h1, { color: themeProvider.text }]}>
      Workout
    </Text>
  );
}
