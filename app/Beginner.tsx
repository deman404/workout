import React from "react";
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// Define the Workout type
type Workout = {
  title: string;
  imageUrl: string;
  fireIcons: number;
  repiteCount?: number; // Optional if not all workouts have repiteCount
};

export default function Beginner() {
  const router = useRouter();

  const handleProfilePress = () => {
    // Navigate to profile page
    router.push("/Home");
  };

  // Array of workout objects
  const workouts: Workout[] = [
    {
      title: "Barbell Bench Press",
      imageUrl:
        "https://fitliferegime.com/wp-content/uploads/2021/05/Barbell-Bench-Press.jpg",
      fireIcons: 4,
      repiteCount: 10,
    },
    {
      title: "Incline Bench Press",
      imageUrl:
        "https://fitliferegime.com/wp-content/uploads/2023/11/Incline-Barbell-Bench-Press.jpg",
      fireIcons: 1,
      repiteCount: 10,
    },
    {
      title: "Decline Bench Press",
      imageUrl:
        "https://fitliferegime.com/wp-content/uploads/2023/12/Barbell-Decline-Press.jpg",
      fireIcons: 1,
    },
    {
      title: "Reverse Grip Press",
      imageUrl:
        "https://fitliferegime.com/wp-content/uploads/2021/12/Reverse-Grip-Bench-Press.webp",
      fireIcons: 1,
      repiteCount: 10,
    },
    {
      title: "Barbell Pullover",
      imageUrl:
        "https://fitliferegime.com/wp-content/uploads/2022/05/Barbell-Pullover.jpg",
      fireIcons: 1,
      repiteCount: 10,
    },
    {
      title: "Close-Grip Bench Press",
      imageUrl:
        "https://fitliferegime.com/wp-content/uploads/2021/06/Close-Grip-Bench-Press-1024x576.jpg",
      fireIcons: 1,
      repiteCount: 10,
    },
    {
      title: "Incline Reverse Grip Bench Press",
      imageUrl:
        "https://fitliferegime.com/wp-content/uploads/2023/11/Reverse-Grip-Incline-barbell-Bench-Press.jpg",
      fireIcons: 1,
      repiteCount: 10,
    },
  ];

  const onClick = (workout: Workout) => {
    // Pass workout data to the Practice page using the query params
    router.replace({
      pathname: "/Practice",
      params: {
        title: workout.title,
        imageUrl: workout.imageUrl,
        fireIcons: workout.fireIcons,
        repiteCount: workout.repiteCount,
      },
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
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
          <Text style={styles.cardTitle}>Beginner</Text>
          <TouchableOpacity onPress={handleProfilePress}>
            <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </LinearGradient>

        {/* ScrollView for workout cards */}
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          {workouts.map((workout, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => onClick(workout)}>
              <Image
                source={{ uri: workout.imageUrl }}
                style={styles.backgroundImage}
              />
              <LinearGradient
                style={styles.overlay}
                colors={["transparent", "#00000099"]}
              >
                <Text style={styles.cardTitle}>{workout.title}</Text>
                <View style={styles.iconsV}>
                  {/* Render the number of fire icons based on the difficulty */}
                  {Array.from({ length: workout.fireIcons }).map((_, i) => (
                    <FontAwesome5
                      key={i}
                      name="fire"
                      size={24}
                      color="white"
                      style={styles.icon}
                    />
                  ))}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
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
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#6362ed",
    borderWidth: 2,
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: 200, // Adjusted height for uniform size
    justifyContent: "flex-start",
    borderRadius: 15,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 3,
  },
  iconsV: {
    flexDirection: "row",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Add padding to the bottom for better scroll experience
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    padding: 15,
  },
});
