import { Image } from "react-native";

const ImageIcon = ({player, style}) => {

    return (
        <Image source={{ uri: player }} style={style} />
    );
};

export default ImageIcon;