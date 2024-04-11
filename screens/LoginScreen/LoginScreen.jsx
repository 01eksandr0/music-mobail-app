import { Background } from "../../components/Background/Background";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import { selectUser } from "../../redux/selecter";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/slices/userSlice";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [emailForm, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useSelector(selectUser);

  useEffect(() => {
    if (token) {
      navigation.navigate("MusicApp");
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      navigation.navigate("MusicApp");
    }
  }, []);

  const registration = async () => {
    try {
      const {
        user: { accessToken, email },
      } = await signInWithEmailAndPassword(auth, emailForm, password);
      dispatch(createUser(accessToken, email));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Background>
      <View style={s.form}>
        <Text style={s.title}>Login</Text>
        <TextInput
          onChangeText={(e) => setEmail(e)}
          style={s.input}
          placeholder="Your email"
          placeholderTextColor="#fff"
        />
        <TextInput
          onChangeText={(e) => setPassword(e)}
          style={s.input}
          placeholder="Your password"
          placeholderTextColor="#fff"
        />
        <Button styleBtn={s.btn} styleText={s.btnText} onClick={registration}>
          Login
        </Button>
        <Button
          styleText={s.navigation}
          onClick={() => navigation.navigate("Registration")}
        >
          Registration
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
