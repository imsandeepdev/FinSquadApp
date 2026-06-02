import * as React from 'react';
import {View, Pressable, Text, ViewStyle, TextStyle} from 'react-native';
import {getStyles} from './styles';
import { useTheme } from '../../utils/provider/themeProvider';

interface AppButtonType {
  containerStyle?: any;
  pressableStyle?: ViewStyle;
  disabled?: boolean;
  onPress?: () => void;
  title?: string;
  titleTextStyle?: TextStyle;
}

const AppButton = ({
  containerStyle,
  pressableStyle,
  disabled,
  onPress,
  title,
  titleTextStyle,
}: AppButtonType) => {
  const { theme: { themeColor } } = useTheme();
  const Styles = getStyles(themeColor);
  return (
    <View style={[Styles.mainContainer, containerStyle]}>
      <Pressable
        disabled={disabled}
        onPress={onPress}
        style={({pressed}) => [
          Styles.pressableContainer,
          pressableStyle,
          pressed && Styles.pressedStyle,
        ]}>
        <Text style={[Styles.titleText, titleTextStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
};
export {AppButton};
