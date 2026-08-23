import React, { useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, Alert, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppHeader, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { Meeting, useMeetings } from "../../utils/provider/meetingProvider";
import CreateMeetingSheet from "./CreateMeetingSheet";
import { getStyles } from "./styles";

const MONTH_ABBR = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// "DD/MM/YYYY" + "h:mm AM/PM" -> Date, for sorting upcoming meetings first.
const parseMeetingDateTime = (meeting: Meeting): Date => {
  const [day, month, year] = meeting.date.split("/").map(Number);
  const timeMatch = /^(\d{1,2}):(\d{2})\s?(AM|PM)$/i.exec(meeting.time.trim());

  let hours = 0;
  let minutes = 0;
  if (timeMatch) {
    hours = Number(timeMatch[1]) % 12;
    minutes = Number(timeMatch[2]);
    if (timeMatch[3].toUpperCase() === "PM") hours += 12;
  }

  return new Date(year || 1970, (month || 1) - 1, day || 1, hours, minutes);
};

const MeetingScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const { meetings, addMeeting, removeMeeting } = useMeetings();

  const [createSheetVisible, setCreateSheetVisible] = useState(false);

  const sortedMeetings = useMemo(
    () =>
      [...meetings].sort(
        (a, b) => parseMeetingDateTime(a).getTime() - parseMeetingDateTime(b).getTime()
      ),
    [meetings]
  );

  const onCall = (meeting: Meeting) => {
    Linking.openURL(`tel:${meeting.mobile}`);
  };

  const onDelete = (meeting: Meeting) => {
    Alert.alert(
      "Remove reminder?",
      `This will remove your meeting with ${meeting.personName}.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => removeMeeting(meeting.id),
        },
      ]
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Meetings"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.headerRow}>
          <Text style={styles.screenSubtitle}>
            Schedule and track your client visit reminders
          </Text>
        </View>

        {sortedMeetings.length > 0 && (
          <Text style={styles.sectionTitle}>
            Upcoming ({sortedMeetings.length})
          </Text>
        )}

        {sortedMeetings.length ? (
          sortedMeetings.map((meeting) => {
            const meetingDate = parseMeetingDateTime(meeting);
            const day = meeting.date.split("/")[0];
            const month = MONTH_ABBR[meetingDate.getMonth()] || "";

            return (
              <View style={styles.meetingCard} key={meeting.id}>
                <View style={styles.dateBadge}>
                  <Text style={styles.dateBadgeDay}>{day}</Text>
                  <Text style={styles.dateBadgeMonth}>{month}</Text>
                </View>

                <View style={styles.meetingInfo}>
                  <View style={styles.meetingTopRow}>
                    <Text style={styles.meetingName} numberOfLines={1}>
                      {meeting.personName}
                    </Text>

                    <View style={styles.meetingTimeBadge}>
                      <Ionicons name="time-outline" size={11} color={themeColor.appColor} />
                      <Text style={styles.meetingTimeBadgeText}>{meeting.time}</Text>
                    </View>
                  </View>

                  <View style={styles.meetingRow}>
                    <Ionicons name="call-outline" size={13} color={themeColor.placeHolder} />
                    <Text style={styles.meetingRowText}>{meeting.mobile}</Text>
                  </View>

                  {!!meeting.purpose && (
                    <View style={styles.meetingRow}>
                      <Ionicons name="chatbubble-ellipses-outline" size={13} color={themeColor.placeHolder} />
                      <Text style={styles.meetingRowText} numberOfLines={1}>
                        {meeting.purpose}
                      </Text>
                    </View>
                  )}

                  {!!meeting.notes && (
                    <View style={styles.meetingRow}>
                      <Ionicons name="document-text-outline" size={13} color={themeColor.placeHolder} />
                      <Text style={styles.meetingRowText} numberOfLines={2}>
                        {meeting.notes}
                      </Text>
                    </View>
                  )}

                  <View style={styles.meetingFooterRow}>
                    <Pressable
                      style={styles.footerAction}
                      onPress={() => onCall(meeting)}
                    >
                      <Ionicons name="call" size={13} color={themeColor.successColor} />
                      <Text style={[styles.footerActionText, { color: themeColor.successColor }]}>
                        Call
                      </Text>
                    </Pressable>

                    <Pressable
                      style={styles.footerAction}
                      onPress={() => onDelete(meeting)}
                    >
                      <Ionicons name="trash-outline" size={13} color={themeColor.errorColor} />
                      <Text style={[styles.footerActionText, { color: themeColor.errorColor }]}>
                        Remove
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            );
          })
        ) : (
          <View style={styles.emptyWrap}>
            <Ionicons name="calendar-outline" size={36} color={themeColor.placeHolder} />
            <Text style={styles.emptyTitle}>No meetings scheduled</Text>
            <Text style={styles.emptySubtitle}>
              Tap "Schedule Meeting" to add a reminder for your next client visit.
            </Text>
          </View>
        )}

      </ScrollView>

      <Pressable
        style={styles.fab}
        onPress={() => setCreateSheetVisible(true)}
      >
        <Ionicons name="add" size={18} color={themeColor.white} />
        <Text style={styles.fabText}>Schedule Meeting</Text>
      </Pressable>

      <CreateMeetingSheet
        visible={createSheetVisible}
        onClose={() => setCreateSheetVisible(false)}
        onCreate={addMeeting}
      />
    </StoryScreen>
  );
};

export default MeetingScreen;
