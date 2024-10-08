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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Age() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Function to save date in AsyncStorage
  const saveDate = async (date: Date) => {
    try {
      await AsyncStorage.setItem("selectedDate", date.toISOString());
      setSelectedDate(date);
    } catch (error) {
      console.error("Error saving date:", error);
    }
  };

  // Function to retrieve date from AsyncStorage
  const getDate = async () => {
    try {
      const storedDate = await AsyncStorage.getItem("selectedDate");
      if (storedDate) {
        setSelectedDate(new Date(storedDate));
      }
    } catch (error) {
      console.error("Error retrieving date:", error);
    }
  };

  useEffect(() => {
    getDate(); // Retrieve the date when the component mounts

    const backAction = () => {
      return true; // Prevents the back action
    };

    
  }, []);

  const handleButtonPress = () => {
    if (selectedDate) {
      router.replace("/PoidHeight");
    }
  };

  const handleConfirm = (date: Date) => {
    saveDate(date); // Save the selected date
    setDatePickerVisibility(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>How Old Are you?</Text>
        <Text style={styles.subtitle}>To Give You the Best Experience</Text>
        <View style={styles.topOverly}>
          <TouchableOpacity
            style={styles.pickerButton}
            onPress={() => setDatePickerVisibility(true)}
          >
            <Text style={styles.pickerButtonText}>
              {selectedDate ? formatDate(selectedDate) : "Select Your Age"}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={() => setDatePickerVisibility(false)}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, !selectedDate && styles.buttonDisabled]}
              onPress={handleButtonPress}
              disabled={!selectedDate}
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
  pickerButton: {
    backgroundColor: "#282C34",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  pickerButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
