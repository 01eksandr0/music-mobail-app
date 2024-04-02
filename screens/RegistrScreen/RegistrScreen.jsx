import { Background } from "../../components/Background/Background";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

export const RegistrScreen = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <View style={s.form}>
        <Text style={s.title}>Registration</Text>
        <TextInput
          style={s.input}
          placeholder="Your name"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={s.input}
          placeholder="Your email"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={s.input}
          placeholder="Your password"
          placeholderTextColor="#fff"
        />

        <Button
          styleBtn={s.btn}
          styleText={s.btnText}
          onClick={() => navigation.navigate("MusicApp")}
        >
          Registr
        </Button>
        <Button
          styleText={s.navigation}
          onClick={() => navigation.navigate("Login")}
        >
          Login
        </Button>
      </View>
    </Background>
  );
};

const s = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    alignItems: "center",
    paddingTop: 60,
  },
  title: {
    color: "#fff",
    fontSize: 30,
  },
  input: {
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 1,
    width: "100%",
    height: 40,
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    height: 40,
    width: "100%",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "#fff", fontSize: 22 },
  navigation: {
    color: "#fff",
  },
});
