import React, { useCallback, useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  RefreshControl,
} from "react-native";
import { AppColor } from "../../res";
import COBTopBar, { TabType } from "./Component/COBTopBar";
import { customers } from "./const";
import { Customer } from "./types";
import CustomerCard from "./Component/CustomerCard";
import { AppHeader, StoryScreen } from "../../components";
import FloatingButton from "./Component/FloatingButton";
import BottomSummary from "./Component/BottomSummary";
import { ScrollView } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
import { NAVIGATE_NAME } from "../../utils/const";


const COBListScreen = () => {
const navigation = useNavigation<any>();
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] =
    useState<TabType>("OFFLINE");

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const filteredCustomers = useMemo(() => {
    return customers.filter((item) => {
      const tabMatch = item.mode === selectedTab;

      const searchMatch =
        item.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.mobile.includes(search) ||
        item.code
          .toLowerCase()
          .includes(search.toLowerCase());

      return tabMatch && searchMatch;
    });
  }, [search, selectedTab]);

  const summary = useMemo(() => {
    return {
      total: customers.length,

      active: customers.filter(
        item => item.status === "ACTIVE",
      ).length,

      inactive: customers.filter(
        item => item.status === "INACTIVE",
      ).length,

      offline: customers.filter(
        item => item.mode === "OFFLINE",
      ).length,

      online: customers.filter(
        item => item.mode === "ONLINE",
      ).length,
    };
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Customer }) => (
      <CustomerCard
        item={item}
        onPress={() => {
          console.log(item.name);
        }}
        onMenuPress={() => {
          console.log("Menu");
        }}
      />
    ),
    [],
  );

  const EmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>
        No Customers Found
      </Text>

      <Text style={styles.emptySubTitle}>
        Try searching with another keyword.
      </Text>
    </View>
  );

  return (
     <StoryScreen>
        <ScrollView 
        contentContainerStyle={{flexGrow:1}}
        showsVerticalScrollIndicator={false}>
      <AppHeader
        title={"COB List"}
        onPress={()=>{navigation.goBack()}}
      />

      <COBTopBar
        selectedTab={selectedTab}
        offlineCount={summary.offline}
        onlineCount={summary.online}
        onChange={setSelectedTab}
      />

      <FlatList
        data={filteredCustomers}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{
          paddingBottom: 130,
          flexGrow: 1,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        removeClippedSubviews
      />

     
    </ScrollView>
     <FloatingButton
        onPress={() => {
          navigation.navigate(NAVIGATE_NAME.CUSTOMER_ONBOARDING_SCREEN)
        }}
      />
      <BottomSummary
        total={summary.total}
        active={summary.active}
        inactive={summary.inactive}
      />
    </StoryScreen>
  );
};

export default COBListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: AppColor.primaryText,
  },

  emptySubTitle: {
    marginTop: 8,
    fontSize: 14,
    color: AppColor.secAppText,
  },
});