import React from "react";
import styles from "./styles";
import { Dimensions, FlatList, View } from "react-native";
import cars from "./cars";
import CarItem from "../CarItem";
const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item, index }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};
export default CarsList;
