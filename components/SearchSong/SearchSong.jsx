import React, { useState } from "react";
import { Background } from "../Background/Background";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../Button/Button";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { getTrackById, searchTrack } from "../../js/requsts";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { openPlayer } from "../../redux/slices/playerSlice";
import { openInfo } from "../../redux/slices/modalMoreInfoSlice";

export const SearchSong = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = async () => {
    if (!value.trim()) return;
    try {
      const response = await searchTrack(value);
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
        <View style={s.searchBar}>
          <Button onClick={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={30} color="#fff" />
          </Button>
          <View style={s.inputContainer}>
            <TextInput
              style={s.input}
              onChangeText={(e) => setValue(e)}
              placeholder="Search song"
            />
            <Button onClick={handleSubmit} styleBtn={s.btn}>
              <FontAwesome name="search" size={26} color="#000" />
            </Button>
          </View>
        </View>
        {!!list.length && (
          <ScrollView>
            {list.map((i) => (
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
    </Background>
  );
};

const s = StyleSheet.create({
  container: { paddingTop: 40, width: "100%", paddingBottom: 80 },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    gap: 10,
    marginBottom: 20,
  },
  inputContainer: { position: "relative" },
  input: {
    height: 40,
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 20,
  },
  btn: { position: "absolute", right: 10, top: 5 },
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
