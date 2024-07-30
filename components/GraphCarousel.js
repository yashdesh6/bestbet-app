import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import GraphDisplay from "./GraphDisplay";
import getTypes from "./functions/getTypes";

const GraphCarousel = ({ data }) => {
  const type = data.betType;
  const types = getTypes(type);
  const width = Dimensions.get("window").width;

  console.log(types);

  // Determine the order of graph types
  const displayTypes = [
    ...types.filter((t) => t.toLowerCase() === type),
    ...types.filter((t) => t.toLowerCase() !== type),
  ];

  console.log(displayTypes);

  return (
    <View style={styles.container}>
      <Carousel
        loop={displayTypes.length > 1}
        autoPlay={displayTypes.length > 1}
        autoPlayInterval={5000}
        width={width}
        height={250}
        data={displayTypes}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={{ pointerEvents: "none" }}>
            <GraphDisplay data={data} type={item} isMain={item.toLowerCase() === type} />
          </View>
        )}
      />
    </View>
  );
};

export default GraphCarousel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 20,
    padding: 18,
    marginVertical: "5%",
  },
});
