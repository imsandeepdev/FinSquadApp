import React, { useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, Modal, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { AppHeader, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { ApprovalCase, ApprovalStatus, PENDING_APPROVALS } from "./const";
import GRTApproval from "../CustomerOnBoard/GRTApproval";
import FIApproval from "../CustomerOnBoard/FIApproval";

type StatusFilter = ApprovalStatus | "All";

const FILTERS: StatusFilter[] = ["Pending", "Approved", "Rejected", "All"];

const statusOf = (item: ApprovalCase): ApprovalStatus => {
  const raw = item.type === "GRT" ? item.caseData.grtApprovalStatus : item.caseData.fiApprovalStatus;
  return (raw as ApprovalStatus) || "Pending";
};

const ApprovalQueueScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const [queue, setQueue] = useState<ApprovalCase[]>(PENDING_APPROVALS);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Pending");
  const [selectedCase, setSelectedCase] = useState<ApprovalCase | null>(null);

  const counts = useMemo(() => {
    const statuses = queue.map(statusOf);
    return {
      Pending: statuses.filter(s => s === "Pending").length,
      Approved: statuses.filter(s => s === "Approved").length,
      Rejected: statuses.filter(s => s === "Rejected").length,
      All: queue.length,
    };
  }, [queue]);

  const filteredQueue = useMemo(() => {
    if (statusFilter === "All") return queue;
    return queue.filter(item => statusOf(item) === statusFilter);
  }, [queue, statusFilter]);

  const statusColor = (status: ApprovalStatus) =>
    status === "Approved"
      ? themeColor.successColor
      : status === "Rejected"
      ? themeColor.errorColor
      : themeColor.infoColor;

  const typeMeta = (type: ApprovalCase["type"]) =>
    type === "GRT"
      ? { icon: "people-outline", color: "#7C3AED", label: "GRT" }
      : { icon: "home-outline", color: "#2563EB", label: "FI Verification" };

  const handleUpdateCaseField = (key: string, value: string) => {
    if (!selectedCase) return;

    const updatedCaseData = { ...selectedCase.caseData, [key]: value };
    setQueue(prev =>
      prev.map(item => (item.id === selectedCase.id ? { ...item, caseData: updatedCaseData } : item))
    );
    setSelectedCase(prev => (prev ? { ...prev, caseData: updatedCaseData } : prev));

    if (key === "grtApprovalStatus" || key === "fiApprovalStatus") {
      const label = key === "grtApprovalStatus" ? "GRT" : "FI verification";
      Alert.alert(
        `${label} ${value}`,
        `This case has been ${value.toLowerCase()} and moved out of your pending queue.`,
        [{ text: "OK", onPress: () => setSelectedCase(null) }]
      );
    }
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Approval Queue"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.headerRow}>
          <Text style={styles.screenSubtitle}>
            Pending GRT & FI verification approvals awaiting your review
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{counts.Pending}</Text>
            <Text style={styles.summaryLabel}>Pending</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{counts.Approved}</Text>
            <Text style={styles.summaryLabel}>Approved</Text>
          </View>
          <View style={[styles.summaryCard, styles.summaryCardLast]}>
            <Text style={styles.summaryValue}>{counts.Rejected}</Text>
            <Text style={styles.summaryLabel}>Rejected</Text>
          </View>
        </View>

        <View style={styles.filterRow}>
          {FILTERS.map(filter => {
            const active = filter === statusFilter;
            return (
              <Pressable
                key={filter}
                style={[styles.filterChip, active && styles.filterChipActive]}
                onPress={() => setStatusFilter(filter)}
              >
                <Text style={[styles.filterChipText, active && styles.filterChipTextActive]}>
                  {filter} ({counts[filter]})
                </Text>
              </Pressable>
            );
          })}
        </View>

        {filteredQueue.length ? (
          filteredQueue.map(item => {
            const status = statusOf(item);
            const meta = typeMeta(item.type);
            return (
              <Pressable
                key={item.id}
                style={styles.caseCard}
                onPress={() => setSelectedCase(item)}
              >
                <View style={[styles.caseIconWrap, { backgroundColor: meta.color + "20" }]}>
                  <Ionicons name={meta.icon} size={18} color={meta.color} />
                </View>

                <View style={styles.caseTextWrap}>
                  <View style={styles.caseTitleRow}>
                    <Text style={styles.caseName} numberOfLines={1}>
                      {item.customerName}
                    </Text>

                    <View style={styles.caseTypeBadge}>
                      <Text style={styles.caseTypeBadgeText}>{meta.label}</Text>
                    </View>
                  </View>

                  <Text style={styles.caseSubtitle} numberOfLines={1}>
                    {item.customerCode} · {item.village}
                  </Text>

                  <View style={styles.caseMetaRow}>
                    <Text style={styles.caseMetaText} numberOfLines={1}>
                      {item.submittedBy} · {item.submittedDate}
                    </Text>

                    <View style={[styles.statusBadge, { backgroundColor: statusColor(status) + "20" }]}>
                      <Text style={[styles.statusBadgeText, { color: statusColor(status) }]}>
                        {status}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })
        ) : (
          <View style={styles.emptyWrap}>
            <Ionicons name="checkmark-done-circle-outline" size={32} color={themeColor.placeHolder} />
            <Text style={styles.emptyTitle}>No cases here</Text>
            <Text style={styles.emptySubtitle}>Nothing matches this filter right now.</Text>
          </View>
        )}

      </ScrollView>

      <Modal
        visible={!!selectedCase}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedCase(null)}
      >
        <Pressable style={styles.backdrop} onPress={() => setSelectedCase(null)} />

        <View style={styles.sheet}>
          <View style={styles.grabber} />

          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>
              {selectedCase ? typeMeta(selectedCase.type).label : ""} Case
            </Text>
            <Pressable onPress={() => setSelectedCase(null)} hitSlop={10}>
              <Ionicons name="close" size={22} color={themeColor.primaryText} />
            </Pressable>
          </View>

          {!!selectedCase && (
            <View style={styles.modalMetaRow}>
              <Text style={styles.modalMetaText}>
                {selectedCase.customerName} · {selectedCase.customerCode} · {selectedCase.village}
              </Text>
              <Text style={styles.modalMetaText}>
                Submitted by {selectedCase.submittedBy} on {selectedCase.submittedDate}
              </Text>
            </View>
          )}

          <ScrollView showsVerticalScrollIndicator={false}>
            {selectedCase?.type === "GRT" && (
              <GRTApproval data={selectedCase.caseData} updateData={handleUpdateCaseField} />
            )}
            {selectedCase?.type === "FI" && (
              <FIApproval data={selectedCase.caseData} updateData={handleUpdateCaseField} />
            )}
          </ScrollView>
        </View>
      </Modal>
    </StoryScreen>
  );
};

export default ApprovalQueueScreen;
