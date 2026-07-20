import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

export default function CalculatorButton({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => {
        return {
          ...globalStyles.button,
          backgroundColor: color,
          opacity: pressed ? 0.9 : 1,
          width: doubleSize ? 180 : 80,
        };
      }}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
