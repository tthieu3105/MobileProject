import { setStatusBarBackgroundColor } from "expo-status-bar";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  TextInputProps,
} from "react-native";
import React, { Component } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

// class WelcomeScreen extends Component { render() { [...] } }

class LoginScreen extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View style={{ flex: 50, backgroundColor: "white" }}>
          <Image
            style={styles.image}
            source={require("../Pic/welcomePic.png")}
          ></Image>
          <Text style={styles.title}> MANAGE YOUR TIME </Text>
        </View>

        <View style={{ flex: 20, backgroundColor: "white" }}>
          <TouchableOpacity style={styles.insertBox1}>
            <TextInput
              style={styles.textInInsertBox}
              placeholder="Username or Email"
              placeholderTextColor={Colors.placeholder}
            ></TextInput>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insertBox2}>
            <TextInput
              style={styles.textInInsertBox}
              placeholder="Password"
              placeholderTextColor={Colors.placeholder}
            ></TextInput>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.normalTextOnBackGround}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 30, backgroundColor: "white" }}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textInButton}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCreateAccount}>
            <Text style={styles.textInButton}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: "65%",
    width: "75%",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
  },

  title: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#363942",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
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

  buttonLogin: {
    // bordercolor: "white",
    backgroundColor: "#4B7BE5",
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 10,
    marginHorizontal: 30,
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

  insertBox1: {
    backgroundColor: "#F5F5F5",
    marginVertical: 3,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 5,
    marginHorizontal: 30,
  },

  insertBox2: {
    backgroundColor: "#F5F5F5",
    marginVertical: 10,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 5,
    marginHorizontal: 30,
  },

  textInInsertBox: {
    fontSize: 16,
    // fontFamily: "Poppins",
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: 15,
    marginRight: "auto",
  },
});

export default LoginScreen;
