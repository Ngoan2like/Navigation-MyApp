import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SoBinhPhuong = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      setResult(parsedValue * parsedValue);
    } else {
      setResult(0);
    }
  }, [inputValue]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính bình phương số</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập một số"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Text style={styles.result}>
        Kết quả: {result}
      </Text>
    </View>
  );
};

export default SoBinhPhuong;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});