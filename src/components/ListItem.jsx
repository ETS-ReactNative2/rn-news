import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Pressable,
} from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { color } from "../config/theme";

function ListItem({ title, subTitle, image, onPress, renderRightAction }) {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight underlayColor={color.underlayColor}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={{ uri: image }} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <Pressable onPress={onPress}>
            <MaterialCommunityIcons
              name="trash-can"
              size={35}
              color={color.black}
            />
          </Pressable>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: color.white,
    justifyContent: "space-between",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: color.grey,
  },
  title: {
    fontWeight: "500",
    color: "black",
    paddingBottom: 5,
  },
});

export default ListItem;
