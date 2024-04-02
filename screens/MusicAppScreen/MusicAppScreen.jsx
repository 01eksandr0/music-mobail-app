import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../HomeScreen/HomeScreen";
import { SearchScreen } from "../SearchScreen/SearchScreen";
import { MyFavoriteScreen } from "../MyFavoriteScreen/MyFavoriteScreen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MyHeader } from "../../components/MyHeader/MyHeader";

export const MusicAppScreen = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={{
        header: () => <MyHeader />,
        tabBarStyle: { backgroundColor: "rgb(40,40,40)", paddingTop: 10 },
      }}
      tabBarOptions={{
        style: { backgroundColor: "lightblue" }, // задайте цвет фона здесь
        activeTintColor: "rgb(250, 205, 102)",
        inactiveTintColor: "rgba(255,255,255,0.5)",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={MyFavoriteScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-music" size={28} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
