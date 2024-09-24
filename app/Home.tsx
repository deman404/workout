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
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaView
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as Notifications from "expo-notifications";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const backAction = () => {
      return true; // Prevents the back action
    };

    
  }, []);

  const handleProfilePress = () => {
    // Navigate to profile page
    router.push("/Profile");
  };

  return (
    <>
      <StatusBar barStyle="light-content"/>
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
          /><Text style={styles.cardTitle}>WorkOut</Text>
          <TouchableOpacity onPress={handleProfilePress}>
            <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </LinearGradient>
        {/* Body */}
        <ScrollView style={styles.body} contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.card} onPress={()=>{router.push("/Beginner");}}>
              <Image
                source={require("../assets/images/2.jpeg")} // Replace with your image path
                style={styles.backgroundImage}
              />
              
              <LinearGradient
                style={styles.overlay}
                colors={["transparent", "#00000088"]}                        
              >
                <Text style={styles.cardTitle}>Beginner</Text>
                <View style={styles.iconsV}>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.iconOp}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.iconOp}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.iconOp}/>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{router.push("/Advanced");}}>
              <Image
                source={require("../assets/images/1.jpeg")} // Replace with your image path
                style={styles.backgroundImage}
              />
              <LinearGradient
                style={styles.overlay}
                colors={["transparent", "#00000088"]}
              >
                <Text style={styles.cardTitle}>Advanced</Text>
                <View style={styles.iconsV}>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.iconOp}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.iconOp}/>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{router.push("/Expert");}}>
              <Image
                source={require("../assets/images/3.jpeg")}
                style={styles.backgroundImage}
              />
              <LinearGradient
                style={styles.overlay}
                colors={["transparent", "#00000088"]}
              >
                <Text style={styles.cardTitle}>Expert</Text>
                <View style={styles.iconsV}>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                <FontAwesome5 name="fire" size={24} color="white" style={styles.icon}/>
                </View>
              </LinearGradient>
            </TouchableOpacity>
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
    paddingHorizontal:15,
    paddingBottom:15,
    backgroundColor: "#6263ed", // Header background color
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
  },
  logo: {
    width: 24,
    height: 24, // Adjust size as needed
  },
  body: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent:'flex-start'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    padding:15,

  },
  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    marginTop: 10,
    marginHorizontal:3,
  },
  iconOp: {
    marginTop: 10,
    marginHorizontal:3,
    opacity:0.5,
  },
  iconsV:{
    flexDirection:'row',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Add padding to the bottom for better scroll experience
  },
});
