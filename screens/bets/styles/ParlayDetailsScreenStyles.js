import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#151719",
    height: "100%",
    justifyContent: "flex-start",
  },
  topSection: {
    marginTop: "18%",
    padding: 20,
    height: "12%",
  },
  midSection: {
    height: "65%",
    padding: 10,
  },
  bottomSection: {
    justifyContent: "center",
    height: "15%",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontFamily: "Inter-Bold",
    marginBottom: "1%",
    alignSelf: "flex-start",
    textTransform: "uppercase",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: "2%",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "Inter-Bold",
    marginBottom: "5%",
  },
  strengthBar: {
    height: 4,
    backgroundColor: "#333", // Equivalent to bg-gray-700
    borderRadius: 2,
    overflow: "hidden",
    width: "100%",
    marginBottom: "25%",
  },
  sectionHeader: {
    color: "#009afa", // Equivalent to text-blue-500
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: "5%",
    marginLeft: "2%",
    alignSelf: "flex-start",
  },
  betItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: 10,
    borderRadius: 20,
    padding: 20,
  },
  betText: {
    flex: 1,
    marginLeft: 10,
  },
  betTextContainer: {
    display: "flex",
    flexDirection: "row",
  },
  betTitle: {
    color: "#F7F7F7",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  betDescription: {
    color: "#F7FBFF",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  newBetButton: {
    backgroundColor: "#009AFA",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10%",
    height: 56,
    width: "75%",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
  },
  imageIcon: {
    height: 64,
    width: 64,
    marginRight: 8,
  },
});

export default styles;
