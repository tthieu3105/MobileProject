import React from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "../Screens/LoginScreen.js";
import CreateAccScreen from "../Screens/CreateAccScreen.js";
import AddEmailVerify from "../Screens/AddEmailVerify.js";
import EnterVerifyCode from "../Screens/EnterVerifyCode.js";
import AddNoteScreen from "../Screens/AddNoteScreen.js";
import CalendarScreen from "../Screens/CalendarScreen.js";
import AccountFeature from "../Screens/AccountFeature.js";
import EditProfile from "../Screens/EditProfile.js";
import NoteInfoScreen from "../Screens/NoteInfoScreen.js";
import WorkSpaceScreen from "../Screens/WorkSpaceScreen.js";
import HomeScreen from "../Screens/HomeScreen.js";
import NoteScreen from "../Screens/NoteScreen.js";
import CreateTaskScreen from "../Screens/CreateTaskScreen.js";
import NotifyScreen from "../Screens/NotifyScreen.js";
import TaskInfoScreen from "../Screens/TaskInfoScreen.js";
import EditTaskScreen from "../Screens/EditTaskScreen.js";
import EditNoteScreen from "../Screens/EditNoteScreen.js";
import ProjectScreen from "../Screens/ProjectScreen.js";
import NewTaskNote from "../Screens/NewTaskNote.js";

import { tabContextProvider, useTabMenu } from "../context/tabContext.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Modal } from "react-native";
import AddButton from "../components/AddButton.js";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccScreen} />
      <Stack.Screen name="AddEmail" component={AddEmailVerify} />
      <Stack.Screen name="Verify" component={EnterVerifyCode} /> */}
      <Stack.Screen name="Home" component={MyTabs} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};

const HomeStack = createStackNavigator();
function HomeScreenStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Notify" component={NotifyScreen} />
      <HomeStack.Screen name="AccountFeature" component={AccountFeature} />
      <HomeStack.Screen name="EditProfile" component={EditProfile} />
      <HomeStack.Screen name="AddNote" component={AddNoteScreen} />
      <HomeStack.Screen name="CreateTask" component={CreateTaskScreen} />
    </HomeStack.Navigator>
  );
}

const CalendarStack = createStackNavigator();
function CalendarScreenStackNavigator() {
  return (
    <CalendarStack.Navigator screenOptions={{ headerShown: false }}>
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
      <CalendarStack.Screen name="TaskInfo" component={TaskInfoScreen} />
      <CalendarStack.Screen name="TaskEdit" component={EditTaskScreen} />
    </CalendarStack.Navigator>
  );
}

const CreateTaskStack = createStackNavigator();
function CreateTaskScreenStackNavigator() {
  return (
    <CreateTaskStack.Navigator screenOptions={{ headerShown: false }}>
      <CreateTaskStack.Screen name="AddTask" component={CreateTaskScreen} />
    </CreateTaskStack.Navigator>
  );
}

const AddNoteStack = createStackNavigator();
function AddNoteScreenStackNavigator() {
  return (
    <AddNoteStack.Navigator screenOptions={{ headerShown: false }}>
      <AddNoteStack.Screen name="AddNote" component={AddNoteScreen} />
    </AddNoteStack.Navigator>
  );
}

const NoteScreenStack = createStackNavigator();
function NoteScreenStackNavigator() {
  return (
    <NoteScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <NoteScreenStack.Screen name="NoteScreen" component={NoteScreen} />
      <NoteScreenStack.Screen name="Notify" component={NotifyScreen} />
      <NoteScreenStack.Screen name="NoteInfo" component={NoteInfoScreen} />
      <NoteScreenStack.Screen name="EditNote" component={EditNoteScreen} />
    </NoteScreenStack.Navigator>
  );
}

const WorkSpaceScreenStack = createStackNavigator();
function WorkSpaceScreenStackNavigator() {
  return (
    <WorkSpaceScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkSpaceScreenStack.Screen
        name="Workspace"
        component={WorkSpaceScreen}
      />
      <WorkSpaceScreenStack.Screen name="Notify" component={NotifyScreen} />
      <WorkSpaceScreenStack.Screen
        name="AccountFeature"
        component={AccountFeature}
      />
      <WorkSpaceScreenStack.Screen name="EditProfile" component={EditProfile} />
      <WorkSpaceScreenStack.Screen name="Projects" component={ProjectScreen} />
      <WorkSpaceScreenStack.Screen name="Tasks" component={TaskInfoScreen} />
      <WorkSpaceScreenStack.Screen name="TaskEdit" component={EditTaskScreen} />
    </WorkSpaceScreenStack.Navigator>
  );
}

const NewTaskNoteScreenStack = createStackNavigator();
function NewTaskNoteScreenStackNavigator() {
  return (
    <NewTaskNoteScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <NewTaskNoteScreenStack.Screen name="New" component={NewTaskNote} />
      <NewTaskNoteScreenStack.Screen
        name="NewTask"
        component={CreateTaskScreen}
      />
      <NewTaskNoteScreenStack.Screen name="NewNote" component={AddNoteScreen} />
    </NewTaskNoteScreenStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  const { opened, toggleOpened } = useTabMenu();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: [
          {
            position: "relative",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            shadowColor: "gray",
            backgroundColor: "white",
            height: 85,
            // height: Dimensions.get("window").height * 0.1,
            ...styles.shadow,
          },
          null,
        ],
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                marginBottom: 5,
                marginTop: 7,
              }}
            >
              {focused && (
                <Feather
                  name="home"
                  size={28}
                  color="#4B7BE5"
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              )}
              {!focused && (
                <Feather
                  name="home"
                  size={24}
                  color="black"
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              )}
            </View>
          ),
        }}
        // listeners={{
        //   tabPress: (e) => opened && e.preventDefault(),
        // }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreenStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                marginBottom: 5,
                marginTop: 7,
              }}
            >
              {focused && (
                <Feather
                  name="calendar"
                  size={28}
                  color="#4B7BE5"
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              )}
              {!focused && (
                <Feather
                  name="calendar"
                  size={24}
                  color="black"
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="New"
        component={HomeScreen}
        options={{
          tabBarButton: () => <AddButton />,
        }}
      />

      <Tab.Screen
        name="Note"
        component={NoteScreenStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                marginBottom: 5,
                marginTop: 7,
              }}
            >
              {focused && (
                <FontAwesome
                  name="sticky-note-o"
                  size={28}
                  color="#4B7BE5"
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              )}
              {!focused && (
                <FontAwesome
                  name="sticky-note-o"
                  size={24}
                  color="black"
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Workspace"
        component={WorkSpaceScreenStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                marginBottom: 5,
                marginTop: 7,
              }}
            >
              {focused && (
                <MaterialIcons
                  name="workspaces-outline"
                  size={28}
                  color="#4B7BE5"
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              )}
              {!focused && (
                <MaterialIcons
                  name="workspaces-outline"
                  size={24}
                  color="black"
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default AppNavigator;

const styles = StyleSheet.create({
  tabIcon: {
    // width: Dimensions.get("window").width * 0.08,
    // height: Dimensions.get("window").height * 0.08,
  },

  shadow: {
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },

  Box: {
    backgroundColor: "#F5F5F5",
    // marginVertical: 10,
    // marginHorizontal: "auto",
    alignItems: "center",
    height: 100,
    marginTop: 250,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    marginHorizontal: 15,
  },

  button: {
    // bordercolor: "white",
    backgroundColor: "#4B7BE5",
    marginTop: 15,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    marginHorizontal: 15,
    marginBottom: 0,
  },

  smallTitle: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#363942",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,

    // fontStyle
  },
});
