import React from "react";
import styles from "../config/style";
import { Text } from "react-native-elements";
import { TouchableOpacity, View, Image } from "react-native";

const CardComponent = ({ item, navigation, id }) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.wrapper]}>
        <Image
          style={[styles.img]}
          source={{
            uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
          }}
        />

        <View style={[styles.info]}>
          <Text h4 style={[styles.title]}>
            {item.title}
          </Text>
          <View style={[styles.bottom]}>
            <Text style={[styles.author]}>by {item.author}</Text>
            <TouchableOpacity
              onPress={() => navigation?.navigate("NewsDetails", { item })}
              style={[styles.read]}
            >
              <Text>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;
