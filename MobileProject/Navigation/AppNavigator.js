import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccScreen} />
      <Stack.Screen name="AddEmail" component={AddEmailVerify} />
      <Stack.Screen name="Verify" component={EnterVerifyCode} />
      <Stack.Screen name="Home" component={MyTabs} />
    </Stack.Navigator>
  );
}

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
    </HomeStack.Navigator>
  );
}

const CalendarStack = CalendarScreenStackNavigator();
function CalendarScreenStackNavigator() {
  return (
    <CalendarStack.Navigator screenOptions={{ headerShown: false }}>
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
      <CalendarStack.Screen name="TaskInfo" component={TaskInfoScreen} />
      <CalendarStack.Screen name="TaskEdit" component={EditTaskScreen} />
    </CalendarStack.Navigator>
  );
}

const CreateTaskStack = CreateTaskScreenStackNavigator();
function CreateTaskScreenStackNavigator() {
  return (
    <CreateTaskStack.Navigator>
      <CreateTaskStack.Screen name="AddTask" component={CreateTaskScreen} />
    </CreateTaskStack.Navigator>
  );
}

const AddNoteStack = AddNoteScreenStackNavigator();
function AddNoteScreenStackNavigator() {
  return (
    <AddNoteStack.Navigator>
      <AddNoteStack.Screen name="AddNote" component={AddNoteScreen} />
    </AddNoteStack.Navigator>
  );
}

const NoteScreenStack = NoteScreenStackNavigator();
function NoteScreenStackNavigator() {
  return (
    <NoteScreenStack.Navigator>
      <NoteScreenStack.Screen name="NoteScreen" component={NoteScreen} />
      <NoteScreenStack.Screen name="Notify" component={NotifyScreen} />
      <NoteScreenStack.Screen name="NoteInfo" component={NoteInfoScreen} />
      <NoteScreenStack.Screen name="EditNote" component={EditNoteScreen} />
    </NoteScreenStack.Navigator>
  );
}

const WorkSpaceScreenStack = WorkSpaceScreenStackNavigator();
function WorkSpaceScreenStackNavigator() {
  return (
    <WorkSpaceScreenStack.Navigator>
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

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: [
          {
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: "#ffffff",
            borderRadius: 0,
            height: Dimensions.get("window").height * 0.1,
            ...styles.shadow,
          },
          null,
        ],
      }}
    >
      <Tab.Screen name="Home" component={HomeScreenStackNavigator}></Tab.Screen>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreenStackNavigator}
      ></Tab.Screen>
      <Tab.Screen
        name="AddTask"
        component={CreateTaskScreenStackNavigator}
      ></Tab.Screen>
      <Tab.Screen
        name="AddNote"
        component={AddNoteScreenStackNavigator}
      ></Tab.Screen>
      <Tab.Screen name="Note" component={NoteScreenStackNavigator}></Tab.Screen>
      <Tab.Screen
        name="Workspace"
        component={WorkSpaceScreenStackNavigator}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
export default AppNavigator;
