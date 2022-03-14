{
  /* <Card style={{ height: 300 }}>
      <Card.Title>Update News</Card.Title>
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
      <Button
        title="Update News"
        onPress={onEditNews}
        buttonStyle={styles.button}
      />
  </Card> */
}
{
  /* {filteredNews.comments.map((item) => {
      <ListItem
        title={item.name}
        subTitle={item.comment}
        image={item.avatar}
        renderRightActions={() => (
          <ListItemDeleteAction onPress={() => onDeleteComment(item)} />
        )}
      />;
    })} */
}
<Card>
  <Text>Create Comment</Text>
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
</Card>;
