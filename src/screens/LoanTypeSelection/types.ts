export interface LoanTypeAccent {
  bg: string;
  text: string;
  border: string;
}

export interface LoanTypeOption {
  id: string;
  code: string;
  name: string;
  icon: string;
  amountRange: string;
  rateTenure?: string;
  badgeIcon?: string;
  badgeText?: string;
  accent: LoanTypeAccent;
}
