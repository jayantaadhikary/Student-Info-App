import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import { useState } from "react";

function Login({ navigation }) {
  const [reg, setReg] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const credentials = {
    userName: "1234",
    password: "password",
  };

  function onSignIn() {
    if (reg == credentials.userName && password == credentials.password) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    if (loggedIn) {
      navigation.navigate("DrawerNavigator", {
        screen: "Profile",
      });
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.image}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Reg. No"
          onChangeText={(regNo) => setReg(regNo)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Pressable
        style={styles.loginBtn}
        android_ripple={{ color: "#ccc" }}
        onPress={onSignIn}
      >
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#73C2FB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 25,
    height: 50,
    width: 250,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#008ECC",
    overflow: "hidden",
  },
  text: {
    fontWeight: "bold",
  },
});
