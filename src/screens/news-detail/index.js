import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Image, SafeAreaView, FlatList } from "react-native";

const NewsDetail = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch().news;

  useEffect(() => {
    dispatch.load();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({});
