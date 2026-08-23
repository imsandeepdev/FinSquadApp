// Half-hour slots, 8:00 AM to 8:00 PM — used by the time AppDropdown on
// the create-meeting sheet since there's no dedicated time-picker
// component yet.
const buildTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 8; hour <= 20; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 20 && minute === 30) break;
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const displayMinute = String(minute).padStart(2, "0");
      slots.push(`${displayHour}:${displayMinute} ${period}`);
    }
  }
  return slots;
};

export const TIME_SLOTS: string[] = buildTimeSlots();
