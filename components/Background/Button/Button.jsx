import { Text, TouchableOpacity } from "react-native";

export const Button = ({ children, styleBtn, styleText }) => {
  return (
    <TouchableOpacity style={styleBtn}>
      <Text style={styleText}>{children}</Text>
    </TouchableOpacity>
  );
};
