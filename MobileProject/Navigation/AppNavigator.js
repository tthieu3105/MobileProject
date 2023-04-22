import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen.js";
import HomeScreen from "../Screens/HomeScreen.js";
import CreateTask from "../Screens/CreateTaskScreen.js";
import TaskInfoScreen from "../Screens/TaskInfoScreen.js";
import EditTaskScreen from "../Screens/EditTaskScreen.js";
import EditNoteScreen from "../Screens/EditNoteScreen.js";
import NoteScreen from "../Screens/NoteScreen.js";
import NotifyScreen from "../Screens/NotifyScreen.js";
import ProjectScreen from "../Screens/ProjectScreen.js";
const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
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
