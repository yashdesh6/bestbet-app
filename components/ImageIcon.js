import { View, Image, StyleSheet, ImageBackground } from "react-native";
import { placeHolder } from "../assets/const";

const ImageIcon = ({ player, gradient, team1, team2, dim, style }) => {
  if (player != null && gradient != null) {
    return (
      <View style={style}>
        <Image source={{ uri: gradient }} style={styles.backgroundImage} />
        <Image
          source={{ uri: player }}
          style={[styles.foregroundImage, { borderRadius: dim * 0.45 }]}
        />
      </View>
    );
  } else if (team1 != null && team2 != null) {
    return (
      <View style={style}>
        <Image source={{ uri: team1 }} style={styles.team1} />
        <Image source={{ uri: team2 }} style={styles.team2} />
      </View>
    );
  } else {
    return <Image source={{ uri: placeHolder }} style={style} />;
  }
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  foregroundImage: {
    position: "absolute",
    top: "5%",
    left: "5%",
    width: "90%",
    height: "90%",
  },
});

export default ImageIcon;
