import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite, selectMoreInfo } from "../../redux/selecter";
import { getTrackById } from "../../js/requsts";
import { Button } from "../Button/Button";
import { AntDesign } from "@expo/vector-icons";
import { closeInfo } from "../../redux/slices/modalMoreInfoSlice";
import backFav from "../../img/backFav.avif";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import {
  addNewTrack,
  deleteTrack,
} from "../../redux/slices/favoriteTracksSlice";
import { openAddPlaylist } from "../../redux/slices/modalAddInPlaylistSlice";
import { useNavigation } from "@react-navigation/native";

export const ModalMoreInfo = () => {
  const { id } = useSelector(selectMoreInfo);
  const [info, setInfo] = useState(null);
  const favList = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getTrackById(id);
        console.log(response);
        setInfo(response);
      } catch (error) {}
    };
    getData();
  }, []);

  const toggleFavorite = () => {
    if (favList.includes(id)) {
      dispatch(deleteTrack(id));
    } else {
      dispatch(addNewTrack(id));
    }
  };
  return (
    <View style={s.container}>
      {info && (
        <>
          <Button onClick={() => dispatch(closeInfo())}>
            <AntDesign name="down" size={30} color="#fff" />
          </Button>
          <Image height={150} width={150} source={{ uri: info.album.cover }} />
          <View style={s.btnContainer}>
            <Button styleText={s.text} onClick={toggleFavorite}>
              <Image height={22} width={22} source={backFav} />
              {favList.includes(id)
                ? "   Delete from favorite"
                : "   Add to my favorite"}
            </Button>
            <Button
              onClick={() => dispatch(openAddPlaylist(id))}
              styleText={s.text}
            >
              <Ionicons
                name="add-circle-outline"
                size={28}
                color="rgb(250, 205, 102)"
              />
              {"  "}
              Add to playlist
            </Button>
            <Button
              styleText={s.text}
              onClick={() => {
                navigation.navigate("ArtistInfo", { id: info.artist.id });
                dispatch(closeInfo());
              }}
            >
              <Fontisto name="person" size={26} color="rgb(250, 205, 102)" />
              {"   "}Go to author
            </Button>
          </View>
        </>
      )}
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
    gap: 40,
  },
  btnContainer: { display: "flex", gap: 20 },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
  },
});
