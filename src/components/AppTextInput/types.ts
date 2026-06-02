import { KeyboardTypeOptions } from "react-native";

export interface AppTextInputProps {
  title?: string;
  placeholder?: string;
  leftIcon?: string;
  leftIconSize?: number;
  leftIconColor?: string;
  leftIconProps?: any;
  rightIcon?: string;
  rightIconSize?: number;
  rightIconColor?: string;
  rightIconProps?: any;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  secureTextEntry?: boolean;

  // Events
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;

  // Right side button
  buttonText?: string;
  rightOnPress?: () => void;
  restInputTextProps?: any;
  isError?: boolean;
  errorMessage?: string;
  showTitle?: boolean;
  titleMessage?: string;
  returnKeyType?: any
};

