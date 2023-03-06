import { Button, StyleSheet, Text, View, Pressable, Image } from "react-native";

function WelcomeCard({ navigation }) {
  function pressHandler() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
        />
        <View style={styles.welcomeButton}>
          <Pressable android_ripple={{ color: "#ccd" }} onPress={pressHandler}>
            <Text style={styles.message}>Welcome..</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    width: 400,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontWeight: "600",
    fontSize: 24,
    padding: 10,
  },
  image: {
    marginBottom: 100,
    height: 75,
    width: 300,
  },
  welcomeButton: {
    borderWidth: 2,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#b0e0e6",
    elevation: 5,
  },
});
