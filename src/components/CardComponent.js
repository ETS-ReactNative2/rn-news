import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

const CardComponent = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch().news;

  useEffect(() => {
    dispatch.load();
  }, []);

  console.log(news);
  return (


    <View>
      news.map((new)=>{
  return <Card>
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
          }}
        />
        <Card.Title>HELLO WORLD</Card.Title>
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
})
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({});
