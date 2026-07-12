import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColor } from "../../../../res";

interface Props {
  value: string;
  onChange: (text: string) => void;
  onFilterPress?: () => void;
}

const SearchBar = ({
  value,
  onChange,
  onFilterPress,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons
          name="search"
          size={20}
          color={AppColor.secAppText}
        />

        <TextInput
          placeholder="Search customer..."
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChange}
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        style={styles.filterButton}
        onPress={onFilterPress}>
        <Ionicons
          name="options-outline"
          size={22}
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 10,
    alignItems: "center",
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
    elevation: 1,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: AppColor.primaryText,
  },

  filterButton: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 14,
    backgroundColor: AppColor.appColor,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
});