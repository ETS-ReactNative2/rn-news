import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import { Text } from "react-native-elements";
import { defaultImage } from "../config/constants";
import { color, fontSize } from "../config/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, children }) => {
  return (
    <View style={styles.container}>
      {item.images ? (
        <Image
          source={{ uri: item.images[0].uri }}
          style={{ height: "30%", resizeMode: "cover", width: windowWidth }}
        />
      ) : (
        <Image
          source={{ uri: defaultImage }}
          style={{ height: "30%", resizeMode: "cover", width: windowWidth }}
        />
      )}

      <View
        style={{
          ...styles.description,
          backgroundColor: "white",
        }}
      >
        <Text h2 h2Style={styles.title}>
          {item.title}
        </Text>
        <Text h3 h3Style={styles.content}>
          {item.body}
        </Text>

        <Text h4 h4Style={styles.author}>
          by {item.author ?? "unknown"}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
  },
  description: {
    padding: 15,
    flex: 1,
  },
  author: {
    paddingBottom: 10,
    fontSize: fontSize.regular,
    paddingLeft: 20,
    color: color.light_black,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingTop: 20,
    color: "black",
  },
  content: {
    fontSize: fontSize.regular,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: color.light_black,
    textAlign: "justify",
  },
});
