import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const Background = ({ children }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={s.container}>
      {children}
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: " rgb(30, 30, 30)",
    padding: 25,
    paddingBottom: 80,
  },
});
