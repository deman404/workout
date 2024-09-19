import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";

interface InputWithCheckboxProps {
  containerStyle?: ViewStyle;
  label: string;
  isChecked: boolean;
  onCheckChange: () => void;
}

const InputWithCheckbox: React.FC<InputWithCheckboxProps> = ({
  containerStyle,
  label,
  isChecked,
  onCheckChange,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Corrected the style merging here */}
      <TouchableOpacity
        style={[styles.checkboxContainer, isChecked && styles.viewChecked]}
        onPress={onCheckChange}
      >
        <Text style={styles.labelText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical:15,
  },
  checkboxContainer: {
    width: 250,
    height: 50,
    justifyContent:'center',
    alignItems: "center",
    borderColor: "#6362ed",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
  },
  checked: {
    backgroundColor: "#181920",
  },
  viewChecked: {
    backgroundColor: "#6363ed",
  },
  labelText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default InputWithCheckbox;
