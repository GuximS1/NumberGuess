import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.myTitle}>Start a New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput style={styles.myTextInput} />
        <View style={styles.buttonContainer}>
          <Button title="  Reset  " onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  myTextInput: {
    borderWidth: 1,
    width: 300,
    maxWidth: "80%",
    height: 40,
    marginVertical: 10,
    textAlign: "center",
  },
  myTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
export default StartGameScreen;
