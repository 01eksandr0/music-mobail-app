import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FavoriteHome } from "../FavoriteHome/FavoriteHome";
import { FavoriteTracks } from "../../components/FavoriteTracks/FavoriteTracks";
import { Playlist } from "../../components/Playlist/Playlist";

export const MyFavoriteScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="FavoriteHome">
      <Stack.Screen
        name="FavoriteHome"
        component={FavoriteHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoriteTracks"
        component={FavoriteTracks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Playlist"
        component={Playlist}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
