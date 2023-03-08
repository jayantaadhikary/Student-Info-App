import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screens/Login";
import WelcomeCard from "./screens/WelcomeCard";
import Profile from "./screens/Profile";
import Attendance from "./screens/Attendance";
import Marks from "./screens/Marks";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Attendance" component={Attendance} />
        <Drawer.Screen name="Marks" component={Marks} />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomeCard}
              options={{
                title: "Student Information App",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="DrawerNavigator"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
