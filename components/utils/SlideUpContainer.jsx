import React, { useState } from "react";
import { StyleSheet, Animated } from "react-native";
import { Overlay } from "@rneui/themed";
import { GLOBAL_STYLES } from "../../styles/Style";

export default function SlideUpContainer({ visible, toggleOverlay, children }) {
  const [slideAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      animationType="slide"
      containerStyle={{
        transform: [{ translateY: slideAnim }],
      }}
      overlayStyle={{
        elevation: 4,
        width: "100%",
        height: "92%",
        marginTop: "auto",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        backgroundColor: GLOBAL_STYLES.COLORS.background2,
      }}
    >
      {children}
    </Overlay>
  );
}
