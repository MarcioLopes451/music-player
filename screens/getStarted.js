import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Girl from "../images/img_girl.png";
import { useNavigation } from "@react-navigation/native";

export default function GetStarted({ navigation }) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={Girl} />
      <View style={styles.getStarted}>
        <Pressable
          style={styles.buttonOne}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.text}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#47c0d5",
    alignItems: "center",
    justifyContent: "center",
  },
  getStarted: {
    backgroundColor: "black",
    borderRadius: 8,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  buttonOne: {
    backgroundColor: "#47c0d5",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});
