import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { windowWidth } from "../config/theme";

const Carousel = (item) => {
  return (
    <View>
      <FlatList
        data={item.images}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={200}
        decelerationRate="fast"
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Image source={{ uri: item.uri }} style={styles.images} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  images: {
    width: windowWidth,
    height: "40%",
    resizeMode: "cover",
  },
});
