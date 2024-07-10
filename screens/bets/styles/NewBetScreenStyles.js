import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1a1a1a',
      flex: 1,
    },
    innerContainer: {
      padding: 16,
    },
    headerText: {
      color: '#b3b3b3',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'around',
      flexWrap: 'wrap',
    },
    leagueButton: {
      margin: 4,
      padding: 8,
      borderRadius: 50,
    },
    typeButton: {
      margin: 4,
      padding: 8,
      borderRadius: 50,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 14,
    },
    active: {
      backgroundColor: '#007aff',
    },
    inactive: {
      backgroundColor: '#333',
    },
    input: {
      backgroundColor: '#333',
      color: 'white',
      borderRadius: 10,
      padding: 16,
      marginBottom: 16,
      textAlignVertical: 'top', // This helps with multiline input aligning properly
    },
    evaluateButton: {
      backgroundColor: '#007aff',
      padding: 12,
      borderRadius: 10,
      marginTop: 16,
    },
  });

  export default styles;