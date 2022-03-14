import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { padding, color, fontSize } from "./theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },

  wrapper: {
    padding: padding,
    flexDirection: "row",
    backgroundColor: "white",
  },

  img: {
    height: 78,
    width: 75,
    backgroundColor: color.light_grey,
    marginRight: padding * 1.5,
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: fontSize.regular,
    color: color.black,
  },

  bottom: {
    flexDirection: "row",
    flex: 1,
    marginTop: padding * 2,
    justifyContent: "space-between",
  },

  author: {
    fontSize: fontSize.small,
    color: color.main,
  },
  read: {
    fontSize: fontSize.small,
    color: color.grey,
    marginLeft: padding,
  },
  text: {
    color: color.dark,
    fontSize: 18,
  },
});

export default styles;
