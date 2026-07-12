export interface Customer {
  id: string;

  name: string;

  code: string;

  mobile: string;

  village: string;

  status: "ACTIVE" | "INACTIVE";

  mode: "ONLINE" | "OFFLINE";
}