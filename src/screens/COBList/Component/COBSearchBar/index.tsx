import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../../utils/provider/themeProvider";
import getStyles from "./styles";

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
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons
          name="search"
          size={20}
          color={themeColor.secAppText}
        />

        <TextInput
          placeholder="Search customer..."
          placeholderTextColor={themeColor.placeHolder}
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
          color={themeColor.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);