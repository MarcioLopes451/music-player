import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Logo from "../images/RHYTMO (1).png";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("GetStarted");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={Logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
