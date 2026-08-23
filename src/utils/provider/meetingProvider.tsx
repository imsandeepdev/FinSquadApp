import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  ReactNode,
} from "react";

export interface Meeting {
  id: string;
  personName: string;
  mobile: string;
  purpose: string;
  /** "DD/MM/YYYY", matches AppDatePicker's convention across the app. */
  date: string;
  /** e.g. "10:30 AM" */
  time: string;
  notes: string;
  createdAt: number;
}

export type NewMeetingInput = Omit<Meeting, "id" | "createdAt">;

interface MeetingContextProps {
  meetings: Meeting[];
  addMeeting: (input: NewMeetingInput) => void;
  removeMeeting: (id: string) => void;
}

const MeetingContext = createContext<MeetingContextProps | undefined>(undefined);

interface MeetingProviderProps {
  children: ReactNode;
}

// Reminder-purpose meeting list — in-memory only for now (no backend), so
// it lives here as app-wide state (rather than screen-local) so the list
// survives navigating away from and back to the Meetings screen.
export const MeetingProvider = ({ children }: MeetingProviderProps) => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  const addMeeting = useCallback((input: NewMeetingInput) => {
    const meeting: Meeting = {
      ...input,
      id: `mtg_${Date.now()}`,
      createdAt: Date.now(),
    };
    setMeetings(prev => [...prev, meeting]);
  }, []);

  const removeMeeting = useCallback((id: string) => {
    setMeetings(prev => prev.filter(item => item.id !== id));
  }, []);

  const value = useMemo(
    () => ({ meetings, addMeeting, removeMeeting }),
    [meetings, addMeeting, removeMeeting]
  );

  return (
    <MeetingContext.Provider value={value}>
      {children}
    </MeetingContext.Provider>
  );
};

export const useMeetings = (): MeetingContextProps => {
  const context = useContext(MeetingContext);
  if (!context) {
    throw new Error("useMeetings must be used within MeetingProvider");
  }
  return context;
};
