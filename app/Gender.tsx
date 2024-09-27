import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define type for the gender
type GenderType = "man" | "woman";

export default function Gender() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<GenderType | null>(null);

  // Function to save gender in AsyncStorage
  const saveGender = async (gender: GenderType) => {
    try {
      await AsyncStorage.setItem("selectedGender", gender);
      setSelectedGender(gender);
    } catch (error) {
      console.error("Error saving gender:", error);
    }
  };

  // Function to retrieve gender from AsyncStorage
  const getGender = async () => {
    try {
      const storedGender = await AsyncStorage.getItem("selectedGender");
      if (storedGender) {
        setSelectedGender(storedGender as GenderType);
      }
    } catch (error) {
      console.error("Error retrieving gender:", error);
    }
  };

  

  const handleGenderSelect = (gender: GenderType) => {
    saveGender(gender); // Save the selected gender
  };

  useEffect(() => {
    getGender(); // Retrieve gender when the component mounts

    const backAction = () => {
      return true; // Prevents the back action
    };

    
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Tell Us About Yourself</Text>
        <Text style={styles.subtitle}>To Give You the Best Experience</Text>
        <View style={styles.topOverly}>
          <TouchableOpacity
            style={[
              styles.gender,
              selectedGender === "man" && styles.selectedGender,
            ]}
            onPress={() => handleGenderSelect("man")}
          >
            <AntDesign name="man" size={54} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              selectedGender === "woman" && styles.selectedGender,
            ]}
            onPress={() => handleGenderSelect("woman")}
          >
            <AntDesign name="woman" size={54} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, !selectedGender && styles.buttonDisabled]}
              disabled={!selectedGender}
            >
              <Link href={'./Age'} />
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181920",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 25,
  },
  topOverly: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
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
  buttonDisabled: {
    backgroundColor: "#b0b0b0", // Gray color for disabled button
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  gender: {
    backgroundColor: "#686D76",
    borderRadius: 180,
    padding: 5,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  selectedGender: {
    backgroundColor: "#4F75FF", // Highlight color for selected gender
  },
});
