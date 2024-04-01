import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../HomeScreen/HomeScreen";
import { SearchScreen } from "../SearchScreen/SearchScreen";
import { MyFavoriteScreen } from "../MyFavoriteScreen/MyFavoriteScreen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const MusicAppScreen = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={30} color="black" />
          ),
        }}
      />
      <Tabs.Screen name="Favorite" component={MyFavoriteScreen} />
    </Tabs.Navigator>
  );
};
