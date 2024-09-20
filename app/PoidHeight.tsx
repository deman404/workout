import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Picker as RNPicker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PoidHeight() {
  const router = useRouter();
  const [selectPoid, getSelectedPoid] = useState<string>("");
  const [selectHeight, getSelectedHeight] = useState<string>("");

  // Save weight and height in AsyncStorage
  const savePoidHeight = async (poid: string, height: string) => {
    try {
      await AsyncStorage.setItem("selectedPoid", poid);
      await AsyncStorage.setItem("selectedHeight", height);
    } catch (error) {
      console.error("Error saving weight and height:", error);
    }
  };

  // Retrieve weight and height from AsyncStorage
  const getPoidHeight = async () => {
    try {
      const storedPoid = await AsyncStorage.getItem("selectedPoid");
      const storedHeight = await AsyncStorage.getItem("selectedHeight");
      if (storedPoid) getSelectedPoid(storedPoid);
      if (storedHeight) getSelectedHeight(storedHeight);
    } catch (error) {
      console.error("Error retrieving weight and height:", error);
    }
  };

  useEffect(() => {
    getPoidHeight(); // Retrieve the stored weight and height when component mounts

    const backAction = () => {
      return true; // Prevent back navigation
    };

    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }
  }, []);

  const handleButtonPress = () => {
    if (selectPoid && selectHeight) {
      savePoidHeight(selectPoid, selectHeight); // Save selected values
      router.replace("/Goals");
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.topOverly}>
            <Text style={styles.title}>What is your weight?</Text>
            <RNPicker
              selectedValue={selectPoid}
              style={styles.picker}
              onValueChange={(itemValue) => getSelectedPoid(itemValue)}
            >
              {/* Generating weights from 30 to 200 kg */}
              {Array.from({ length: 171 }, (_, i) => i + 30).map((weight) => (
                <RNPicker.Item
                  key={weight}
                  label={`${weight} kg`}
                  value={`${weight}`}
                  color="#4F75FF"
                />
              ))}
            </RNPicker>

            <Text style={styles.title}>What is your height?</Text>
            <RNPicker
              selectedValue={selectHeight}
              style={styles.picker}
              onValueChange={(itemValue) => getSelectedHeight(itemValue)}
            >
              {/* Generating heights from 140 to 220 cm */}
              {Array.from({ length: 81 }, (_, i) => i + 140).map((height) => (
                <RNPicker.Item
                  key={height}
                  label={`${height} cm`}
                  value={`${height}`}
                  color="#4F75FF"
                />
              ))}
            </RNPicker>
          </View>

          <View style={styles.content}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  !(selectPoid && selectHeight) && styles.buttonDisabled,
                ]}
                onPress={handleButtonPress}
                disabled={!selectPoid || !selectHeight}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181920",
    paddingVertical: 25,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  topOverly: {
    width: "100%",
    alignItems: "center",
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
  picker: {
    width: "80%",
    height: 150,
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
    marginVertical: 15,
  },
  buttonDisabled: {
    backgroundColor: "#b0b0b0", // Gray color for disabled button
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
