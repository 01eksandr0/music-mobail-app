import React, { useEffect, useState } from "react";
import { Background } from "../../components/Background/Background";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getArtistById, getTrackById, searchTrack } from "../../js/requsts";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../../components/Button/Button";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { openPlayer } from "../../redux/slices/playerSlice";
import { useDispatch } from "react-redux";
import { openInfo } from "../../redux/slices/modalMoreInfoSlice";

export const ArtistInfo = () => {
  const {
    params: { id },
  } = useRoute();
  const [info, setInfo] = useState({});
  const [tracks, setTracks] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const createInfoArtist = async () => {
      try {
        const response = await getArtistById(id);

        setInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    createInfoArtist();
  }, []);
  useEffect(() => {
    const getListTracks = async () => {
      try {
        const response = await searchTrack(info.name);
        console.log(response);
        setTracks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getListTracks();
  }, [info]);

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
      {info.name && (
        <View style={s.container}>
          <ImageBackground
            style={{ height: 300, width: "100%" }}
            source={{ uri: info.picture_big }}
          >
            <Button
              styleBtn={{ margin: 10 }}
              onClick={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={30} color="#fff" />
            </Button>
          </ImageBackground>
          <Text style={{ fontSize: 30, color: "#fff", marginTop: 10 }}>
            {info.name}
          </Text>
          {!!tracks && (
            <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
              {tracks.map((i) => (
                <TouchableOpacity
                  onPress={() => createPlayer(i.id)}
                  style={s.item}
                  key={i.id}
                >
                  <View style={s.imgContiner}>
                    <Image
                      height={60}
                      width={60}
                      source={{ uri: i.album.cover_big }}
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
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </Background>
  );
};

const s = StyleSheet.create({
  container: { paddingTop: 30 },
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
