import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchHome } from "../SearchHome/SearchHome";
import { SearchSong } from "../../components/SearchSong/SearchSong";
import { SearchArtist } from "../../components/SearchArtist/SearchArtist";

export const SearchScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchHome"
        component={SearchHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchSong"
        component={SearchSong}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchArtist"
        component={SearchArtist}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
