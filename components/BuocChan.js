import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [bgColor, setBgColor] = useState('white'); 

  useEffect(() => {
    if (steps >= 5) {
      setBgColor('green');
    } else {
      setBgColor('white'); 
    }
  }, [steps]);



  const handleStep = () => {
    setSteps(steps + 1);
  };

  const resetSteps = () => {
    setSteps(0);
    setBgColor('white'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ứng dụng đếm bước chân</Text>
      <Text style={[styles.stepText, { backgroundColor: bgColor }]}>
        Số bước: {steps}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Tăng bước" onPress={handleStep} />
        <Button title="Reset" onPress={resetSteps} />
      </View>
    </View>
  );
};

export default StepCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  stepText: {
    fontSize: 22,
    marginBottom: 30,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
