import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export const HomeTrack = ({ id, img, name }) => {
  return (
    <View style={s.container}>
      <ImageBackground
        source={{ uri: `${img}` }}
        style={s.item}
      ></ImageBackground>
      <Text style={s.text}>{name}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    display: "flex",
    gap: 5,
    overflow: "hidden",
    width: 100,
    height: 120,
    marginRight: 15,
  },
  item: {
    width: 100,
    height: 100,
    borderRadius: 15,
    overflow: "hidden",
  },
  text: { color: "#fff" },
});
