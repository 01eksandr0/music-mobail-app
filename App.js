import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegistrScreen } from "./screens/RegistrScreen/RegistrScreen";
import { MusicAppScreen } from "./screens/MusicAppScreen/MusicAppScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
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
    </NavigationContainer>
  );
}
