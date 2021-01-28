import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Platform,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Icon from "../components/Icon";

export default function AppPicker({ icon = "email", ...otherProps }) {
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setPickerOpen(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={colors.medium}
              size={18}
            />
          )}
          <Text style={styles.input} {...otherProps} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={pickerOpen}>
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={() => setPickerOpen(false)}>
            <Text>Hello</Text>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  input: {
    paddingLeft: 14,
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
