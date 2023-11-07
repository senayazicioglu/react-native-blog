import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function IndexScreen() {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      {/* <Text>IndexScreen {value}</Text> */}
      <Button title="Ekle" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(BlogPosts) => BlogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
