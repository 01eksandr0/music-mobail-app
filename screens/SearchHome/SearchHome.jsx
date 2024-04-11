import React from "react";
import { Background } from "../../components/Background/Background";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

export const SearchHome = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <View style={s.container}>
        <Text
          style={{
            color: "#fff",
            fontSize: 26,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          What are you looking for?
        </Text>
        <Button
          onClick={() => navigation.navigate("SearchSong")}
          styleBtn={s.btn}
          styleText={s.text}
        >
          Search song
        </Button>

        <Button
          onClick={() => navigation.navigate("SearchArtist")}
          styleBtn={s.btn}
          styleText={s.text}
        >
          Search artist
        </Button>
      </View>
    </Background>
  );
};

const s = StyleSheet.create({
  container: { paddingTop: 40 },
  btn: {
    height: 60,
    backgroundColor: "rgb(50,50,50)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  text: { color: "#fff", fontSize: 22 },
});
