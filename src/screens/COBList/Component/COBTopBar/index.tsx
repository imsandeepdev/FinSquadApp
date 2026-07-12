import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AppColor } from "../../../../res";

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
              color: selected ? AppColor.white : AppColor.primaryText,
            },
          ]}>
          {title} ({count})
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderTab("OFFLINE", offlineCount, AppColor.appColor)}
      {renderTab("ONLINE", onlineCount, AppColor.appColor)}
    </View>
  );
};

export default React.memo(COBTabBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 16,
    backgroundColor: AppColor.appLightColor,
    borderRadius: 12,
    padding: 4,
    borderWidth:0.5,
    borderColor: AppColor.appColor
  },

  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  text: {
    fontWeight: "600",
    fontSize: 14,
  },
});