import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../Button/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selecter";
import {
  addNewTrack,
  deleteTrack,
} from "../../redux/slices/favoriteTracksSlice";
import { openInfo } from "../../redux/slices/modalMoreInfoSlice";

export const BigPlayer = ({
  info,
  close,
  line,
  togglePlayer,
  isPlay,
  nextTrack,
  prevTrack,
}) => {
  const tracks = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (tracks.includes(info.id)) {
      dispatch(deleteTrack(info.id));
    } else {
      dispatch(addNewTrack(info.id));
    }
  };
  return (
    <View style={s.container}>
      <View style={s.topBtnList}>
        <Button onClick={close}>
          <AntDesign name="down" size={30} color="#fff" />
        </Button>
        <Button onClick={() => dispatch(openInfo(info.id))}>
          <MaterialIcons name="more-vert" size={30} color="#fff" />
        </Button>
      </View>
      <Image
        source={{ uri: info.cover_big }}
        style={{ height: 300, width: 300, borderRadius: 8 }}
      />
      <View style={s.containerText}>
        <View>
          <Text style={s.title}>{info.title}</Text>
          <Text style={s.name}>{info.name}</Text>
        </View>
        <Button onClick={toggleFavorite}>
          <AntDesign
            name="heart"
            size={30}
            color={tracks.includes(info.id) ? "red" : "#fff"}
          />
        </Button>
      </View>
      <View style={s.containerControl}>
        <View style={s.range}>
          <View style={{ ...s.rangeThumb, width: `${line}%` }}></View>
        </View>
        <View style={s.control}>
          <Button onClick={prevTrack}>
            <MaterialCommunityIcons
              name="skip-previous"
              size={40}
              color="#fff"
            />
          </Button>
          <Button onClick={togglePlayer}>
            {!isPlay ? (
              <AntDesign name="play" size={50} color="#fff" />
            ) : (
              <AntDesign name="pausecircle" size={50} color="#fff" />
            )}
          </Button>
          <Button onClick={nextTrack}>
            <MaterialCommunityIcons name="skip-next" size={40} color="#fff" />
          </Button>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 25,
    paddingTop: 60,
    display: "flex",
    alignItems: "center",
  },
  topBtnList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  containerText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    gap: 5,
  },
  title: { color: "#fff", fontSize: 22 },
  name: { color: "rgba(255,255,255,0.5)", fontSize: 20 },
  containerControl: { width: "100%", marginTop: 20 },
  range: {
    height: 8,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 5,
  },
  rangeThumb: {
    height: 8,
    backgroundColor: "rgb(250, 205, 102)",
    borderRadius: 5,
  },
  control: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
});
