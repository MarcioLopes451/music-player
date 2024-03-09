import { Text, View, StyleSheet, Image } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Logo from "../images/RHYTMO.png";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
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
