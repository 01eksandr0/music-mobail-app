import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import playlist from "../../img/playlist.png";

export const HomeHeroPlaylistItem = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={s.item}>
      <ImageBackground source={playlist} style={s.favorite}></ImageBackground>
      <Text style={s.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  item: {
    height: 50,
    width: "47%",
    backgroundColor: "rgb(60,60,60)",
    borderRadius: 5,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    paddingRight: 5,
  },
  favorite: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
  },
  text: {
    color: "#fff",
  },
});
