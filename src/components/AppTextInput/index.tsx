import * as React from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AppTextInputProps } from './types';
import { useTheme } from '../../utils/provider/themeProvider';
import { getStyles } from './styles';


const AppTextInput = React.forwardRef<TextInput, AppTextInputProps>(
  ({
    title = '',
    placeholder = '',
    leftIcon,
    leftIconSize = 24,
    leftIconColor,
    leftIconProps,
    rightIcon,
    rightIconSize = 24,
    rightIconColor ,
    rightIconProps,
    maxLength,
    keyboardType = 'default',
    value,
    secureTextEntry,
    onChangeText,
    onFocus,
    onBlur,
    onSubmitEditing,
    buttonText,
    rightOnPress,
    restInputTextProps,
    isError = false,
    errorMessage = '',
    showTitle = false,
    titleMessage = '',
    returnKeyType,
    autoCapitalize,
    rightLoading = false,
  },
  ref) => {
    const { theme: { themeColor } } = useTheme();
    const Style = getStyles(themeColor);

    return (
      <View style={Style.topView}>

        {title ? (
          <Text style={[Style.headerTitle]}>
            {title}
          </Text>
        ) : null}

        {
        !showTitle ?
        <View style={[Style.mainView, { borderColor: isError ? themeColor.errorColor : themeColor.placeHolder }]}>
          <View style={[Style.bodyView, { borderColor: isError ? themeColor.errorColor : themeColor.placeHolder }]}>

            {/* LEFT ICON */}
            {leftIcon ? (
              <View style={Style.leftIconView} {...leftIconProps}>
                <Ionicons
                  name={leftIcon}
                  size={leftIconSize}
                  color={leftIconColor || themeColor.placeHolder}
                />
              </View>
            ) : null}

            {/* TEXT INPUT */}
            <View style={Style.flexView}>
              <TextInput
                ref={ref}
                style={Style.textInput}
                placeholder={placeholder}
                placeholderTextColor={themeColor.placeHolder}
                keyboardType={keyboardType}
                maxLength={maxLength}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                autoCapitalize={autoCapitalize}
                {...restInputTextProps}
              />
            </View>

            {/* RIGHT BUTTON */}
            {rightLoading ? (
              <View style={Style.rightButton}>
                <ActivityIndicator size="small" color={themeColor.appColor} />
              </View>
            ) : rightOnPress ? (
              <Pressable
                onPress={rightOnPress}
                style={({ pressed }) => [
                  Style.rightButton,
                  { opacity: pressed ? 0.5 : 1 },
                ]}
              >
                {rightIcon ? (
                  <Ionicons
                    name={rightIcon}
                    size={rightIconSize}
                    color={rightIconColor || themeColor.placeHolder}
                    {...rightIconProps}
                  />
                ) : null}
              </Pressable>
            ) : null}

          </View>
        </View>
        :
        <View style={[Style.showTitle_MainView]}>
          <View style={[Style.showTitle_bodyView]}>
           
         

            {/* TEXT INPUT */}
            <View style={Style.showTitle_flexView}>
              <Text style={Style.showTitleText}>
                {titleMessage}
              </Text>
            </View>

          </View>
        </View>
        }
        {isError&&
        <View>
          <Text style={Style.errorText} numberOfLines={1}>{errorMessage}</Text>
        </View>}
      </View>
    );
  }
);

export default AppTextInput;
