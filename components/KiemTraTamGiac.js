import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const KiemTraTamGiac = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [result, setResult] = useState('');

  const isValidTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
  };

  const calculatePerimeter = (a, b, c) => a + b + c;

  const calculateArea = (a, b, c) => {
    const s = calculatePerimeter(a, b, c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  };

  const handleCheckTriangle = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setResult('Vui lòng nhập các cạnh hợp lệ.');
      return;
    }

    if (isValidTriangle(a, b, c)) {
      const perimeter = calculatePerimeter(a, b, c);
      const area = calculateArea(a, b, c);
      setResult(`Chu vi: ${perimeter}, Diện tích: ${area.toFixed(2)}`);
    } else {
      setResult('Ba cạnh này không thể tạo thành tam giác.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Kiểm tra tam giác và tính chu vi, diện tích</Text>
      <TextInput
        style={styles.input}
        placeholder="Cạnh A"
        value={sideA}
        onChangeText={setSideA}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Cạnh B"
        value={sideB}
        onChangeText={setSideB}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Cạnh C"
        value={sideC}
        onChangeText={setSideC}
        keyboardType="numeric"
      />
      <Button title="Kiểm tra" onPress={handleCheckTriangle} />

      {result !== '' && <Text>{result}</Text>}
    </View>
  );
};

export default KiemTraTamGiac;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});
