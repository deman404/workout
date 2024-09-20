import React, { useEffect } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  // Function to check if all required data is stored in AsyncStorage
  const checkUserData = async () => {
    try {
      const hasSeenWelcome = await AsyncStorage.getItem("hasSeenWelcome");
      if (hasSeenWelcome) {
        router.replace("/Home");
      } else {
        router.replace("/onBoarding");
      }
    } catch (error) {
      console.error("Error checking user data:", error);
      router.replace("/onBoarding");
    }
  };
  

  // Use effect to call the checkUserData function
  useEffect(() => {
    const timer = setTimeout(() => {
      checkUserData();
    }, 3000); // Wait for 3 seconds before checking
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.safeArea}
        colors={["#4F75FF", "#6439FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6362ed",
  },
  logo: {
    width: 150,
    height: 150,
  },
});
