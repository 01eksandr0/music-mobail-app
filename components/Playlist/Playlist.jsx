import React, { useEffect, useState } from "react";
import { Background } from "../Background/Background";
import { Button } from "../Button/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectPlaylists } from "../../redux/selecter";
import { MaterialIcons } from "@expo/vector-icons";
import { getTrackById, searchTrack } from "../../js/requsts";
import { openInfo } from "../../redux/slices/modalMoreInfoSlice";
import { openPlayer } from "../../redux/slices/playerSlice";

export const Playlist = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const list = useSelector(selectPlaylists);
  const [tracks, setTracks] = useState([]);
  const [playlistInfo, setPlaylistInfo] = useState({});
  const {
    params: { id },
  } = useRoute();
  useEffect(() => {
    const index = list.findIndex((i) => i.id === id);
    setPlaylistInfo(list[index]);
    const getData = async () => {
      const arr = [];
      for (let i of list[index].list) {
        try {
          const response = await getTrackById(i);
          arr.push(response);
        } catch (error) {
          console.log(error);
        }
      }
      setTracks([...arr]);
    };
    getData();
  }, []);

  const createPlayer = async (id) => {
    try {
      const { artist } = await getTrackById(id);
      const { data } = await searchTrack(artist.name);
      const arrayIds = [...new Set([parseInt(id), ...data.map((i) => i.id)])];
      dispatch(openPlayer(arrayIds));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <View style={s.container}>
        <Button onClick={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="#fff" />
        </Button>
        <Text style={s.title}>{playlistInfo.name}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!!tracks.length &&
          tracks.map((i) => {
            console.log(i);
            return (
              <TouchableOpacity
                onPress={() => createPlayer(i.id)}
                style={s.item}
                key={i.id}
              >
                <View style={s.imgContiner}>
                  <Image
                    height={60}
                    width={60}
                    source={{ uri: i.album.cover }}
                  />
                  <View>
                    <Text style={s.trackTitle}>{i.title}</Text>
                    <Text style={s.trackName}>{i.artist.name}</Text>
                  </View>
                </View>
                <Button onClick={() => dispatch(openInfo(i.id))}>
                  <MaterialIcons name="more-vert" size={30} color="#fff" />
                </Button>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </Background>
  );
};

const s = StyleSheet.create({
  container: { paddingTop: 40 },
  title: { color: "#fff", fontSize: 26, marginTop: 10, marginBottom: 20 },
  item: {
    display: "flex",
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgContiner: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "80%",
    overflow: "hidden",
  },
  trackTitle: { fontSize: 18, color: "#fff", height: 24 },
  trackName: {
    fontSize: 16,
    color: "rgba(255,255,255,0.5)",
    height: 20,
  },
});
