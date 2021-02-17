import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          showWarn={() => {
            console.warn("Custom Order Pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          showWarn={() => {
            console.warn("Existing Inventory Pressed");
          }}
        />
      </View>
    </View>
  );
};
export default CarItem;
