import { View, Image, StyleSheet } from "react-native";
import { placeHolder } from "../assets/const";

const ImageIcon = ({ player, gradient, team1, team2, style }) => {
  if (player != null && gradient != null) {
    return (
      <View>
        {/* <Image source={{ uri: gradient }} style={[styles.backgroundImage, style]} /> */}
        <Image source={{ uri: player }} style={[styles.foregroundImage, style]} />
      </View>
    );
  } else if (team1 != null && team2 != null) {
    return (
      <View>
        <Image source={{ uri: team1 }} style={style} />
        <Image source={{ uri: team2 }} style={style} />
      </View>
    );
  } else {
    return <Image source={{ uri: placeHolder }} style={style} />;
  }
};

const styles = StyleSheet.create({
    backgroundImage: {
    },
    foregroundImage: {
    }
})

export default ImageIcon;
