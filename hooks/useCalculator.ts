import { useRef, useState } from "react";

enum Operator {
  Add = "+",
  Subtract = "-",
  Multiply = "X",
  Divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>(null);

  const buildNumber = (numberString: string) => {
    console.log({ numberString });
  };

  return {
    formula,
    number,
    prevNumber,

    buildNumber,
  };
};
