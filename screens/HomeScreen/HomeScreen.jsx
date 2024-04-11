import React from "react";
import { Background } from "../../components/Background/Background";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import listTracks from "../../DATA/tracks.json";
import listArtists from "../../DATA/artist.json";
import { ScrolList } from "../../components/ScrolList/ScrolList";
import { HomeTrack } from "../../components/HomeTrack/HomeTrack";

import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { openPlayer } from "../../redux/slices/playerSlice";
import { ScrollView, TouchableOpacity } from "react-native";
import { getTrackById, searchTrack } from "../../js/requsts";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHero />
        <ScrolList title={"Recomend songs"}>
          {listTracks.map((i) => (
            <Button key={i.id} onClick={() => createPlayer(i.id)}>
              <HomeTrack img={i.img} name={i.name} />
            </Button>
          ))}
        </ScrolList>
        <ScrolList title={"Recomend artist"}>
          {listArtists.map((i) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Favorite");
                setTimeout(() =>
                  navigation.navigate("ArtistInfo", { id: i.id })
                );
              }}
              key={i.id}
            >
              <HomeTrack img={i.img} name={i.name} />
            </TouchableOpacity>
          ))}
        </ScrolList>
      </ScrollView>
    </Background>
  );
};
