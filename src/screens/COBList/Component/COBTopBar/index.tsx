import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../../../utils/provider/themeProvider";
import getStyles from "./styles";

export type TabType = "OFFLINE" | "ONLINE";

interface Props {
  selectedTab: TabType;
  offlineCount: number;
  onlineCount: number;
  onChange: (tab: TabType) => void;
}

const COBTabBar = ({
  selectedTab,
  offlineCount,
  onlineCount,
  onChange,
}: Props) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const renderTab = (
    title: TabType,
    count: number,
    color: string
  ) => {
    const selected = selectedTab === title;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.tab,
          selected && {
            backgroundColor: color,
          },
        ]}
        onPress={() => onChange(title)}>
        <Text
          style={[
            styles.text,
            {
              color: selected ? themeColor.white : themeColor.primaryText,
            },
          ]}>
          {title} ({count})
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderTab("OFFLINE", offlineCount, themeColor.appColor)}
      {renderTab("ONLINE", onlineCount, themeColor.appColor)}
    </View>
  );
};

export default React.memo(COBTabBar);