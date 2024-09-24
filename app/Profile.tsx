import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
  TextInput,
  Modal,
} from "react-native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {
  const router = useRouter();
  const BackHome = () => {
    router.push("/Home");
  };

  const [selectPoid, getSelectedPoid] = useState<string>("");
  const [selectHeight, getSelectedHeight] = useState<string>("");

  // Function to load height and weight from AsyncStorage
  const loadProfileData = async () => {
    try {
      const poid = await AsyncStorage.getItem("selectedPoid");
      const height = await AsyncStorage.getItem("selectedHeight");
      getSelectedPoid(poid ?? ""); // Fallback to empty string
      getSelectedHeight(height ?? ""); // Fallback to empty string
    } catch (error) {
      console.error("Failed to load data from AsyncStorage", error);
    }
  };

  useEffect(() => {
    loadProfileData();
  }, []);

  // State to handle notification switch
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  // Load the notification preference from AsyncStorage
  const loadNotificationPreference = async () => {
    try {
      const storedValue = await AsyncStorage.getItem("notificationsEnabled");
      if (storedValue !== null) {
        setIsNotificationsEnabled(JSON.parse(storedValue));
      }
    } catch (error) {
      console.error(
        "Failed to load notification preference from AsyncStorage",
        error
      );
    }
  };

  // Save the notification preference in AsyncStorage
  const saveNotificationPreference = async (value: boolean) => {
    try {
      await AsyncStorage.setItem("notificationsEnabled", JSON.stringify(value));
    } catch (error) {
      console.error("Failed to save notification preference", error);
    }
  };

  useEffect(() => {
    loadNotificationPreference(); // Load notification preference on component mount
  }, []);

  // Toggle Notifications
  const toggleNotifications = () => {
    setIsNotificationsEnabled((previousState) => !previousState);
    saveNotificationPreference(!isNotificationsEnabled); // Save preference
  };

  // State to handle username and modal
  const [username, setUsername] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState<string>("");

  // Load username from AsyncStorage
  const loadUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername !== null) {
        setUsername(storedUsername);
      }
    } catch (error) {
      console.error("Failed to load username from AsyncStorage", error);
    }
  };

  // Save username to AsyncStorage
  const saveUsername = async (username: string) => {
    try {
      await AsyncStorage.setItem("username", username);
      setUsername(username);
    } catch (error) {
      console.error("Failed to save username", error);
    }
  };

  useEffect(() => {
    loadUsername(); // Load username on component mount
  }, []);

  // Handle username change
  const handleUsernameChange = () => {
    if (newUsername.trim() !== "") {
      saveUsername(newUsername); // Save new username to AsyncStorage
      setIsModalVisible(false); // Close the modal
      setNewUsername(""); // Clear the input field
    } else {
      Alert.alert("Error", "Username cannot be empty.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            onPress={BackHome}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-social-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/c6/ab/74/c6ab742dab2c1cfe864b0d964ef8782e.jpg",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{username || "username"}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>
            {selectHeight ? `${selectHeight} cm` : "N/A"}
          </Text>
          <Text style={styles.statsLabel}>Height</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>
            {selectPoid ? `${selectPoid} kg` : "N/A"}
          </Text>
          <Text style={styles.statsLabel}>Weight</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>25</Text>
          <Text style={styles.statsLabel}>Active Days</Text>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <TouchableOpacity
          style={styles.settingRow}
          activeOpacity={0.7}
          onPress={() => setIsModalVisible(true)} // Open modal to change username
        >
          <View style={styles.settingIcon}>
            <Ionicons name="person-outline" size={24} color="#A0A0A0" />
          </View>
          <Text style={styles.settingText}>Username</Text>
          <Text style={styles.settingSubText}>{username || "username"}</Text>
          <AntDesign name="right" size={20} color="#A0A0A0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="notifications-outline" size={24} color="#A0A0A0" />
          </View>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: "#767577", true: "#6C63FF" }}
            thumbColor={isNotificationsEnabled ? "#6C63FF" : "#f4f3f4"}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow} activeOpacity={0.7}>
          <View style={styles.settingIcon}>
            <MaterialIcons name="settings" size={24} color="#A0A0A0" />
          </View>
          <Text style={styles.settingText}>Settings</Text>
          <Text style={styles.settingSubText}>Security, Privacy</Text>
          <AntDesign name="right" size={20} color="#A0A0A0" />
        </TouchableOpacity>
      </View>

      {/* Modal for username change */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Change Username</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter new username"
              value={newUsername}
              onChangeText={(text) => setNewUsername(text)}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleUsernameChange}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  backButton: {
    backgroundColor: "#222831",
    borderRadius: 8,
    padding: 8,
  },
  shareButton: {
    backgroundColor: "#222831",
    borderRadius: 8,
    padding: 8,
  },
  profileSection: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    color: "white",
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  statsBox: {
    backgroundColor: "#222831",
    borderRadius: 10,
    width: "28%",
    paddingVertical: 16,
    alignItems: "center",
  },
  statsNumber: {
    fontSize: 18,
    color: "white",
  },
  statsLabel: {
    color: "#A0A0A0",
  },
  settingsContainer: {
    padding: 16,
    backgroundColor: "#222831",
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 20,
    shadowColor: "#181920",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  settingIcon: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 8,
  },
  settingText: {
    fontSize: 16,
    color: "white",
    paddingLeft: 10,
  },
  settingSubText: {
    fontSize: 14,
    color: "#A0A0A0",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#222831",
  },
  modalButtonText: {
    color: "white",
  },
});
