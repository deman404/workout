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
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectTap from "../components/SelectTap";

// Define type for SelectTap items
interface SelectTapItem {
  id: number;
  label: string;
  isChecked: boolean;
}

export default function Goals() {
  const router = useRouter();
  const [selectTaps, setSelectTaps] = useState<SelectTapItem[]>([
    { id: 1, label: "Improve overall fitness", isChecked: false },
    { id: 2, label: "Lose body fat", isChecked: false },
    { id: 3, label: "Build muscle", isChecked: false },
    { id: 4, label: "Enhance mental health", isChecked: false },
    { id: 5, label: "Increase flexibility", isChecked: false },
  ]);

  

  const handleButtonPress = async () => {
    if (selectTaps.some((tap) => tap.isChecked)) {
      // Save the selected goals in AsyncStorage
      const selectedGoals = selectTaps.filter((tap) => tap.isChecked);
      try {
        await AsyncStorage.setItem(
          "selectedGoals",
          JSON.stringify(selectedGoals)
        );
        router.replace("/Welcom");
      } catch (error) {
        console.error("Error saving data", error);
      }
    }
  };

  const handleCheckChange = (id: number) => {
    setSelectTaps((prevTaps) =>
      prevTaps.map((tap) =>
        tap.id === id ? { ...tap, isChecked: !tap.isChecked } : tap
      )
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Tell Us About Yourself</Text>
        <Text style={styles.subtitle}>To Give You the Best Experience</Text>
        <View style={styles.topOverly}>
          {selectTaps.map((tap) => (
            <SelectTap
              key={tap.id}
              label={tap.label}
              isChecked={tap.isChecked}
              onCheckChange={() => handleCheckChange(tap.id)}
            />
          ))}
        </View>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                !selectTaps.some((tap) => tap.isChecked) && styles.buttonDisabled,
              ]}
              onPress={handleButtonPress}
              disabled={!selectTaps.some((tap) => tap.isChecked)}
            >
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
});
