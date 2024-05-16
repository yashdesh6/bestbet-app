import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from 'expo-blur';

const InfoBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundBox}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <BlurView tint={'dark'} style={[styles.contentBox, props.style]}>
        <View>{props.children}</View>
      </BlurView>
    </View>
  );
};

export default InfoBox;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#151719",
  },
  titleBox: {
    backgroundColor: "#151719",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 100,
  },
  backgroundBox: {
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 100,
    position: 'absolute',
    top: 5,
    backgroundColor: "rgba(0, 154, 250, 0.3)",
    zIndex: -2
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter-Bold",
    color: "#009AFA",
  },
  contentBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    position: "relative",
    zIndex: -1,
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 60,
    overflow: 'hidden',
    borderRadius: 20,
    top: -18,
    width: '100%'
  }
});
