import React from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { Card, Button } from "react-native-elements";
import { windowWidth } from "../config/theme";

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  onEditFinished,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        {
          <Card>
            <View>
              <Card.Title>{title}</Card.Title>
              {children}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  title="Update"
                  onPress={onEditFinished}
                  buttonStyle={[styles.button]}
                />
                <Button
                  title="Close"
                  onPress={() => setModalVisible(!modalVisible)}
                  buttonStyle={[styles.button, styles.buttonClose]}
                />
              </View>
            </View>
          </Card>
        }
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: windowWidth,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#c40a0a",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AppModal;
