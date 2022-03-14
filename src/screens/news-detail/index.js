import React, { useEffect, useState } from "react";
import { ScrollView, Modal, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-native-uuid";
import { StyleSheet, Image, FlatList, Text, Alert, View } from "react-native";
import { Button, BottomSheet, Input, Card, FAB } from "react-native-elements";
import SingleNews from "../../components/SingleNews";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import Screen from "../../components/Screen";
import AppModal from "../../components/AppModal";
import CommentBox from "../../components/CommentBox";

const NewsDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch().news;
  const filteredNews = news.find((a) => a.id === item.id);

  console.log(filteredNews);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onEditNews = async () => {
    if (body && author) {
      dispatch.editNews({
        ...item,
        body: body,
        author: author,
      });

      setTitle("");
      setBody("");
      setAuthor("");
    } else {
      Alert.alert("Please enter valid data");
    }
  };

  const onAddComment = () => {
    if (commentBody && commentAuthor) {
      dispatch.addComment({
        newsId: item.id,
        id: uuid.v4(),
        name: commentAuthor,
        avatar: "http://lorempixel.com/640/480/fashion",
        comment: commentBody,
      });
      setCommentBody("");
      setCommentAuthor("");
      setIsVisible(false);
    } else {
      Alert.alert("Please enter valid data");
    }
  };

  const onDeleteNews = () => {
    dispatch.deleteNews({ ...item });
    navigation.goBack();
  };

  const onDeleteComment = (comment) => {
    dispatch.deleteComment({ ...comment });
  };

  const onEditComment = () => {
    if (commentBody && commentAuthor) {
      dispatch.editComment({
        newsId: item.id,
        id: uuid.v4(),
        name: commentAuthor,
        avatar: "http://lorempixel.com/640/480/fashion",
        comment: commentBody,
      });
      setCommentBody("");
      setCommentAuthor("");
      setIsVisible(false);
    } else {
      Alert.alert("Please enter valid data");
    }
  };

  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <SingleNews item={filteredNews}>
          <View style={{ flexDirection: "row" }}>
            <FAB
              visible={!modalVisible}
              onPress={() => setModalVisible(!modalVisible)}
              placement="left"
              size="small"
              icon={{ name: "edit", color: "white" }}
              color="blue"
              style={styles.button}
            />
            <FAB
              visible={!isVisible}
              onPress={onDeleteNews}
              placement="right"
              size="small"
              icon={{ name: "delete", color: "white" }}
              color="red"
            />
          </View>
        </SingleNews>
        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <CommentBox
          onDeleteComment={onDeleteComment}
          filteredNews={filteredNews}
        />
        <Card>
          <Card.Title>Create Comment</Card.Title>
          <Input
            placeholder="Name"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(value) => setCommentAuthor(value)}
          />
          <Input
            placeholder="comment"
            leftIcon={{ type: "font-awesome", name: "comment" }}
            onChangeText={(value) => setCommentBody(value)}
          />
          <Button
            title="Add Comment"
            onPress={() => onAddComment()}
            buttonStyle={styles.button}
          />
        </Card>
      </ScrollView>
    </Screen>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    flex: 1,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
