import { BlurView } from "expo-blur";
import { StyleSheet, View, Text } from "react-native";

const Fact = (props) => {
  return (
    <BlurView tint={'dark'} style={styles.factContainer}>
      <View style={styles.circle} />
      <Text style={styles.factText}>{props.fact}</Text>
    </BlurView>
  );
};

export default Fact;

const styles = StyleSheet.create({
  factContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    overflow: 'hidden'
  },
  circle: {
    width: 47,
    height: 47,
    marginRight: 25,
    borderRadius: 100,
    backgroundColor: '#009AFA',
  },
  factText: {
    flexShrink: -1,
    color: "#F7F7F7",
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
});
