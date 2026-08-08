import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type UserRole = "FIELD_OFFICER" | "CREDIT_OFFICER" | "BRANCH_MANAGER";

export const ROLE_LABELS: Record<UserRole, string> = {
  FIELD_OFFICER: "Field Officer",
  CREDIT_OFFICER: "Credit Officer",
  BRANCH_MANAGER: "Branch Manager",
};

interface RoleContextProps {
  role: UserRole | null;
  setRole: (role: UserRole) => void;
  isBranchManager: boolean;
  isFieldOfficer: boolean;
  isCreditOfficer: boolean;
}

const RoleContext = createContext<RoleContextProps | undefined>(undefined);

interface RoleProviderProps {
  children: ReactNode;
}

export const RoleProvider = ({ children }: RoleProviderProps) => {
  // Defaults to Field Officer so the rest of the app behaves sensibly even
  // before login picks a role explicitly (e.g. hot reload during dev).
  const [role, setRoleState] = useState<UserRole | null>("FIELD_OFFICER");

  const setRole = useCallback((next: UserRole) => {
    setRoleState(next);
  }, []);

  const value = useMemo(
    () => ({
      role,
      setRole,
      isBranchManager: role === "BRANCH_MANAGER",
      isFieldOfficer: role === "FIELD_OFFICER",
      isCreditOfficer: role === "CREDIT_OFFICER",
    }),
    [role, setRole]
  );

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = (): RoleContextProps => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within RoleProvider");
  }
  return context;
};
