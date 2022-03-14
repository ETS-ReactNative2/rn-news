import { StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-elements";
import React from "react";
import ListItem from "./ListItem";
import ListItemDeleteAction from "./ListItemDeleteAction";

const CommentBox = ({ filteredNews, onDeleteComment }) => {
  return (
    <Card>
      <Card.Title>Comments</Card.Title>
      <FlatList
        data={filteredNews.comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={item.comment}
            renderRightAction={() => (
              <ListItemDeleteAction onPress={() => onDeleteComment(item)} />
            )}
            onPress={() => onDeleteComment(item)}
          />
        )}
      />
    </Card>
  );
};

export default CommentBox;

const styles = StyleSheet.create({});
