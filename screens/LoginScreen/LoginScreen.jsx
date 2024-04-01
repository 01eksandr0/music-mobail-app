import { Background } from "../../components/Background/Background";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Background/Button/Button";

export const LoginScreen = () => {
  return (
    <Background>
      <View style={s.form}>
        <Text style={s.title}>Login</Text>
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
        <Button styleBtn={s.btn} styleText={s.btnText}>
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
    marginTop: 20,
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
});
