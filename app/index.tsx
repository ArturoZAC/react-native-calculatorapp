import React from "react";
import { View } from "react-native";

import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    // calculateSubResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText>{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"></ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}

        {/* <ThemeText variant="h2">21 x 21</ThemeText> */}
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton blackText label="C" onPress={clean} color={Colors.lightGray} />
        <CalculatorButton blackText label="+/-" onPress={toggleSign} color={Colors.lightGray} />
        <CalculatorButton blackText label="del" onPress={deleteLast} color={Colors.lightGray} />
        <CalculatorButton label="÷" onPress={divideOperation} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber("7")} />
        <CalculatorButton label="8" onPress={() => buildNumber("8")} />
        <CalculatorButton label="9" onPress={() => buildNumber("9")} />
        <CalculatorButton label="x" onPress={multiplyOperation} color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber("4")} />
        <CalculatorButton label="5" onPress={() => buildNumber("5")} />
        <CalculatorButton label="6" onPress={() => buildNumber("6")} />
        <CalculatorButton label="-" onPress={subtractOperation} color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber("1")} />
        <CalculatorButton label="2" onPress={() => buildNumber("2")} />
        <CalculatorButton label="3" onPress={() => buildNumber("3")} />
        <CalculatorButton label="+" onPress={addOperation} color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="0" doubleSize onPress={() => buildNumber("0")} />
        <CalculatorButton label="." onPress={() => buildNumber(".")} />
        <CalculatorButton label="=" onPress={calculateResult} color={Colors.orange} />
      </View>
    </View>
  );
};

export default CalculatorApp;
