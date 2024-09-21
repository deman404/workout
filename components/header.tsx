import React from "react";
import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaView

const HeaderTap = () => {
  const router = useRouter();

  const handleProfilePress = () => {
    // Navigate to profile page
    router.push("/Home");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          style={styles.header}
          colors={["#4F75FF", "#6439FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Image
            source={require("../assets/images/gym.png")} // Replace with your logo path
            style={styles.logo}
          />
          <Text style={styles.cardTitle}>WorkOut</Text>
          <TouchableOpacity onPress={handleProfilePress}>
            <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 45,
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: "#6263ed", // Header background color
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  logo: {
    width: 24,
    height: 24, // Adjust size as needed
  },
  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HeaderTap;
