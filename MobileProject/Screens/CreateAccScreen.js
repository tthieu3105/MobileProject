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
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import EvilIcon from "../node_modules/@expo/vector-icons/EvilIcons";
import AntDesign from "../node_modules/@expo/vector-icons/AntDesign";
class CreateAccountScreen extends Component {
  render() {
    return (
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
            {/* Layout button back, title và hình ảnh */}
            <View style={{ flex: 40, backgroundColor: "white" }}>
              <View>
                <TouchableOpacity>
                  <AntDesign
                    name="left"
                    size={30}
                    style={styles.arrowIcon}
                  ></AntDesign>
                </TouchableOpacity>
                <Text style={styles.title}>Create your account</Text>
              </View>

              <Image
                style={styles.image}
                source={require("../Pic/WelcomeCreate.png")}
              ></Image>
              <View></View>
            </View>

            {/* Layout điền tên */}
            <View style={{ flex: 60, backgroundColor: "white" }}>
              <Text style={styles.smallTitle}>Name</Text>
              <TouchableOpacity style={styles.insertBox}>
                <TextInput
                  style={styles.textInInsertBox}
                  placeholder="First name"
                  placeholderTextColor={Colors.placeholder}
                ></TextInput>
              </TouchableOpacity>
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
                <TouchableOpacity style={styles.insertBox}>
                  <TextInput
                    style={styles.textInInsertBox}
                    placeholder="Email"
                    placeholderTextColor={Colors.placeholder}
                  ></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.insertBox}>
                  <TextInput
                    style={styles.textInInsertBox}
                    placeholder="Username"
                    placeholderTextColor={Colors.placeholder}
                  ></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.insertBox}>
                  <TextInput
                    style={styles.textInInsertBox}
                    placeholder="Password"
                    placeholderTextColor={Colors.placeholder}
                  ></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.insertBox}>
                  <TextInput
                    style={styles.textInInsertBox}
                    placeholder="Confirm your password"
                    placeholderTextColor={Colors.placeholder}
                  ></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textInButton}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  arrowIcon: {
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
    marginLeft: "auto",
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
    marginRight: "auto",
  },
});

export default CreateAccountScreen;
