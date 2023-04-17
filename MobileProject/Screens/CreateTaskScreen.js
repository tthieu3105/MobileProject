import { setStatusBarBackgroundColor } from "expo-status-bar";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  TextInputProps,
  StatusBar,
  Animated,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { Component, useEffect, useRef } from "react";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import Header from "../Components.js/HeaderWithTextAndAvatar";
import { MaterialIcons } from "@expo/vector-icons";
import TimeInput from "@tighten/react-native-time-input";
import InputArea from "../Components.js/InputArea";
import { Colors } from "react-native/Libraries/NewAppScreen";
import UserAvatar from "@muhzi/react-native-user-avatar";
const CONTAINER_HEIGHT = 80;

export default function CreateTaskScreen() {
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

  inputText = {
    name1: "Project",
    name2: "Title",
    name3: "Date",
    name4: "Description",
    icon1: "arrow-drop-down-circle",
    icon3: "calendar-today",
    hintText: "Enter Username or Email",
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} />

        {/* Header */}
        <Animated.View
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <View style={styles.rowSection}>
            <TouchableOpacity style={styles.headerBehave}>
              <SimpleLineIcons name="arrow-left" size="30" color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBehave}>
              <UserAvatar
                initialName="SK"
                fontSize={15}
                size={40}
                rounded={true}
                backgroundColors={["#4B7BE5"]}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        {/* End of Header */}
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          <View>
            <View
              style={{
                marginTop: 80,
              }}
            >
              {/* Project Name */}
              {/* TextInput */}
              <InputArea
                name={this.inputText.name1}
                icon={this.inputText.icon1}
              ></InputArea>

              {/* <InputText nameInputText={this.inputText.name1}></InputText> */}
              {/* End of TextInput */}

              {/* Title name */}
              {/* TextInput */}
              <InputArea name={this.inputText.name2}></InputArea>

              {/* End of TextInput */}

              {/* Date  */}
              {/* TextInput */}
              <InputArea
                name={this.inputText.name3}
                icon={this.inputText.icon3}
              ></InputArea>

              {/* End of TextInput */}

              {/* Time */}
              {/* TextInput */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.timeTitle}>Start Time</Text>
                <Text style={styles.timeTitle}>End Time</Text>
              </View>

              <View>
                <View>
                  {/* Input Text */}
                  <View style={styles.inputTextWithTime}>
                    <View style={styles.smallInputText}>
                      <TextInput style={styles.textInInputText}></TextInput>
                    </View>
                    <View style={styles.smallInputText}>
                      <TextInput style={styles.textInInputText}></TextInput>
                    </View>
                  </View>
                </View>
                {/* End of TextInput */}

                {/* Remind, End date and Assign to*/}
                <View style={styles.itemsEnable}>
                  {/* Remind */}
                  <View style={styles.rowEnable}>
                    <View style={styles.childRowEnable}>
                      <TouchableOpacity>
                        <MaterialIcons
                          name="access-alarm"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                      <Text style={styles.textInEnableRow}>Remind</Text>
                    </View>
                    <View style={styles.childRowEnableMiddle}>
                      <Text style={styles.textInEnableRow}>1 days before</Text>
                      <TouchableOpacity>
                        <MaterialIcons
                          name="arrow-drop-down-circle"
                          size={24}
                          color="#363942"
                          style={{ padding: 3 }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.childRowEnable}>
                      <Text style={styles.textInEnableRow}>Enable</Text>
                    </View>
                  </View>
                  {/* End of Remind */}
                  {/* Due date */}
                  <View style={styles.rowEnable}>
                    <View style={styles.childRowEnable}>
                      <Feather name="calendar" size={24} color="#363942" />
                      <Text style={styles.textInEnableRow}>End date</Text>
                    </View>
                    <View style={styles.childRowEnable}>
                      <Text style={styles.textInEnableRow}>Enable</Text>
                    </View>
                  </View>
                  {/* End of due date */}
                  {/* Assign to */}
                  <View style={styles.rowEnable}>
                    <View style={styles.childRowEnable}>
                      <MaterialIcons
                        name="people-outline"
                        size={24}
                        color="black"
                      />
                      <Text style={styles.textInEnableRow}>Assign to</Text>
                    </View>
                    <View style={styles.childRowEnable}>
                      <Text style={styles.textInEnableRow}>Enable</Text>
                    </View>
                  </View>
                  <View>
                    {/* inputText */}
                    <View style={styles.inputText}>
                      <TextInput
                        style={styles.textInInputText}
                        placeholder="Enter Username or Email"
                        placeholderTextColor={Colors.placeholder}
                      ></TextInput>
                    </View>
                  </View>
                </View>
                {/* End of Remind, End date and Assign to */}
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
              </View>
            </View>
          </View>
        </Animated.ScrollView>
        <View style={styles.createTask}>
          {/*Btn Create Task */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textInButton}>Create a new task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputText: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  smallInputText: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    width: "40%",
  },
  textInInputText: {
    fontSize: 16,
    width: "90%",
  },
  inputTextWithTime: {
    display: "flex",
    flexDirection: "row",
  },
  timeTitle: {
    color: "#363942",
    fontSize: 12,
    fontWeight: "500",
    marginHorizontal: 20,
    marginTop: 20,
    width: "40%",
  },
  itemsEnable: {
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
  },
  childRowEnable: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rowEnable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
  },
  childRowEnableMiddle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInEnableRow: {
    color: "#363942",
    fontSize: 12,
    fontWeight: "500",
  },
  createTask: {
    position: "relative",
    width: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    zIndex: 1000,
    elevation: 1000,
  },
  btnCreateTask: {
    backgroundColor: "#4B7BE5",
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 20,
    alignItems: "center",
    padding: 15,
  },
  textInBtnCreateTask: {
    color: "#F8F6FF",
    fontWeight: "bold",
    fontSize: 16,
  },
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
  rowSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  headerBehave: {
    padding: 20,
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
    backgroundColor: "#4B7BE5",
    marginTop: 15,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 10,
    marginHorizontal: 15,
    marginBottom: 30,
  },
  smallTitle: {
    color: "#363942",
    fontSize: 12,
    fontWeight: "500",
    marginHorizontal: 20,
    marginTop: 20,
    marginVertical: 10,
  },
  noteBox: {
    backgroundColor: "#F5F5F5",
    marginTop: 5,
    marginBottom: 10,
    height: 340,
    borderRadius: 10,
    shadowColor: "gray",
    marginHorizontal: 15,
  },
  textInNoteBox: {
    fontSize: 16,
    marginBottom: "auto",
    marginTop: 5,
    marginLeft: 15,
    marginRight: "auto",
    height: 340,
  },
});
