import React from "react";
import { Text } from "@rneui/themed";
import SlideUpContainer from "../utils/SlideUpContainer";
import { GLOBAL_STYLES } from "../../styles/Style";

export default function ColorThemeSlideUp() {
  return (
    <SlideUpContainer>
      <Text style={{ color: GLOBAL_STYLES.COLORS.text }}>HALLO</Text>
    </SlideUpContainer>
  );
}
