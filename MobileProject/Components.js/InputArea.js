import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default class InputArea extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.name}</Text>
        {/* inputText */}
        <View style={styles.inputText}>
          <TextInput
            style={styles.textInInputText}
            placeholder={this.props.placeHolder}
            placeholderTextColor={Colors.placeholder}
          ></TextInput>
          <TouchableOpacity>
            {/* Icon */}
            <MaterialIcons name={this.props.icon} size={24} color="#363942" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "#363942",
    fontSize: 12,
    fontWeight: "500",
    marginHorizontal: 20,
    marginTop: 20,
  },
  inputText: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  textInInputText: {
    fontSize: 16,
    flex: 1,
  },
});
