import * as React from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
} from 'react-native';

import { AppColor, responsiveSize } from '../../res';
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
    autoCapitalize
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
            {rightOnPress ? (
              <Pressable
                onPress={rightOnPress}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  paddingHorizontal: 6,
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
              
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
          <Text style={{
            marginTop: 4, 
            color:  AppColor.errorColor,
            fontSize: responsiveSize(12),
          }}numberOfLines={1}>{errorMessage}</Text>
        </View>}
      </View>
    );
  }
);

export default AppTextInput;
