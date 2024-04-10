import React from "react";
import { Background } from "../../components/Background/Background";
import { ScrollView } from "react-native-gesture-handler";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import favorite from "../../img/backFav.avif";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite, selectPlaylists } from "../../redux/selecter";
import play from "../../img/playlist.png";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button/Button";
import { Ionicons } from "@expo/vector-icons";
import { openModalCreate } from "../../redux/slices/modalCreateSlice";

export const FavoriteHome = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectPlaylists);
  const favTracks = useSelector(selectFavorite);
  const navigation = useNavigation();
  return (
    <Background>
      <View style={s.headerContainer}>
        <Text style={s.header}>My collection</Text>
        <Button onClick={() => dispatch(openModalCreate())}>
          <Ionicons name="add-circle-outline" size={30} color="#fff" />
        </Button>
      </View>
      <ScrollView style={s.list} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FavoriteTracks")}
          style={s.favorite}
        >
          <ImageBackground style={s.favBack} source={favorite}>
            <AntDesign name="heart" size={30} color="#fff" />
          </ImageBackground>
          <View>
            <Text style={s.title}>Favorite songs</Text>
            <Text style={s.quantity}>{favTracks.length} : Songs</Text>
          </View>
        </TouchableOpacity>
        {playlists.map((i) => (
          <TouchableOpacity
            key={i.id}
            style={s.favorite}
            onPress={() => {
              navigation.navigate("Playlist", { id: i.id });
            }}
          >
            <ImageBackground style={s.favBack} source={play}></ImageBackground>
            <View>
              <Text style={s.title}>{i.name}</Text>
              <Text style={s.quantity}>{i.list.length} : Songs</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Background>
  );
};

const s = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  header: { color: "#fff", fontSize: 26 },
  list: { marginTop: 20 },
  favorite: {
    height: 70,
    width: "100%",
    backgroundColor: "rgb(60,60,60)",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    gap: 20,
    marginBottom: 10,
  },
  favBack: {
    height: 70,
    width: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  quantity: { fontSize: 16, color: "rgba(255,255,255,0.5)" },
});
