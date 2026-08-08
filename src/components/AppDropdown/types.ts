export interface AppDropdownOption {
  label: string;
  value: string;
}

export type AppDropdownOptionInput = string | AppDropdownOption;

export interface AppDropdownProps {
  title?: string;
  placeholder?: string;
  /** Currently selected option's value. */
  value?: string;
  options: AppDropdownOptionInput[];
  onSelect: (value: string) => void;
  leftIcon?: string;
  isError?: boolean;
  errorMessage?: string;
  /** Shows a search box inside the sheet for long option lists. Defaults to off. */
  searchable?: boolean;
  sheetTitle?: string;
  disabled?: boolean;
}
