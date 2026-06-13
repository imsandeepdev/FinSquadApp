import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { getStyles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppColor, responsiveSize } from '../../res';
import { useTheme } from '../../utils/provider/themeProvider';


interface HeaderProps {
  title: string;
  leftIcon?: any;
  leftIconSize?: number;
  leftIconColor?: string;
  onPress?: () => void;
}

const AppHeader: React.FC<HeaderProps> = ({
  title,
  leftIcon = "arrow-back",
  onPress,
  leftIconColor = AppColor.appLightColor,
  leftIconSize = responsiveSize(20),
}) => {
  const { theme: { themeColor } } = useTheme();
  const Styles = getStyles(themeColor);
  return (
    <View style={Styles.container}>
      {leftIcon &&
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          Styles.leftButton,
          { opacity: pressed ? 0.5 : 1 },
        ]}
      >
        <Ionicons 
          name={leftIcon} 
          size={leftIconSize} 
          color={leftIconColor} 
        />
      </Pressable>}

      <View style={[Styles.titleContainer]}>
        <Text style={Styles.titleText} numberOfLines={1}>{title}</Text>
      </View>
    </View>
  );
};

export default AppHeader;
