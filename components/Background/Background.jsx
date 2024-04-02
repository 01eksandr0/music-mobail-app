import React from "react";
import { StyleSheet, View } from "react-native";

export const Background = ({ children }) => {
  return <View style={s.container}>{children}</View>;
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: " rgb(30, 30, 30)",
    padding: 25,
  },
});
