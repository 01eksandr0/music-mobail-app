import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../HomeScreen/HomeScreen";
import { SearchScreen } from "../SearchScreen/SearchScreen";
import { MyFavoriteScreen } from "../MyFavoriteScreen/MyFavoriteScreen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MyHeader } from "../../components/MyHeader/MyHeader";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selecter";
import { useNavigation } from "@react-navigation/native";

export const MusicAppScreen = () => {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();
  const { token } = useSelector(selectUser);
  useEffect(() => {
    if (!token) {
      navigation.navigate("Login");
    }
  }, [token]);
  return (
    <Tabs.Navigator
      screenOptions={{
        header: () => <MyHeader />,
        tabBarStyle: { backgroundColor: "rgb(40,40,40)", paddingTop: 10 },
        tabBarInactiveTintColor: "rgba(255,255,255,0.5)",
        tabBarActiveTintColor: "rgb(250, 205, 102)",
      }}
    >
      <Tabs.Group>
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
            headerShown: false,
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
            headerShown: false,
          }}
        />
      </Tabs.Group>
    </Tabs.Navigator>
  );
};
