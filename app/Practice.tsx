import React, { useEffect } from "react";
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Platform,
  Text,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaView
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Practice() {
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

  const handleProfilePress = () => {
    // Navigate to profile page
    router.push("/Home");
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Use SafeAreaView */}
        {/* Header */}
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
        {/* Body */}
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/images/2.jpeg")} // Replace with your image path
              style={styles.backgroundImage}
            />

            <LinearGradient
              style={styles.overlay}
              colors={["transparent", "#00000088"]}
            ></LinearGradient>
          </View>
          <View style={styles.card2}>
            <View style={styles.overlay2}>
              <Text style={styles.cardTitle}>Barbell Bench Press</Text>
              <View style={styles.iconsV}>
                <FontAwesome5
                  name="fire"
                  size={24}
                  color="white"
                  style={styles.icon}
                />
                <FontAwesome5
                  name="fire"
                  size={24}
                  color="white"
                  style={styles.icon}
                />
                
              </View>
            </View>
          </View>
          <View style={styles.overlay2}>
            <Text style={styles.description}>Barbell Bench Press</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

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
  body: {
    padding: 10,
  },
  card: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    height: 230,
  },
  card2: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    height: 80,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    padding: 15,
  },
  overlay2: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#181920",
    borderRadius: 15,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    marginTop: 5,
    marginHorizontal: 3,
  },
  iconOp: {
    marginTop: 10,
    marginHorizontal: 3,
    opacity: 0.5,
  },
  iconsV: {
    flexDirection: "row",
    alignContent: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, 
  },
  description: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
