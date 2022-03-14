import React from "react";
import { StyleSheet, View } from "react-native";
import { color } from "../config/theme";

const ListItemSeperator = () => {
  return <View style={styles.seperator} />;
};

export default ListItemSeperator;

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: color.light_grey,
  },
});
