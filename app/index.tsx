import {
  Text,
  View,
  StatusBar,
  Image,
  StyleSheet,
  SafeAreaView,
  SafeAreaViewBase,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router"; // Import useRouter


export default function Index() {
  const router = useRouter(); // Get the router object
  useEffect(() => {
      const timer = setTimeout(() => {
        router.replace('/onBoarding'); // Navigate to the Login page after 3 seconds
      }, 3000); // 3000ms = 3 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer if component unmounts
    }, []);
  

  return (
    <>
      <LinearGradient
        style={styles.safeArea}
        colors={["#4F75FF", "#6439FF"]}
        start={{ x: 0, y: 0 }} // Start on left
        end={{ x: 1, y: 0 }} // End on right
      >
        <StatusBar backgroundColor="#6362ed" barStyle="light-content" />
        <Image
          style={styles.logo}
          source={require("../assets/images/gym.png")}
        />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#6362ed",
    justifyContent: "center", // centers vertically
    alignItems: "center", // centers horizontally
  },
  logo: {
    width: 150,
    height: 150,
  },
});
