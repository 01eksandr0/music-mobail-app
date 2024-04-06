import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import grey from "../../img/grey.avif";
import { Entypo } from "@expo/vector-icons";

export const HomeHeroCreateItem = () => {
  return (
    <View style={s.item}>
      <ImageBackground source={grey} style={s.favorite}>
        <Entypo name="plus" size={24} color="black" />
      </ImageBackground>
      <Text style={s.text}>Create playlist</Text>
    </View>
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
