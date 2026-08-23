import React, { useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { AppTextInput, AppHeader, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { customers } from "../COBList/const";
import { Customer } from "../COBList/types";
import { centres } from "../CentreManagement/const";
import { Centre } from "../CentreManagement/types";
import CustomerCard from "../COBList/Component/CustomerCard";
import CustomerDetailModal from "./CustomerDetailModal";
import SummarySheet from "./SummarySheet";

type ViewMode = "customers" | "centres";

const ClientsScreen = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const [viewMode, setViewMode] = useState<ViewMode>("customers");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [centreFilter, setCentreFilter] = useState<string | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [summarySheetVisible, setSummarySheetVisible] = useState(false);

  const summary = useMemo(
    () => ({
      totalCustomers: customers.length,
      activeCustomers: customers.filter(item => item.status === "ACTIVE").length,
      totalCentres: centres.length,
    }),
    []
  );

  const filteredCustomers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return customers.filter(item => {
      const centreMatch = !centreFilter || item.centreCode === centreFilter;
      const searchMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.mobile.includes(query) ||
        item.village.toLowerCase().includes(query);
      return centreMatch && searchMatch;
    });
  }, [search, centreFilter]);

  const filteredCentres = useMemo(() => {
    const query = search.trim().toLowerCase();
    return centres.filter(item => {
      if (!query) return true;
      return (
        item.name.toLowerCase().includes(query) ||
        item.village.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query)
      );
    });
  }, [search]);

  const centreForCustomer = (customer: Customer): Centre | undefined =>
    centres.find(centre => centre.code === customer.centreCode);

  const filteredCentreLabel = centreFilter
    ? centres.find(centre => centre.code === centreFilter)?.name
    : null;

  const healthColor = (score: number) =>
    score >= 80 ? themeColor.successColor : score >= 60 ? themeColor.infoColor : themeColor.errorColor;

  const onCentrePress = (centre: Centre) => {
    setCentreFilter(centre.code);
    setViewMode("customers");
  };

  const onToggleSearch = () => {
    setSearchOpen(prev => {
      const next = !prev;
      if (!next) setSearch("");
      return next;
    });
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Clients"
        leftIcon={null}
        rightIcon={searchOpen ? "close-outline" : "search-outline"}
        onRightPress={onToggleSearch}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {searchOpen && (
          <View style={styles.searchWrap}>
            <AppTextInput
              placeholder={viewMode === "customers" ? "Search by name, code or mobile" : "Search centres by name or village"}
              value={search}
              onChangeText={setSearch}
              leftIcon="search-outline"
              restInputTextProps={{ autoFocus: true }}
            />
          </View>
        )}

        <View style={styles.headerRow}>
          <Text style={styles.screenSubtitle}>
            Your onboarded customers & centres
          </Text>
        </View>

        <View style={styles.viewToggleRow}>
          <Pressable
            style={[styles.viewToggleChip, viewMode === "customers" && styles.viewToggleChipActive]}
            onPress={() => setViewMode("customers")}
          >
            <Ionicons
              name="people-outline"
              size={15}
              color={viewMode === "customers" ? themeColor.appColor : themeColor.placeHolder}
            />
            <Text style={[styles.viewToggleChipText, viewMode === "customers" && styles.viewToggleChipTextActive]}>
              Customers
            </Text>
          </Pressable>

          <Pressable
            style={[styles.viewToggleChip, viewMode === "centres" && styles.viewToggleChipActive]}
            onPress={() => setViewMode("centres")}
          >
            <Ionicons
              name="business-outline"
              size={15}
              color={viewMode === "centres" ? themeColor.appColor : themeColor.placeHolder}
            />
            <Text style={[styles.viewToggleChipText, viewMode === "centres" && styles.viewToggleChipTextActive]}>
              Centres
            </Text>
          </Pressable>
        </View>

        {viewMode === "customers" && !!filteredCentreLabel && (
          <Pressable
            style={styles.viewToggleChip}
            onPress={() => setCentreFilter(null)}
          >
            <Ionicons name="funnel-outline" size={14} color={themeColor.appColor} />
            <Text style={[styles.viewToggleChipText, styles.viewToggleChipTextActive]}>
              {filteredCentreLabel} · Clear filter
            </Text>
          </Pressable>
        )}

        {viewMode === "customers" && (
          filteredCustomers.length ? (
            filteredCustomers.map(item => (
              <CustomerCard
                key={item.id}
                item={item}
                onPress={() => setSelectedCustomer(item)}
                onMenuPress={() => setSelectedCustomer(item)}
                style={styles.customerCardSpacing}
              />
            ))
          ) : (
            <View style={styles.emptyWrap}>
              <Ionicons name="people-outline" size={32} color={themeColor.placeHolder} />
              <Text style={styles.emptyTitle}>No clients found</Text>
              <Text style={styles.emptySubtitle}>Try a different name, code or centre.</Text>
            </View>
          )
        )}

        {viewMode === "centres" && (
          filteredCentres.length ? (
            filteredCentres.map(centre => (
              <Pressable
                key={centre.id}
                style={styles.centreCard}
                onPress={() => onCentrePress(centre)}
              >
                <View style={styles.centreHeaderRow}>
                  <View style={styles.centreNameWrap}>
                    <Text style={styles.centreName} numberOfLines={1}>
                      {centre.name}
                    </Text>
                    <View style={styles.centreVillageRow}>
                      <Ionicons name="location-outline" size={12} color={themeColor.placeHolder} />
                      <Text style={styles.centreVillageText}>{centre.village}</Text>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.centreStatusBadge,
                      { backgroundColor: (centre.status === "ACTIVE" ? themeColor.successColor : themeColor.infoColor) + "20" },
                    ]}
                  >
                    <Text
                      style={[
                        styles.centreStatusText,
                        { color: centre.status === "ACTIVE" ? themeColor.successColor : themeColor.infoColor },
                      ]}
                    >
                      {centre.status}
                    </Text>
                  </View>
                </View>

                <View style={styles.centreStatsRow}>
                  <Text style={styles.centreStatLabel}>Members</Text>
                  <Text style={styles.centreStatValue}>
                    {centre.memberCount}/{centre.targetMemberCount}
                  </Text>
                </View>

                <View style={styles.healthBarBg}>
                  <View
                    style={[
                      styles.healthBarFill,
                      {
                        width: `${centre.repaymentHealthScore}%`,
                        backgroundColor: healthColor(centre.repaymentHealthScore),
                      },
                    ]}
                  />
                </View>

                <View style={styles.centreMeetingRow}>
                  <Ionicons name="calendar-outline" size={13} color={themeColor.placeHolder} />
                  <Text style={styles.centreMeetingText}>
                    Meets every {centre.meetingDay} · Health {centre.repaymentHealthScore}/100
                  </Text>
                </View>
              </Pressable>
            ))
          ) : (
            <View style={styles.emptyWrap}>
              <Ionicons name="business-outline" size={32} color={themeColor.placeHolder} />
              <Text style={styles.emptyTitle}>No centres found</Text>
              <Text style={styles.emptySubtitle}>Try a different name or village.</Text>
            </View>
          )
        )}

      </ScrollView>

      <Pressable
        style={styles.summaryFab}
        onPress={() => setSummarySheetVisible(true)}
      >
        <Ionicons name="stats-chart" size={20} color={themeColor.white} />
      </Pressable>

      <CustomerDetailModal
        visible={!!selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        customer={selectedCustomer}
        centre={selectedCustomer ? centreForCustomer(selectedCustomer) : undefined}
      />

      <SummarySheet
        visible={summarySheetVisible}
        onClose={() => setSummarySheetVisible(false)}
        totalCustomers={summary.totalCustomers}
        activeCustomers={summary.activeCustomers}
        totalCentres={summary.totalCentres}
      />
    </StoryScreen>
  );
};

export default ClientsScreen;
