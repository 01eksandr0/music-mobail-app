import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegistrScreen } from "./screens/RegistrScreen/RegistrScreen";
import { MusicAppScreen } from "./screens/MusicAppScreen/MusicAppScreen";
import { Player } from "./components/Player/Player";
import {
  selectModalAddPlaylist,
  selectModalCreate,
  selectMoreInfo,
  selectPlayer,
} from "./redux/selecter";
import { useSelector } from "react-redux";
import { ModalCreatePlaylist } from "./components/ModalCreatePlaylist/ModalCreatePlaylist";
import { ModalMoreInfo } from "./components/ModalMoreInfo/ModalMoreInfo";
import { ModalAddInPlaylist } from "./components/ModalAddInPlaylist/ModalAddInPlaylist";
import { ArtistInfo } from "./screens/ArtistInfo/ArtistInfo";

export const MyNavigation = () => {
  const Stack = createStackNavigator();
  const { status } = useSelector(selectPlayer);
  const modalCreate = useSelector(selectModalCreate);
  const moreInfo = useSelector(selectMoreInfo);
  const modalAddInPlaylist = useSelector(selectModalAddPlaylist);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MusicApp"
            component={MusicAppScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ArtistInfo"
            component={ArtistInfo}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {status && <Player />}
        {modalCreate && <ModalCreatePlaylist />}
        {moreInfo.status && <ModalMoreInfo />}
        {modalAddInPlaylist.status && <ModalAddInPlaylist />}
      </NavigationContainer>
    </>
  );
};
