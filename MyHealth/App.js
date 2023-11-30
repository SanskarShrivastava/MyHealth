import React from "react";
import { View } from "react-native";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Success from "./src/screens/Success";
import HomeScreen from "./src/screens/HomeScreen";
import BookAppointment from "./src/screens/BookAppointment";
import Pending from "./src/screens/Pending";
import Completed from "./src/screens/Completed";
import { auth } from "./firebase/firebase.config";
import Register from "./src/screens/Register";
import {getFirestore} from 'firebase/firestore';
import ProfileScreen from "./src/screens/ProfileScreen";
import Doctor from "./src/screens/Doctor";
import SearchScreen from "./src/screens/SearchScreen";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Pending" component={Pending} />
        <Stack.Screen name="Completed" component={Completed} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Doctor" component={Doctor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
