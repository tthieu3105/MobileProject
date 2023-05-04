import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen.js";
import CreateAccScreen from "../Screens/CreateAccScreen.js";
import AddEmailVerify from "../Screens/AddEmailVerify.js";
import EnterVerifyCode from "../Screens/EnterVerifyCode.js";
import AddNoteScreen from "../Screens/AddNoteScreen.js";
import CalendarScreen from "../Screens/CalendarScreen.js";
import AccountFeature from "../Screens/AccountFeature.js";
import EditProfile from "../Screens/EditProfile.js";
import NoteInforScreen from "../Screens/NoteInfoScreen.js";
import WorkSpaceScreen from "../Screens/WorkSpaceScreen.js";
import CreateTaskScreen from "../Screens/CreateTaskScreen.js";
import TestScreen from "../Screens/TestScreen.js";
import HomeScreen from "../Screens/HomeScreen.js";
import MyTaskScreen from "../Screens/MyTaskScreen.js";
import CompletedTaskScreen from "../Screens/CompletedTaskScreen.js";
import OverdueTaskScreen from "../Screens/OverdueTaskScreen.js";
import RecentlyAssignedScreen from "../Screens/RecentlyAssignedScreen.js";
import AllTaskScreen from "../Screens/AllTaskScreen.js";
import CompletedWSScreen from "../Screens/CompletedWSScreen.js";
import OverdueWSScreen from "../Screens/OverdueWSScreen.js";

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={CreateTaskScreen}
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
