import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#151719",
    height: "100%",
    justifyContent: "flex-start",
  },
  topSection: {
    marginTop: "10%",
    height: "15%",
  },
  midSection: {
    height: "65%",
  },
  bottomSection: {
    justifyContent: "center",
    height: "15%",
    alignItems: 'center'
  },
  navBar: {
    padding: 10,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  header: {
    padding: 20,
  },
  welcomeText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Inter-Bold",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Inter-Medium",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  subHeaderText: {
    color: "#009AFA",
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  infoIcon: {
    width: 20,
    height: 20,
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: "#F7F7F7",
    borderRadius: 20,
    paddingLeft: 15,
    marginBottom: 10,
    height: 45
  },
  parlayItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: 10,
    borderRadius: 20,
    padding: 20,
  },
  parlayText: {
    flex: 1,
    marginLeft: 10,
  },
  parlayTitle: {
    color: '#F7F7F7',
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase"
  },
  parlayDescription: {
    color: "#F7FBFF",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  newParlayButton: {
    backgroundColor: "#009AFA",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    margin: 20,
    width: '75%'
  },
  newParlayText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
