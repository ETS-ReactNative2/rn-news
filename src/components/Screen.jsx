import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white" }}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
