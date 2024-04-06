import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import fav from "../../img/backFav.avif";
import { AntDesign } from "@expo/vector-icons";
import { HomeHeroPlaylistItem } from "../HomeHeroPlaylistItem/HomeHeroPlaylistItem";
import { HomeHeroCreateItem } from "../HomeHeroCreateItem/HomeHeroCreateItem";
import { useSelector } from "react-redux";
import { selectPlaylists } from "../../redux/selecter";

export const HomeHero = () => {
  const list = useSelector(selectPlaylists);

  return (
    <View style={s.container}>
      <View style={s.item}>
        <ImageBackground source={fav} style={s.favorite}>
          <AntDesign name="heart" size={20} color="#fff" />
        </ImageBackground>
        <Text style={s.text}>Favorite</Text>
      </View>
      {list[0] ? (
        <HomeHeroPlaylistItem>{list[0].name}</HomeHeroPlaylistItem>
      ) : (
        <HomeHeroCreateItem />
      )}
      {list[1] ? (
        <HomeHeroPlaylistItem>{list[1].name}</HomeHeroPlaylistItem>
      ) : (
        <HomeHeroCreateItem />
      )}
      {list[2] ? (
        <HomeHeroPlaylistItem>{list[2].name}</HomeHeroPlaylistItem>
      ) : (
        <HomeHeroCreateItem />
      )}
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
