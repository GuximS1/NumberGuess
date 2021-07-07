import React from "react";
import { View, Text, StyleSheet } from "react-native";
const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#fd6fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "#fd6fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default NumberContainer;
