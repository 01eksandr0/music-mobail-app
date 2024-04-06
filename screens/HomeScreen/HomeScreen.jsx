import React from "react";
import { Background } from "../../components/Background/Background";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import listTracks from "../../DATA/tracks.json";
import listArtists from "../../DATA/artist.json";
import { ScrolList } from "../../components/ScrolList/ScrolList";
import { HomeTrack } from "../../components/HomeTrack/HomeTrack";
import Player from "../../components/Player/Player";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { openPlayer } from "../../redux/slices/playerSlice";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <Background>
      <HomeHero />
      <ScrolList title={"Recomend songs"}>
        {listTracks.map((i) => (
          <Button onClick={() => dispatch(openPlayer(`${i.id}`))}>
            <HomeTrack img={i.img} name={i.name} />
          </Button>
        ))}
      </ScrolList>
      <ScrolList title={"Recomend artist"}>
        {listArtists.map((i) => (
          <HomeTrack img={i.img} name={i.name} />
        ))}
      </ScrolList>
      <Player />
    </Background>
  );
};
