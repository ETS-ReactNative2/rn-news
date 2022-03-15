import React, { useState, useEffect } from "react";
import styles from "../config/style";
import { Text } from "react-native-elements";
import { TouchableOpacity, View, Image } from "react-native";
import { ImageComponent } from "./ImageComponent";
import { defaultImage } from "../config/constants";

const CardComponent = ({ item, navigation, id }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    if (!item.images?.length) {
      setImage(defaultImage);
    } else {
      setImage(item.images[0].uri);
    }
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={[styles.wrapper]}>
        <Image
          style={[styles.img]}
          source={
            item.images ? { uri: item.images[0].uri } : { uri: defaultImage }
          }
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
