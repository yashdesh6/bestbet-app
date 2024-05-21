import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import GraphDisplay from "./GraphDisplay";

const GraphCarousel = (props) => {
  const { type, data } = props;
  const types = ["Points", "Assists", "Rebounds"];
  const width = Dimensions.get("window").width;

  // Determine the order of graph types
  const displayTypes = [type, ...types.filter((t) => t !== type)];

  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoPlay={true}
        autoPlayInterval={5000}
        width={width}
        height={250} // Adjust height as needed
        data={displayTypes}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={{ pointerEvents: "none" }}>
            <GraphDisplay data={data} type={item} isMain={item === type} />
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
    backgroundColor: "#333",
    borderRadius: 20,
    padding: 16,
    marginVertical: "5%",
  },
});
