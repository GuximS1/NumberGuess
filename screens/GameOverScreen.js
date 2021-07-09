import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/gameover.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text>Number of rounds: {" " + props.roundsNumber}</Text>
      <Text>The selected number was: {" " + props.userNumber}</Text>
      <Button title="RESTART" onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
