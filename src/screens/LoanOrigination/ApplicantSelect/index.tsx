import React, { useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { customers } from "../../COBList/const";
import { centres } from "../../CentreManagement/const";
import { Customer } from "../../COBList/types";
import type { LoanOriginationData } from "..";

interface Props {
  data: LoanOriginationData;
  updateData: (key: string, value: string) => void;
}

const ApplicantSelect: React.FC<Props> = ({ data, updateData }) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [search, setSearch] = useState("");

  const eligibleCustomers = useMemo(
    () =>
      customers.filter(
        c =>
          c.status === "ACTIVE" &&
          (c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.code.toLowerCase().includes(search.toLowerCase()) ||
            c.village.toLowerCase().includes(search.toLowerCase())),
      ),
    [search],
  );

  const centreForCode = (centreCode?: string) =>
    centres.find(c => c.code === centreCode);

  const onSelect = (item: Customer) => {
    const centre = centreForCode(item.centreCode);
    updateData("customerId", item.id);
    updateData("customerName", item.name);
    updateData("village", item.village);
    updateData("centreCode", item.centreCode || "");
    updateData("centreName", centre?.name || "Unassigned");
    updateData("monthlyIncome", String(item.monthlyIncome ?? ""));
    updateData("existingMonthlyEMI", String(item.existingMonthlyEMI ?? ""));
  };

  const renderItem = ({ item }: { item: Customer }) => {
    const centre = centreForCode(item.centreCode);
    const selected = data.customerId === item.id;

    return (
      <Pressable
        onPress={() => onSelect(item)}
        style={[styles.card, selected && styles.cardSelected]}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.meta}>
            {item.code} • {item.village}
          </Text>
          <Text style={styles.centre}>
            {centre ? centre.name : "No centre linked"}
          </Text>
        </View>

        {selected && (
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={themeColor.successColor}
          />
        )}
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>APPLICANT</Text>
      <Text style={styles.sectionSubtitle}>
        Pick a KYC-verified, centre-linked customer to start this proposal.
      </Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color={themeColor.secAppText} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search name, code or village..."
          placeholderTextColor={themeColor.placeHolder}
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={eligibleCustomers}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No matching customers found.</Text>
        }
      />
    </View>
  );
};

export default ApplicantSelect;
