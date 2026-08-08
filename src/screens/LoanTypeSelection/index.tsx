import React, { useMemo, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppHeader, AppTextInput, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { NAVIGATE_NAME } from "../../utils/const";
import { getStyles } from "./styles";
import { LOAN_TYPES } from "./const";
import { LoanTypeOption } from "./types";
import LoanTypeCard from "./Component/LoanTypeCard";

const LoanTypeSelectionScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [search, setSearch] = useState("");

  const filteredLoanTypes = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return LOAN_TYPES;

    return LOAN_TYPES.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query)
    );
  }, [search]);

  const onSelectLoanType = (item: LoanTypeOption) => {
    navigation.navigate(NAVIGATE_NAME.CUSTOMER_ONBOARDING_SCREEN, {
      loanTypeCode: item.code,
      loanTypeName: item.name,
      isMicrofinance: item.isMicrofinance,
    });
  };

  const EmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>
        No loan types found
      </Text>

      <Text style={styles.emptySubTitle}>
        Try searching with a different keyword.
      </Text>
    </View>
  );

  return (
    <StoryScreen>
      <AppHeader
        title="Select Loan Type"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.container}>

        <View style={styles.searchWrap}>
          <AppTextInput
            placeholder="Search..."
            leftIcon="search"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <FlatList
          data={filteredLoanTypes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={EmptyComponent}
          renderItem={({ item }) => (
            <LoanTypeCard
              item={item}
              onPress={() => onSelectLoanType(item)}
            />
          )}
        />

      </View>
    </StoryScreen>
  );
};

export default LoanTypeSelectionScreen;
