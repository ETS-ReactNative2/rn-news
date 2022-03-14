import React, { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import CardComponent from "../../components/CardComponent";
import { Button, BottomSheet, Input, FAB, Card } from "react-native-elements";
import { sampleNews } from "../../config/constants";

const NewsList = ({ navigation }) => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch().news;
  const toast = useToast();
  const [isFetching, setIsFetching] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = async () => {
    if (title && body && author) {
      await dispatch.createNews({
        ...sampleNews,
        id: uuid.v4(),
        title: title,
        body: body,
        author: author,
      });

      setTitle("");
      setBody("");
      setAuthor("");
      setIsVisible(false);
      toast.show("News Added successfully", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: StatusBar.currentHeight,
        animationType: "slide-in",
      });
    } else {
      Alert.alert("Please enter valid data");
    }
  };

  useEffect(() => {
    dispatch.load();
    setIsFetching(false);
  }, []);

  console.log(news);

  const renderItem = ({ item }) => (
    <CardComponent item={item} navigation={navigation} id={item.id} />
  );

  return (
    <SafeAreaView>
      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <>
          <FlatList
            data={news}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <FAB
            visible={!isVisible}
            onPress={() => setIsVisible(!isVisible)}
            placement="left"
            title="Create"
            icon={{ name: "edit", color: "white" }}
            color="blue"
            style={styles.button}
          />
        </>
      )}

      <BottomSheet
        modalProps={{}}
        isVisible={isVisible}
        containerStyle={styles.buttomSheet}
      >
        <Card style={{ height: 300 }}>
          <Input
            placeholder="Author"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(value) => setAuthor(value)}
          />
          <Input
            placeholder="Title"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(value) => setTitle(value)}
          />
          <Input
            placeholder="content"
            leftIcon={{ type: "font-awesome", name: "comment" }}
            onChangeText={(value) => setBody(value)}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              title="Cancle"
              onPress={() => setIsVisible(false)}
              style={styles.buttonAction}
            />
            <Button
              title="Create News"
              onPress={onSubmit}
              style={styles.buttonAction}
            />
          </View>
        </Card>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    // flex: 1,
  },
  buttonContainer: {
    flexDirection: "column",
    flex: 1,
    height: 100,
  },
  buttonAction: {
    flexBasis: 1,
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
