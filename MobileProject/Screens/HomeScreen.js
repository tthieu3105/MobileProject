import { setStatusBarBackgroundColor } from "expo-status-bar";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Animated,
  KeyboardAvoidingView,
} from "react-native";
import React, { Component, useEffect, useRef } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import EvilIcon from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import UserAvatar from "@muhzi/react-native-user-avatar";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import HomeSection from "../components/HomeSection";
import TaskCardOP from "../components/TaskCardProgress";
import TaskCardCP from "../components/TaskCardCompleted";
import TaskCardOD from "../components/TaskCardOverdue";
import Header from "../components/HeaderWithTextAndAvatar";
const CONTAINER_HEIGHT = 80;
export default function HomeScreen() {
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
  sectionInHome = {
    sectionName: "My Tasks",
    sectionName2: "Completed",
    sectionName3: "Overdue",
  };
  taskCard = {
    title1: "Landing Page Agency",
    subtitle1: "Webb Design",
    time1: "10:00 - 12:30 am",
    status1: "On Progress",
    status2: "Completed",
    status3: "Overdue",
    icon: "star",
  };
  // const headerItemsY = headerY.Animated.inter(scrollY, {
  //   inputRange: [0, HEADER_HEIGHT],
  // });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      {/* Hiển thị trạng thái điện thoại */}
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
            <SimpleLineIcons name="bell" size="30" color="black" />
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
        <View
          style={{
            marginTop: 80,
          }}
        >
          {/* Hello user */}
          <Text style={styles.title}>Hello Josh</Text>
          <Text style={styles.detailText}>May 27, 2022</Text>

          {/* SearchBox */}
          <View style={styles.SearchBox}>
            <TextInput
              style={styles.textInSearchBox}
              placeholder="Find your task"
              placeholderTextColor={Colors.placeholder}
            ></TextInput>
            <TouchableOpacity>
              <Feather name="search" size={24} color="#363942" />
            </TouchableOpacity>
          </View>
        </View>

        {/* My Task */}
        <HomeSection title={this.sectionInHome.sectionName}></HomeSection>
        {/* TaskCard */}
        <TaskCardOP
          title={this.taskCard.title1}
          subtitle={this.taskCard.subtitle1}
          time={this.taskCard.time1}
          status={this.taskCard.status1}
          iconName={this.taskCard.icon}
        ></TaskCardOP>
        {/* End of TaskCard */}

        {/* TaskCard */}
        <TaskCardOP
          title={this.taskCard.title1}
          subtitle={this.taskCard.subtitle1}
          time={this.taskCard.time1}
          status={this.taskCard.status1}
          iconName={this.taskCard.icon}
        ></TaskCardOP>
        {/* End of TaskCard */}
        {/* End of My Task*/}

        {/* Completed Section */}
        <HomeSection title={this.sectionInHome.sectionName2}></HomeSection>
        {/* TaskCard */}
        <TaskCardCP
          title={this.taskCard.title1}
          subtitle={this.taskCard.subtitle1}
          time={this.taskCard.time1}
          status={this.taskCard.status2}
        ></TaskCardCP>
        {/* End of TaskCard */}

        {/* TaskCard */}
        <TaskCardCP
          title={this.taskCard.title1}
          subtitle={this.taskCard.subtitle1}
          time={this.taskCard.time1}
          status={this.taskCard.status2}
        ></TaskCardCP>
        {/* End of TaskCard */}
        {/* End of Completed Section */}

        {/* Overdue Section */}
        <HomeSection title={this.sectionInHome.sectionName3}></HomeSection>
        {/* TaskCard */}
        <TaskCardOD
          title={this.taskCard.title1}
          subtitle={this.taskCard.subtitle1}
          time={this.taskCard.time1}
          status={this.taskCard.status3}
        ></TaskCardOD>
        {/* End of TaskCard */}

        {/* TaskCard */}
        <TaskCardOD
          title={this.taskCard.title1}
          subtitle={this.taskCard.subtitle1}
          time={this.taskCard.time1}
          status={this.taskCard.status3}
        ></TaskCardOD>
        {/* End of TaskCard */}
        {/* End of Overdue Section */}
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  title: {
    color: "#363942",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },
  detailText: {
    color: "#363942",
    fontSize: 12,
    margin: 5,
    marginHorizontal: 20,
  },
  SearchBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  textInSearchBox: {
    fontSize: 16,
    width: "90%",
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
});
