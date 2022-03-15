import React, { useState } from "react";
import { StyleSheet, Alert, View, ScrollView } from "react-native";
import { Button, Input, Card, FAB } from "react-native-elements";
import { useToast } from "react-native-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-native-uuid";

import SingleNews from "../../components/SingleNews";
import Screen from "../../components/Screen";
import AppModal from "../../components/AppModal";
import CommentBox from "../../components/CommentBox";

const NewsDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch().news;
  const toast = useToast();
  const filteredNews = news.find((a) => a.id === item.id);

  console.log(filteredNews);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [commentId, setCommentId] = useState();

  const onEditNews = () => {
    setModalType("news");
    if (body && author) {
      dispatch.editNews({
        ...item,
        body: body,
        author: author,
      });
      toast.show("Edit finished successfully", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 50,
        animationType: "slide-in",
      });
      setIsVisible(false);
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
    toast.show("Comment Deleted", {
      type: "success",
      placement: "top",
      duration: 4000,
      offset: 40,
      animationType: "slide-in",
    });
  };

  const onEdit = (type, commentId) => {
    setModalType(type);
    if (type === "comment") {
      setCommentId(commentId);
      setModalVisible(true);
    }
  };

  const onEditComment = () => {
    setModalType("");
    if (commentBody && commentAuthor) {
      dispatch.editComment({
        newsId: item.id,
        id: commentId,
        name: commentAuthor,
        avatar: "http://lorempixel.com/640/480/fashion",
        comment: commentBody,
      });
      setCommentBody("");
      setCommentAuthor("");
      setIsVisible(false);
      setModalVisible(false);
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
              onPress={() => {
                setModalType("news");
                setModalVisible(!modalVisible);
              }}
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
        {modalType === "comment" ? (
          <AppModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            onEditFinished={onEditComment}
            title="Update Comment"
          >
            <Input
              placeholder="Author"
              leftIcon={{ type: "font-awesome", name: "user" }}
              onChangeText={(value) => setCommentAuthor(value)}
            />
            <Input
              placeholder="content"
              leftIcon={{ type: "font-awesome", name: "comment" }}
              onChangeText={(value) => setCommentBody(value)}
            />
          </AppModal>
        ) : (
          <AppModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            onEditFinished={onEditNews}
            title="Update News"
          >
            <Input
              placeholder="Author"
              leftIcon={{ type: "font-awesome", name: "user" }}
              onChangeText={(value) => setAuthor(value)}
              defaultValue={filteredNews.author}
            />
            <Input
              placeholder="content"
              defaultValue={filteredNews.body}
              leftIcon={{ type: "font-awesome", name: "comment" }}
              onChangeText={(value) => setBody(value)}
            />
          </AppModal>
        )}
        <CommentBox
          onDeleteComment={onDeleteComment}
          filteredNews={filteredNews}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onEditFinished={onEditComment}
          onPressEdit={onEdit}
          title="Update News"
        />
        <Card>
          <Card.Title>Create Comment</Card.Title>
          <Input
            placeholder="Name"
            value={commentAuthor}
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(value) => setCommentAuthor(value)}
          />
          <Input
            placeholder="comment"
            value={commentBody}
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
