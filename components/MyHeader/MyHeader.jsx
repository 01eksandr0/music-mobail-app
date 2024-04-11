import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Button } from "../Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/slices/userSlice";
export const MyHeader = () => {
  const dispatch = useDispatch();
  return (
    <View style={s.container}>
      <Button onClick={() => dispatch(createUser("", ""))}>
        <FontAwesome name="user" size={26} color="rgb(164, 199, 198)" />
      </Button>
      <Text style={s.text}>Music is life</Text>
      <Fontisto name="music-note" size={26} color="rgb(250, 205, 102)" />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "rgb(30,30,30)",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 10,
  },
  text: { fontSize: 22, color: "rgba(255,255,255,0.5)", fontStyle: "italic" },
});
