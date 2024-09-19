import React, { useEffect, useRef } from "react";
import {
  View,
  StatusBar,
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Platform,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();
 

  useEffect(() => {
    

    const backAction = () => {
      return true; // Prevents the back action
    };

    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }
  }, []);

  const handleButtonPress = () => {
    router.replace("/(tabs)/");
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Background Image */}
        <Image
          source={require("../assets/images/bg.png")} // Replace with your image path
          style={styles.backgroundImage}
        />


        {/* Overlay Gradient */}
        <LinearGradient
          style={styles.overlay}
          colors={["transparent", "#000000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.title}>
              Welcome to<Text style={styles.titleSpan}> WorkOut</Text>
            </Text>
            <Text style={styles.subtitle}>We created the best workout for you</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleButtonPress}
              >
                <Text style={styles.buttonText}>Let's go</Text>
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
    backgroundColor: "#000000",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 50,
  },
  imageWrapper: {
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
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
    color: "#4F75FF",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "#4F75FF",
    padding: 15,
    borderRadius: 25,
    width: 230,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Make image cover the entire view
    width: "100%",
    height: "100%",
    
  },
});
