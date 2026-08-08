export interface Customer {
  id: string;

  name: string;

  code: string;

  mobile: string;

  village: string;

  status: "ACTIVE" | "INACTIVE";

  mode: "ONLINE" | "OFFLINE";

  /** Centre this customer/JLG member belongs to - links to CentreManagement's Centre.code */
  centreCode?: string;

  /** Self-declared monthly household income, used by Income Assessment */
  monthlyIncome?: number;

  /** Existing EMI obligations (other lenders), used by Income Assessment */
  existingMonthlyEMI?: number;
}