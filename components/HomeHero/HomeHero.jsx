import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const HomeHero = () => {
  return (
    <View style={s.container}>
      <View style={s.item}>
        <Text>Favorite</Text>
      </View>
      <View style={s.item}>
        <View></View>
        <Text>Create playlist</Text>
      </View>
      <View style={s.item}>
        <View></View>
        <Text>Create playlist</Text>
      </View>
      <View style={s.item}>
        <View></View>
        <Text>Create playlist</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10%",
  },
  item: {
    height: 50,
    width: "47%",
    backgroundColor: "rgb(60,60,60)",
    borderRadius: 5,
  },
  favorite: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    backgroundColor: `linear-gradient(
    199deg,
     rgba(147, 56, 218, 1) 95%,
    rgba(19, 37, 140, 1) 36%,

   
  )`,
  },
});
