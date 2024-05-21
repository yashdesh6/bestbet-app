import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      display: "flex",
      backgroundColor: "#151719",
      height: "100%",
    },
    topSection: {
      display: "flex",
      alignItems: "center",
      marginTop: "15%",
    },
    contentSection: {
      display: "flex",
      paddingHorizontal: 16,
    },
    image: {
      height: 96,
      width: 96,
      borderRadius: 48,
      marginBottom: 16,
    },
    title: {
      color: "#F7F7F7", // Equivalent to text-blue-500
      fontSize: 28,
      fontFamily: "Inter-Bold",
      textTransform: "uppercase",
      marginBottom: 8,
    },
    description: {
      color: "#F7F7F7",
      fontStyle: "italic",
      fontSize: 18,
      marginBottom: 16,
    },
    betContainer: {
      width: "100%",
      backgroundColor: "#333", // Equivalent to bg-gray-700
      borderRadius: 10,
      padding: 16,
      marginBottom: 24,
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
      marginBottom: 8,
    },
    betText: {
      fontSize: 18,
      lineHeight: 22,
      fontFamily: "Inter-SemiBold",
      color: "#F7F7F7",
      marginBottom: 16,
    },
    line: {
      width: "100%",
      height: 0,
      borderColor: "rgba(200, 200, 200, 0.2)",
      borderWidth: "1px",
      marginVertical: 30
    },
    suggestText: {
      fontSize: 16,
      lineHeight: 22,
      fontFamily: "Inter-SemiBold",
      color: "#F7F7F7",
      marginBottom: 16,
      textAlign: "center",
    },
    facts: {
      marginBottom: 35
    },
    textContainer: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      alignItems: "center",
      marginBottom: "2%",
    },
    strengthText: {
      color: "#F7FBFF", // Equivalent to text-green-500
      fontFamily: "Inter-Bold",
      fontSize: 22,
    },
    suggestionContainer: {
      width: "100%",
      backgroundColor: "#333",
      borderRadius: 10,
      padding: 16,
    },
    infoHeader: {
      color: "white",
      fontSize: 22,
      fontFamily: "Inter-Bold",
      marginTop: 10,
      marginBottom: 18,
    },
    subsectionHeader: {
      color: "#009AFA",
      fontSize: 20,
      fontFamily: "Inter-Bold",
      marginBottom: 16,
    }
  });

  export default styles;