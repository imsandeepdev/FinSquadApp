import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStyles } from './styles';
import { useTheme } from '../../utils/provider/themeProvider';
import { StoryScreen } from '../../components';
import HeroSection from './HeroSection';
import HeaderSection from './HeroSection';
import PortfolioCard from './PortfolioCard';
import StatsSection from './StateSection';
import AIInsightCard from './AllnsightCard';
import QuickActions from './QuickAction';
import SmartTaskCard from './SmartTaskCard';
import PerformanceSection from './PerformanceSection';
import AISectionCard from './AISectionCard';
import {useNavigation} from '@react-navigation/native';


const dashboardData = [
  {
    title: 'Priority Follow-up',
    count: '10',
    color1: '#5CA9D6',
    color2: '#1684D8',
    footer: 'Members need To Follow-up',
  },
  {
    title: "Today's Promises",
    count: '10',
    color1: '#66D17A',
    color2: '#32B44A',
    footer: 'Pending Collections',
  },
  {
    title: 'Stage 2,3 Customers',
    count: '10',
    color1: '#F2B04D',
    color2: '#E49421',
    footer: 'Stage 2,3 Members Conclusion',
  },
  {
    title: 'NPA Customer',
    count: '10',
    color1: '#6788DA',
    color2: '#355EBF',
    footer: '> 90 days but write off Members',
  },
  {
    title: 'Atilambit Customer',
    count: '10',
    color1: '#F06A99',
    color2: '#D84478',
    footer: 'Write Off Members',
  },
  {
    title: 'Suggestions Follow-up',
    count: '10',
    color1: '#68C0D5',
    color2: '#3CA4BD',
    footer: 'Suggestions Follow-up Members',
  },
];

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
      
      <View style={{paddingHorizontal:16, paddingBottom:5, paddingTop:10}}>
        <PerformanceSection/>
      </View>

      <View style={{paddingHorizontal:16, paddingVertical:5}}>
        <AISectionCard/>
      </View>
      {/* <PortfolioCard/> */}
      {/* <StatsSection/>
      <AIInsightCard/> */}
      <View style={{paddingHorizontal:16, paddingVertical:10}}>

      <QuickActions
      onPress={()=>{
        navigation.navigate('CustomerOnboardingScreen')
      }}
      />
      </View>
      <SmartTaskCard/>

    </ScrollView>
    </StoryScreen>

  );
};

export default Dashboard;

