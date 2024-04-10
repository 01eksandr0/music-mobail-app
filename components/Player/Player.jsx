import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from "expo-av";
import { Button } from "../Button/Button";
import { getTrackById } from "../../js/requsts";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayer } from "../../redux/selecter";
import { AntDesign } from "@expo/vector-icons";
import { closePlayer } from "../../redux/slices/playerSlice";
import { BigPlayer } from "../BigPlayer/BigPlayer";

export const Player = () => {
  const { items } = useSelector(selectPlayer);
  const [sound, setSound] = useState(null);
  const [trackInfo, setInfo] = useState({});
  const [isPlay, setPlay] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [lineWidth, setWidth] = useState(0);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      if (!items[index]) return;
      if (!isLoading) {
        setLoading(true);
        try {
          if (sound) {
            await sound.stopAsync();
            await sound.unloadAsync();
          }
          const response = await getTrackById(items[index]);
          const {
            preview,
            title,
            id,
            album: { cover, cover_big },
            artist: { name },
          } = response;
          setInfo({ title, id, cover, cover_big, name });
          const { sound: newSound } = await Audio.Sound.createAsync({
            uri: `${preview}`,
          });
          setSound(newSound);
          await newSound.playAsync();
          setPlay(true);
        } catch (error) {
          console.error("Error loading track:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    getData();

    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, [items, index]);

  useEffect(() => {
    const checkEnd = async () => {
      try {
        const { positionMillis, durationMillis } = await sound.getStatusAsync();
        setWidth((positionMillis / durationMillis) * 100);
        if (positionMillis === durationMillis && durationMillis) {
          setIndex(index + 1);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const intervalId = setInterval(checkEnd, 1000);
    return () => clearInterval(intervalId);
  }, [sound]);

  const togglePlayer = async () => {
    if (!isLoading) {
      setLoading(true);
      try {
        if (isPlay) {
          await sound.pauseAsync();
          setPlay(false);
        } else {
          await sound.playAsync();
          setPlay(true);
        }
      } catch (error) {
        console.error("Error toggling player:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const nextTrack = () => {
    if (!items[index + 1]) {
      dispatch(closePlayer());
      return;
    }
    setIndex(index + 1);
  };
  const prevTrack = () => {
    if (index === 0) {
      dispatch(closePlayer());
      return;
    }
    setIndex(index - 1);
  };

  return (
    <>
      {trackInfo.title && (
        <>
          {!active ? (
            <ImageBackground style={styles.back}>
              <TouchableOpacity
                onPress={() => setActive(true)}
                style={styles.container}
              >
                <Image
                  style={{ width: 70, height: 70 }}
                  source={{ uri: trackInfo.cover }}
                />
                <Text style={styles.title}>{trackInfo.title}</Text>
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
              </TouchableOpacity>
              <View style={{ ...styles.line, width: `${lineWidth}%` }}></View>
            </ImageBackground>
          ) : (
            <BigPlayer
              info={trackInfo}
              close={() => setActive(false)}
              line={lineWidth}
              togglePlayer={togglePlayer}
              isPlay={isPlay}
              nextTrack={nextTrack}
              prevTrack={prevTrack}
            />
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  back: { position: "absolute", bottom: 80 },
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "rgba(0,0,0,0.8)",

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
  line: {
    height: 3,
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});
