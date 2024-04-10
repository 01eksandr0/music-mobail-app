import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeAddPlaylist } from "../../redux/slices/modalAddInPlaylistSlice";
import { Ionicons } from "@expo/vector-icons";
import { selectModalAddPlaylist, selectPlaylists } from "../../redux/selecter";
import { HomeHeroPlaylistItem } from "../HomeHeroPlaylistItem/HomeHeroPlaylistItem";
import { openModalCreate } from "../../redux/slices/modalCreateSlice";
import { addNewTrackInPlaylist } from "../../redux/slices/playlistSlice";

export const ModalAddInPlaylist = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectModalAddPlaylist);
  const list = useSelector(selectPlaylists);
  const add = (idTrack) => {
    dispatch(addNewTrackInPlaylist(idTrack, id));
    dispatch(closeAddPlaylist());
  };
  return (
    <View style={s.container}>
      <Button onClick={() => dispatch(closeAddPlaylist())}>
        <AntDesign name="down" size={30} color="#fff" />
      </Button>
      <Button onClick={() => dispatch(openModalCreate())}>
        <Ionicons name="add-circle-outline" size={40} color="#fff" />
      </Button>
      <ScrollView>
        {list.map((i) => (
          <TouchableOpacity onPress={() => add(i.id)} style={s.item} key={i.id}>
            <Text style={s.text}>{i.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    paddingTop: 60,
    display: "flex",
    alignItems: "center",
    gap: 30,
  },
  item: {
    height: 40,
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
  },
  text: { color: "#fff" },
});
