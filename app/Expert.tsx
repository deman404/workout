import React, { useState } from "react";
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

export default function Expert() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false); // Track modal visibility
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null); // Track selected image

  const handleImagePress = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl); // Set the selected image URL
    setModalVisible(true); // Show the modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Hide the modal
    setSelectedImageUrl(null); // Clear the selected image
  };
  const handleProfilePress = () => {
    router.push("/Home");
  };

  const [checkedItems, setCheckedItems] = React.useState<boolean[]>([]);

  // Array of workout objects
  const workouts = [
    {
      title: "Dumbbell Bench Press",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-bench-press_0.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Incline Dumbbell Bench Press",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/incline-dumbbell-bench-press_0.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Dumbbell Pullover",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-pullover.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Dumbbell Flys",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-fly.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Incline Bench Press",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/incline-bench-press.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Pec Dec",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/machine-fly.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Standing Cable Fly",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/standing-cable-fly1.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Hammer Strength Bench Press",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/machine-bench-press_0.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Chest Dip",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/chest-dip.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Cable Iron Cross",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/cable-iron-cross-1.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Push Up",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/push-ups.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Decline Bench Press",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/decline-bench-press-1.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Cable Crossovers",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/cable-crossovers-upper-chest.jpg?itok=LoE4uwMW",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Standing Cable Fly",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/standing-low-to-high-cable-fly-1.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Decline Push Up",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/decline-push-up.jpg",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Weighted Chest Dip",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/weighted-chest-dip.jpg?itok=JuhDOI7J",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Barbell Pullover",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/barbellpullover.jpg?itok=cdQxSVCv",
      setts: 4,
      repiteCount: 12,
    },
    {
      title: "Push Up with Knee Drive",
      imageUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/push-up-with-knee-drive.jpg",
      setts: 4,
      repiteCount: 12,
    },
  ];

  const toggleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/fast-mass.jpg",
          }} // Replace with your image path
          style={styles.backgroundImage}
        />
        <View style={styles.overlay}>
          <View style={styles.Topcontent}>
            <TouchableOpacity style={styles.icon} onPress={handleProfilePress}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Modal for fullscreen image */}
          {/* Modal for fullscreen image */}
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseModal}
              >
                <Ionicons name="close" size={32} color="#fff" />
              </TouchableOpacity>

              {/* Conditionally render the Image if selectedImageUrl exists */}
              {selectedImageUrl && (
                <Image
                  source={{ uri: selectedImageUrl }}
                  style={styles.fullScreenImage}
                  resizeMode="contain"
                />
              )}
            </View>
          </Modal>

          {/* Content */}
          <View style={styles.content}>
            <ScrollView
              style={styles.body}
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Top of the workout list */}
              <View style={styles.TextView}>
                <Text style={styles.cardTitle}>Expert workout</Text>
                <View style={styles.btn}>
                  <Text style={styles.exercise}>18 workouts</Text>
                </View>
              </View>

              {/* Workout list */}
              <View style={styles.lontrima}>
                {workouts.map((workout, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.lontrimaItems}
                    onPress={() => toggleCheck(index)}
                  >
                    <TouchableOpacity
                      onPress={() => handleImagePress(workout.imageUrl)}
                    >
                      <Image
                        source={{ uri: workout.imageUrl }}
                        style={styles.imag}
                      />
                    </TouchableOpacity>
                    <View style={styles.ViewItems}>
                      <Text style={styles.Title}>{workout.title}</Text>
                      <View style={styles.Viewsets}>
                        <Text style={styles.sets}>
                          {workout.setts
                            ? `${workout.setts} setts`
                            : "No set info"}
                        </Text>
                        <Text style={styles.sets}>
                          {workout.repiteCount
                            ? `${workout.repiteCount} repets`
                            : "No set info"}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.BoxCheck}>
                      <Checkbox
                        status={checkedItems[index] ? "checked" : "unchecked"}
                        color="#fff"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  body: {
    flex: 1,
  },
  btn: {
    backgroundColor: "#4F75FF",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  backgroundImage: {
    width: "100%",
    justifyContent: "flex-end",
    height: "50%",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  exercise: {
    color: "#fff",
    fontSize: 16,
  },
  icon: {
    padding: 10,
    backgroundColor: "#181920",
    borderRadius: 10,
    width: 45,
    height: 45,
    marginLeft: 25,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#181920",
    height: "60%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  Topcontent: {
    height: "40%",
    paddingTop: 45,
  },
  TextView: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  lontrima: {
    justifyContent: "center",
    alignItems: "center",
  },
  lontrimaItems: {
    backgroundColor: "#222831",
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 10,
  },
  imag: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  ViewItems: {
    padding: 5,
    justifyContent: "center",
    width: "60%",
  },
  Viewsets: {
    padding: 5,
    flexDirection: "row",
  },
  Title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  sets: {
    color: "gray",
    fontSize: 14,
    marginHorizontal: 3,
  },
  BoxCheck: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: "90%",
    height: "80%",
    borderRadius: 10,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});
