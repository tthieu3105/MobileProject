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
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcon from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

class EnterVerifyCode extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
          enabled
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
        >
          <ScrollView>
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
              }}
            >
              {/* Layout title, back button, picture */}
              <View style={{ flex: 50, backgroundColor: "white" }}>
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
                  <Text style={styles.title}>Verify your email</Text>
                </View>
                {/* Picture */}
                <Image
                  style={styles.image}
                  source={require("../Pic/EnterCode.png")}
                ></Image>
              </View>

              {/* Layout enter code, direction, button: next */}
              <View style={{ flex: 50, backgroundColor: "white" }}>
                {/* 4 box to enter code */}
                <View style={styles.row}>
                  <TouchableOpacity style={styles.codeBox1}>
                    <TextInput
                      style={styles.textInCodeBox}
                      placeholder="0"
                      placeholderTextColor={Colors.placeholder}
                    ></TextInput>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.codeBox}>
                    <TextInput
                      style={styles.textInCodeBox}
                      placeholder="0"
                      placeholderTextColor={Colors.placeholder}
                    ></TextInput>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.codeBox}>
                    <TextInput
                      style={styles.textInCodeBox}
                      placeholder="0"
                      placeholderTextColor={Colors.placeholder}
                    ></TextInput>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.codeBox2}>
                    <TextInput
                      style={styles.textInCodeBox}
                      placeholder="0"
                      placeholderTextColor={Colors.placeholder}
                    ></TextInput>
                  </TouchableOpacity>
                </View>
                {/* Direction */}
                <View>
                  <Text style={styles.direction}>
                    Please enter the 4 digit code
                  </Text>
                  <Text style={styles.ContinueDirection}>
                    sent to your email
                  </Text>
                </View>
                {/* button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textInButton}>Verify</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arrowIcon: {
    marginTop: 45,
    marginLeft: 10,
  },

  row: {
    flexDirection: "row",
  },

  image: {
    height: 340,
    width: 200,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 35,
  },

  title: {
    marginLeft: 40,
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
    marginBottom: 10,
    marginTop: 30,
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
    marginRight: "auto",
  },

  codeBox1: {
    backgroundColor: "#F5F5F5",
    // marginVertical: 10,
    marginTop: 40,
    marginBottom: 5,
    marginLeft: 50,
    height: 45,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
  },

  codeBox2: {
    backgroundColor: "#F5F5F5",
    // marginVertical: 10,
    marginTop: 40,
    marginBottom: 5,
    marginLeft: 40,
    marginRight: 50,
    height: 45,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
  },

  codeBox: {
    backgroundColor: "#F5F5F5",
    // marginVertical: 10,
    marginTop: 40,
    marginBottom: 5,
    height: 45,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    marginLeft: 40,
  },

  textInCodeBox: {
    fontSize: 16,
    // fontFamily: "Poppins",
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: 15,
    marginRight: 15,
  },

  direction: {
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    marginTop: 25,
  },
  ContinueDirection: {
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 20,
  },
});

export default EnterVerifyCode;
