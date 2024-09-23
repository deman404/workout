import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

export default function Practice() {
  const params = useLocalSearchParams();

  // Ensure parameters are strings, not arrays
  const title = Array.isArray(params.title) ? params.title[0] : params.title;
  const imageUrl = Array.isArray(params.imageUrl)
    ? params.imageUrl[0]
    : params.imageUrl;
  const fireIcons = Array.isArray(params.fireIcons)
    ? parseInt(params.fireIcons[0])
    : parseInt(params.fireIcons);
  const repiteCount = Array.isArray(params.repiteCount)
    ? params.repiteCount[0]
    : params.repiteCount;

  const router = useRouter();

  const handleProfilePress = () => {
    // Navigate to profile page
    router.replace("/Beginner");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.header}
        colors={["#4F75FF", "#6439FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <AntDesign name="back" size={24} color="white" />

        <Text style={styles.cardTitle}>Beginner</Text>
        <TouchableOpacity onPress={handleProfilePress}>
          <AntDesign name="user" size={24} color="white" />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.containerp}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.repiteCount}>Repetitions: {repiteCount}</Text>
        <View style={styles.iconsContainer}>
          {Array.from({ length: fireIcons }).map((_, i) => (
            <FontAwesome5 key={i} name="fire" size={24} color="white" paddingHorizontal={5} />
          ))}
        </View>
      </View>

      <View style={styles.overlay}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#6263ed",
            padding: 10,
            width: "90%",
            marginHorizontal: 15,
            borderRadius: 15,
            alignItems:'center',
          }}
        >
          <View style={{ width: "75%" }}>
            <Text style={{ color: "#fff" ,paddingHorizontal:15}}>You did it ?</Text>
          </View>
          <TouchableOpacity
            style={{
              width: "25%",
              backgroundColor: "#ffffff",
              padding: 8,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#000" ,textAlign:'center'}}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181920",
  },
  containerp: {
    flex: 1,
    backgroundColor: "#181920",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  repiteCount: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
  },
  iconsContainer: {
    flexDirection: "row",
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

  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Cover entire area
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
});
