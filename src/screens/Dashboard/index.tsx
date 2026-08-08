import React from 'react';
import {
  ScrollView,
  View,
  Alert,
} from 'react-native';
import { getStyles } from './styles';
import { useTheme } from '../../utils/provider/themeProvider';
import { StoryScreen } from '../../components';
import HeaderSection from './HeroSection';
import StatsSection from './StateSection';
import QuickActions from './QuickAction';
import SmartTaskCard from './SmartTaskCard';
import AISectionCard from './AISectionCard';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  

  return (
    <StoryScreen>
    <ScrollView 
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}>
      <HeaderSection/>

      <StatsSection/>

      <View style={styles.aiSectionWrapper}>
        <AISectionCard/>
      </View>

      <View style={styles.quickActionsWrapper}>

      <QuickActions
      onPress={(item:any)=>{
        if (!item?.navigate) {
          Alert.alert(item?.title || "Coming soon", "This feature will be available soon.");
          return;
        }
        navigation.navigate(item.navigate);
      }}
      />
      </View>
      <SmartTaskCard/>

    </ScrollView>
    </StoryScreen>

  );
};

export default Dashboard;

