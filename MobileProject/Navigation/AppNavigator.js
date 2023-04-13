import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen.js";
import CreateAccountScreen from "../Screens/CreateAccScreen.js";
import AddEmailVerify from "../Screens/AddEmailVerify.js";
import EnterVerifyCode from "../Screens/EnterVerifyCode.js";

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={EnterVerifyCode}
        options={{ headerShown: false }}
      />
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
export default AppNavigator;
