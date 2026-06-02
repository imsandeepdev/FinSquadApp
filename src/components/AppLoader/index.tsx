import * as React from 'react';
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {AppButton} from '../AppButton';
import { getStyles } from './styles';
import {AppColor} from '../../res';
import { useTheme } from '../../utils/provider/themeProvider';

interface LoaderType {
  visible?: boolean;
  onRequestClose?: () => void;
  heading?: string;
  headingViewStyle?: ViewStyle;
  topTitle?: string;
  topTitleStyle?: TextStyle;
  title?: string;
  titleStyle?: TextStyle;
  activityIndicator?: boolean;
  loaderColor?: string;
  buttonOnPress?: () => void;
}

const AppLoader = ({
  visible,
  onRequestClose,
  heading,
  headingViewStyle,
  topTitle,
  topTitleStyle,
  title,
  titleStyle,
  activityIndicator,
  loaderColor = AppColor.appColor,
  buttonOnPress,
}: LoaderType) => {
   const { theme: { themeColor } } = useTheme();
    const Styles = getStyles(themeColor);
  return (
    <Modal visible={visible} onRequestClose={onRequestClose} transparent={true}>
      <View style={Styles.mainView}>
        <View style={Styles.modalView}>
          {heading && (
            <View style={[Styles.headingView, headingViewStyle]}>
              <Text style={Styles.headingText}>{heading}</Text>
            </View>
          )}
          <View style={Styles.bodyMainView}>
            {topTitle && (
              <Text style={[Styles.topTitleStyle, topTitleStyle]}>
                {topTitle}
              </Text>
            )}
            <View style={Styles.alartView}>
              {title && (
                <Text style={[Styles.otpTitle, titleStyle]}>{title}</Text>
              )}
              {activityIndicator && (
                <View>
                  <ActivityIndicator size="large" color={loaderColor} />
                </View>
              )}
            </View>

            {buttonOnPress && (
              <View>
                <AppButton onPress={buttonOnPress} title={'OK'} />
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {AppLoader};
