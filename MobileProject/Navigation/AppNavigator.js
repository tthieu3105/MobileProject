import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TabContextProvider } from "../context/tabContext.js";
import TabNavigator from "../Navigation/TabNavigator.js";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccScreen} />
      <Stack.Screen name="AddEmail" component={AddEmailVerify} />
      <Stack.Screen name="Verify" component={EnterVerifyCode} /> */}
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <TabContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Root"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Root" component={TabNavigator} />
          <Stack.Screen name="Begin" component={StackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </TabContextProvider>
  );
};

export default AppNavigator;
