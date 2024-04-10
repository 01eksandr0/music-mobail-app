import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../Button/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { closeModalCreate } from "../../redux/slices/modalCreateSlice";
import { createNewPlaylist } from "../../redux/slices/playlistSlice";

export const ModalCreatePlaylist = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    dispatch(createNewPlaylist(value));
    dispatch(closeModalCreate());
  };

  return (
    <View style={s.container}>
      <Button onClick={() => dispatch(closeModalCreate())}>
        <MaterialCommunityIcons name="close" size={40} color="#fff" />
      </Button>
      <Text style={s.text}>Create playlist's name</Text>
      <TextInput
        onChangeText={(e) => setValue(e)}
        value={value}
        style={s.input}
        placeholder="Playlist name"
        placeholderTextColor={"rgba(255,255,255,0.5)"}
      />
      <Button onClick={handleSubmit} styleBtn={s.btn} styleText={s.btnText}>
        Create
      </Button>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 25,
    paddingTop: 160,
    display: "flex",
    alignItems: "center",
    gap: 20,
    zIndex: 2,
  },
  text: { color: "#fff", fontSize: 25 },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    height: 40,
    width: "100%",
    borderRadius: 10,
    paddingLeft: 20,
    color: "#fff",
  },
  btn: {
    height: 40,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "rgb(250, 205, 102)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { fontSize: 24, color: "rgba(0,0,0,0.5)" },
});
