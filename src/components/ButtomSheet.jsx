import React from "react";
import { BottomSheet, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const BottomSheetComponent = (isVisible) => {
  console.log(isVisible);

  return (
    <SafeAreaProvider>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <Input
          placeholder="Comment"
          leftIcon={{ type: "font-awesome", name: "comment" }}
        />
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetComponent;
