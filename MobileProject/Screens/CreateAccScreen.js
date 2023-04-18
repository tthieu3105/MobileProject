import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

import Constants from "expo-constants";
import React, { Component, useEffect, useRef } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import EvilIcon from "../node_modules/@expo/vector-icons/EvilIcons";
import AntDesign from "../node_modules/@expo/vector-icons/AntDesign";

const CONTAINER_HEIGHT = 80;

const CreateAccountScreen = () => {
  // Header Animation
  const scrollY = useRef(new Animated.Value(0)).current;
  const offsetAnim = useRef(new Animated.Value(0)).current;
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: "clamp",
      }),
      offsetAnim
    ),
    0,
    CONTAINER_HEIGHT
  );

  var _clampedScrollValue = 0;
  var _offsetValue = 0;
  var _scrollValue = 0;
  useEffect(() => {
    scrollY.addListener(({ value }) => {
      const diff = value - _scrollValue;
      _scrollValue = value;
      _clampedScrollValue = Math.min(
        Math.max(_clampedScrollValue * diff, 0),
        CONTAINER_HEIGHT
      );
    });
    offsetAnim.addListener(({ value }) => {
      _offsetValue = value;
    });
  }, []);

  const headerTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT],
    outputRange: [0, -CONTAINER_HEIGHT],
    extrapolate: "clamp",
  });
  // End of header animation

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ backgroundColor: "white" }}
      enabled
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: headerTranslate }] },
        ]}
      >
        {/* Layout button back và title */}
        <View style={styles.row}>
          {/* Button: back to previous screen */}
          <TouchableOpacity>
            <AntDesign
              name="left"
              size={30}
              style={styles.arrowIcon}
            ></AntDesign>
          </TouchableOpacity>
          {/* Title */}
          <Text style={styles.title}>Create your account</Text>
        </View>
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
          }}
        >
          {/* hình ảnh */}
          <View style={{ flex: 40, backgroundColor: "white" }}>
            {/* Picture */}
            <Image
              style={styles.image}
              source={require("../Pic/WelcomeCreate.png")}
            ></Image>
          </View>

          {/* Layout điền tên */}
          <View style={{ flex: 60, backgroundColor: "white" }}>
            <Text style={styles.smallTitle}>Name</Text>

            {/* Nhập first name */}
            <TouchableOpacity style={styles.insertBox}>
              <TextInput
                style={styles.textInInsertBox}
                placeholder="First name"
                placeholderTextColor={Colors.placeholder}
              ></TextInput>
            </TouchableOpacity>

            {/* Nhập last name */}
            <TouchableOpacity style={styles.insertBox}>
              <TextInput
                style={styles.textInInsertBox}
                placeholder="Last name"
                placeholderTextColor={Colors.placeholder}
              ></TextInput>
            </TouchableOpacity>

            {/* Layout thông tin account và button Next */}
            <View>
              <Text style={styles.smallTitle}>Account</Text>

              {/* Nhập email */}
              <TouchableOpacity style={styles.insertBox}>
                <TextInput
                  style={styles.textInInsertBox}
                  placeholder="Email"
                  placeholderTextColor={Colors.placeholder}
                ></TextInput>
              </TouchableOpacity>

              {/* Nhập username */}
              <TouchableOpacity style={styles.insertBox}>
                <TextInput
                  style={styles.textInInsertBox}
                  placeholder="Username"
                  placeholderTextColor={Colors.placeholder}
                ></TextInput>
              </TouchableOpacity>

              {/* Nhập Password */}
              <TouchableOpacity style={styles.insertBox}>
                <TextInput
                  style={styles.textInInsertBox}
                  placeholder="Password"
                  placeholderTextColor={Colors.placeholder}
                ></TextInput>
              </TouchableOpacity>

              {/* Nhập lại password (check xem có giống với phía trên) */}
              <View style={styles.insertBox}>
                <TextInput
                  style={styles.textInInsertBox}
                  placeholder="Confirm your password"
                  placeholderTextColor={Colors.placeholder}
                ></TextInput>
              </View>

              {/* Button: next */}
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textInButton}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: "100%",
    height: CONTAINER_HEIGHT,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "white",
    zIndex: 1000,
    elevation: 1000,
  },

  arrowIcon: {
    marginTop: 45,
    marginLeft: 10,
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
    marginTop: 95,
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
    marginRight: 15,
  },

  frameToInsert: {
    marginTop: 0,
    marginBottom: 0,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 0,
  },
});

export default CreateAccountScreen;
