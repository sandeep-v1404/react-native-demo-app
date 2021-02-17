import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const StyledButton = ({ type, content, showWarn }) => {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#ffffffA6";
  const textColor = type === "primary" ? "#ffffff" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => showWarn()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};
export default StyledButton;
