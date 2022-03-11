import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Image, SafeAreaView, FlatList } from "react-native";
import CardComponent from "../../components/CardComponent";
import BottomSheetComponent from "../../components/ButtomSheet";
import { Button } from "react-native-elements";

const NewsList = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch().news;
  const [isVisible, setIsVisible] = useState(false);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch.load();
  }, []);

  console.log(news);

  const renderItem = ({ item }) => (
    <CardComponent title={item.title} author={item.author} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Open Bottom Sheet"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      />
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <BottomSheetComponent isVisible={isVisible} />
    </SafeAreaView>
  );
};

export default NewsList;

const styles = StyleSheet.create({});
