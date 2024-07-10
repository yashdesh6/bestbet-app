import { StyleSheet } from "react-native";

const getStyleForGrade = (grade) => {
  let style;
  if (grade.startsWith("A")) {
    style = styles.betGradeGreen;
  } else if (grade.startsWith("B")) {
    style = styles.betGradeYellow;
  } else if (grade.startsWith("C")) {
    style = styles.betGradeRed;
  } else {
    style = styles.betGradeDefault;
  }
  return style;
};

const getStyleForStrength = (grade) => {
  let style;
  if (grade.startsWith("A")) {
    style = styles.greenStrengthIndicator;
  } else if (grade.startsWith("B")) {
    style = styles.yellowStrengthIndicator;
  } else if (grade.startsWith("C")) {
    style = styles.redStrengthIndicator;
  } else {
    style = styles.defaultStrengthIndicator;
  }
  return style;
};

export { getStyleForGrade, getStyleForStrength };

const styles = StyleSheet.create({
  betGradeGreen: {
    color: "#1DCE86",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  betGradeYellow: {
    color: "#E5A500",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  betGradeRed: {
    color: "#FF6257",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  betGradeDefault: {
    color: "black",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  greenStrengthIndicator: {
    height: "100%",
    width: "100%",
    backgroundColor: "#1DCE86",
  },
  yellowStrengthIndicator: {
    height: "100%",
    width: "66%",
    backgroundColor: "#E5A500",
  },
  redStrengthIndicator: {
    height: "100%",
    width: "33%",
    backgroundColor: "#FF6257",
  },
  defaultStrengthIndicator: {
    height: "100%",
    width: "0%",
    backgroundColor: "black",
  },
});
