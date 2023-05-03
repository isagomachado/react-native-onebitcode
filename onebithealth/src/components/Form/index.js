import React, { useCallback, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "./ResultIMC";
// import ResultIMC from "./ResultIMC"

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e a altura")
  }
  
  return(
    <View>
      <View>
        <Text>Peso</Text>
        <TextInput
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex. 75.365"
        keyboardType="numeric"
        />

        <Text>Altura</Text>
        <TextInput
        onChangeText={setHeight}
        value={height}
        placeholder="Ex. 1.75"
        keyboardType="numeric"
        />
        <Button
        onPress={useCallback(() => validationImc())}
        title={textButton}
        />
      </View>
      <ResultIMC messageResultImc={messageImc} resultImc={imc} />
    </View>
  )
}