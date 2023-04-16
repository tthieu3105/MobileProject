import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import EvilIcon from "../node_modules/@expo/vector-icons/EvilIcons";
import AntDesign from "../node_modules/@expo/vector-icons/AntDesign";

const AddNoteScreen = () => {
  const [currentDate, setCurrentDate] = useState("");

  // Hiển thị ngày tháng năm hiện tại lên textView:
  useEffect(() => {
    // Lấy ngày tháng năm hiện tại và định dạng thành chuỗi
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Cập nhật state currentDate
    setCurrentDate(formattedDate);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <ScrollView>
        <View style={{ backgroundColor: "white", flex: 1 }}>
          {/* Layout back button, small avatar, title of note, create date*/}
          <View style={{ flex: 40, backgroundColor: "white" }}>
            <View style={styles.row}>
              {/* Button: back to previous screen */}
              <TouchableOpacity>
                <AntDesign name="left" size={30} style={styles.arrowIcon} />
              </TouchableOpacity>

              {/* small avatar */}
            </View>

            {/* Title */}
            <Text style={styles.smallTitle}>Title</Text>
            <TouchableOpacity style={styles.insertBox}>
              <TextInput
                style={styles.textInInsertBox}
                placeholder="Your title here"
                placeholderTextColor={Colors.placeholder}
              />
            </TouchableOpacity>

            {/* Date */}
            <Text style={styles.smallTitle}>Date</Text>
            <TouchableOpacity style={styles.insertBox}>
              <Text style={styles.textInInsertBox}>{currentDate}</Text>
            </TouchableOpacity>
          </View>

          {/* Description, button Create note */}
          {/* Description */}
          <View style={{ flex: 60, backgroundColor: "white" }}>
            <Text style={styles.smallTitle}>Description</Text>
            <TouchableOpacity style={styles.noteBox}>
              <TextInput
                style={styles.textInNoteBox}
                multiline={true}
                placeholder="Your description here"
                placeholderTextColor={Colors.placeholder}
              />
            </TouchableOpacity>
          </View>

          {/* Create note button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textInButton}>Create a new note</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// const AddNoteScreen = () => {

// };

const styles = StyleSheet.create({
  arrowIcon: {
    marginTop: 45,
    marginLeft: 10,
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
  },

  image: {
    height: 225,
    width: 225,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },

  title: {
    marginLeft: 20,
    marginRight: "auto",
    color: "#363942",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 45,
    shadowOpacity: 0.2,
    // fontStyle
  },

  smallTitle: {
    marginLeft: 15,
    marginRight: "auto",
    color: "#363942",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    shadowOpacity: 0.2,
    // fontStyle
  },

  normalTextOnBackGround: {
    marginLeft: "auto",
    marginRight: 30,
    color: "black",
    fontSize: 13,
    textDecorationLine: "underline",
  },

  textInButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    // fontFamily: "Poppins",
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },

  button: {
    // bordercolor: "white",
    backgroundColor: "#4B7BE5",
    marginTop: 15,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 10,
    marginHorizontal: 15,
    marginBottom: 30,
  },

  buttonCreateAccount: {
    backgroundColor: "#81A3ED",
    marginVertical: 15,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 10,
    marginHorizontal: 30,
  },

  noteBox: {
    backgroundColor: "#F5F5F5",
    // marginVertical: 10,
    marginTop: 5,
    marginBottom: 10,
    height: 340,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    marginHorizontal: 15,
  },

  insertBox: {
    backgroundColor: "#F5F5F5",
    // marginVertical: 10,
    marginTop: 5,
    marginBottom: 10,
    height: 45,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    marginHorizontal: 15,
  },

  textInInsertBox: {
    fontSize: 16,
    // fontFamily: "Poppins",
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: 15,
    marginRight: "auto",
  },

  textInNoteBox: {
    fontSize: 16,
    // fontFamily: "Poppins",
    marginBottom: "auto",
    marginTop: 5,
    marginLeft: 15,
    marginRight: "auto",
    height: 340,
  },
});

export default AddNoteScreen;
