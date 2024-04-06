import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export const ScrolList = ({ children, title }) => {
  return (
    <View style={s.container}>
      <Text style={s.text}> {title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  container: { marginTop: 20 },
  text: { color: "#fff", fontSize: 22, marginBottom: 15 },
});
