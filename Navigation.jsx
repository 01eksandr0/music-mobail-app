import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegistrScreen } from "./screens/RegistrScreen/RegistrScreen";
import { MusicAppScreen } from "./screens/MusicAppScreen/MusicAppScreen";
import { Player } from "./components/Player/Player";
import { selectPlayer } from "./redux/selecter";
import { useSelector } from "react-redux";

export const MyNavigation = () => {
  const Stack = createStackNavigator();
  const { status } = useSelector(selectPlayer);
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
        </Stack.Navigator>
        {status && <Player />}
      </NavigationContainer>
    </>
  );
};
