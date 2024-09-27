import {
  Text,
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  BackHandler,

} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { useRouter } from "expo-router"; // Import useRouter
import React, { useState, useEffect } from "react";


export default function OnBoarding() {
    const router = useRouter(); 

  const handleButtonPress = () => {
    router.replace('/Gender'); 
  };

  useEffect(() => {
    const backAction = () => {
      //Toast.show("Back navigation is disabled on this page");
      return true; // Prevents the back action
    };

    
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Background Image */}
        <Image
          source={require("../assets/images/background.jpg")} // Replace with your image path
          style={styles.backgroundImage}
        />

        {/* Overlay Gradient */}
        <LinearGradient
          style={styles.overlay}
          colors={["transparent", "#000000"]} // Gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.title}>Welcome to<Text style={styles.titleSpan}> WorkOut</Text></Text>
            <Text style={styles.subtitle}>Your changes starts here</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:15,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Make image cover the entire view
    width: "100%",
    height: "100%",
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Cover entire area
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom:50,

  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  titleSpan: {
    fontSize: 32,
    color: "#4F75FF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%', // Make container full width
    paddingHorizontal: 15, // Horizontal padding to account for margins
  },
  button: {
    backgroundColor: '#4F75FF',
    padding: 15,
    borderRadius: 25,
    width: 230, // Full width within its container
    
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign:'center',
  },
});
