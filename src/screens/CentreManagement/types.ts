export type CentreStatus = "ACTIVE" | "FORMING";

export interface Centre {
  id: string;
  code: string;
  name: string;
  village: string;
  meetingDay:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  memberCount: number;
  targetMemberCount: number;
  status: CentreStatus;
  /** 0-100, mock repayment health used by AI Risk Review */
  repaymentHealthScore: number;
}
