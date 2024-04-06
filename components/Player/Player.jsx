import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Audio } from "expo-av";
import { Button } from "../Button/Button";
import { getTrackById, searchTrack } from "../../js/requsts";
import { useSelector } from "react-redux";
import { selectPlayer } from "../../redux/selecter";

const Player = () => {
  const { track } = useSelector(selectPlayer);
  const [trackInfo, setInfo] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getTrackById(track);
        const {
          preview,
          title,
          id,
          album: { cover },
        } = response;
        const { sound } = await Audio.Sound.createAsync({
          uri: `${preview}`,
        });
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.log("Error playing sound:", error);
      }
    };
    getData();
  }, [track]);

  //   const pauseSound = async () => {
  //     if (sound) {
  //       try {
  //         await sound.pauseAsync();
  //       } catch (error) {
  //         console.log("Error pausing sound:", error);
  //       }
  //     }
  //   };

  //   const stopSound = async () => {
  //     if (sound) {
  //       try {
  //         await sound.stopAsync();
  //         await sound.unloadAsync();
  //       } catch (error) {
  //         console.log("Error stopping sound:", error);
  //       }
  //     }
  //   };

  return <View></View>;
};

export default Player;
