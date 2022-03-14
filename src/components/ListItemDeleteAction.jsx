import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { color } from "../config/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={color.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.red,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
