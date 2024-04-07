import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import { Button } from "../Button/Button";
import { getTrackById } from "../../js/requsts";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayer } from "../../redux/selecter";
import { AntDesign } from "@expo/vector-icons";
import { closePlayer } from "../../redux/slices/playerSlice";

export const Player = () => {
  const { track } = useSelector(selectPlayer);
  const [sound, setSound] = useState();
  const [trackInfo, setInfo] = useState({});
  const [isPlay, setPlay] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const stopSound = async () => {
      if (sound) {
        try {
          await sound.unloadAsync();
        } catch (error) {
          console.log("Error stopping sound:", error);
        }
      }
    };
    const getData = async () => {
      await stopSound();
      try {
        const response = await getTrackById(track);
        const {
          preview,
          title,
          id,
          album: { cover },
        } = response;
        setInfo({ title, id, cover });
        setPlay(true);
        const { sound } = await Audio.Sound.createAsync({
          uri: `${preview}`,
        });
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        getData();
      }
    };
    getData();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [track]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const { positionMillis, durationMillis } = await sound.getStatusAsync();
      // if (positionMillis == durationMillis && durationMillis !== 0) {
      //   await dispatch(closePlayer());
      // }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [sound]);

  const togglePlayer = async () => {
    if (sound) {
      if (isPlay) {
        try {
          await sound.pauseAsync();
          setPlay(false);
        } catch (error) {
          console.log("Error pausing sound:", error);
        }
      } else {
        try {
          await sound.playAsync();
          setPlay(true);
        } catch (error) {
          console.log("Error playing sound:", error);
        }
      }
    }
  };

  return (
    <>
      {trackInfo.title && (
        <ImageBackground style={s.container}>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: trackInfo.cover }}
          />
          <Text style={s.title}>{trackInfo.title}</Text>
          <Button
            onClick={togglePlayer}
            styleBtn={{ marginLeft: "auto", marginRight: 10 }}
          >
            {!isPlay ? (
              <AntDesign name="caretright" size={30} color="#fff" />
            ) : (
              <AntDesign name="pause" size={30} color="#fff" />
            )}
          </Button>
        </ImageBackground>
      )}
    </>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    bottom: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 30,
  },
  title: {
    color: "#fff",
    marginLeft: 20,
    width: 150,
    height: 20,
    overflow: "hidden",
  },
});
