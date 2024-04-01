import { Text, TouchableOpacity } from "react-native";

export const Button = ({ children, styleBtn, styleText, onClick }) => {
  return (
    <TouchableOpacity style={styleBtn} onPress={onClick}>
      <Text style={styleText}>{children}</Text>
    </TouchableOpacity>
  );
};
