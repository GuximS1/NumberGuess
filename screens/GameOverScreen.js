import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOver}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/gameover.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.roundOver}>
        Number of rounds:
        <Text style={styles.nmbr}> {" " + props.roundsNumber}</Text>
      </Text>
      <Text style={styles.selectedNumber}>
        The selected number was:
        <Text style={styles.slct}> {" " + props.userNumber}</Text>
      </Text>
      <Button title="RESTART" onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0CC6F",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gameOver: {
    backgroundColor: "gray",
    width: 200,
    textAlign: "center",
    height: 30,
    textAlign: "center",
    borderWidth: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    borderRadius: 5,
  },
  roundOver: {
    backgroundColor: "gray",
    width: 210,
    textAlign: "center",
    height: 30,
    textAlign: "center",
    borderWidth: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedNumber: {
    backgroundColor: "gray",
    width: 300,
    textAlign: "center",
    height: 30,
    textAlign: "center",
    borderWidth: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  nmbr: {
    color: "red",
  },
  slct: {
    color: "green",
  },
});

export default GameOverScreen;
