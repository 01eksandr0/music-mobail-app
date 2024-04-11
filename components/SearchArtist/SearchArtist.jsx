import React, { useState } from "react";
import { Background } from "../Background/Background";
import {
  Image,
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
import { searchTrack } from "../../js/requsts";

export const SearchArtist = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = async () => {
    if (!value.trim()) return;
    try {
      const response = await searchTrack(value);
      console.log(response);
      setList([response.data[0].artist]);
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
          <View>
            {list.map((i) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Favorite");
                  setTimeout(() =>
                    navigation.navigate("ArtistInfo", { id: i.id })
                  );
                }}
                style={s.item}
                key={i.id}
              >
                <View style={s.imgContiner}>
                  <Image
                    height={60}
                    width={60}
                    source={{ uri: i.picture_big }}
                  />
                  <View>
                    <Text style={s.trackName}>{i.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    gap: 30,
    alignItems: "center",
    width: "80%",
    overflow: "hidden",
  },
  trackName: {
    fontSize: 18,
    color: "#fff",
    height: 24,
  },
});
