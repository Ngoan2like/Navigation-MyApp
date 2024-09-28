import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const QuanLyNhietDo = () => {
  const [temperature, setTemperature] = useState(25);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (temperature > 30) {
      setAlertMessage("Nhiệt độ cao!");
    } else {
      setAlertMessage("");
    }
  }, [temperature]);

  const reduceTemperature = () => {
    setTemperature((prevTemp) => prevTemp - 1);
  };

  const increaseTemperature = () => {
    setTemperature((prevTemp) => prevTemp + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhiệt độ hiện tại: {temperature}°C</Text>
      {alertMessage !== "" && <Text style={styles.alert}>{alertMessage}</Text>}
      <View style={styles.buttonContainer}>
        <Button title="Giảm nhiệt" onPress={reduceTemperature} />
        <Button title="Tăng nhiệt" onPress={increaseTemperature} />
      </View>
    </View>
  );
};

export default QuanLyNhietDo;

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
  alert: {
    fontSize: 18,
    color: "red",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});
