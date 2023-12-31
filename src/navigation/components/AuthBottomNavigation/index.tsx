import { Platform } from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import { Home } from '@/screens';

import { Box } from '@/components';

import { AuthStackParamList } from '../AuthStackNavigation/types';

const Tab = createBottomTabNavigator<AuthStackParamList>();

import useBottomTabStyles, { BlurWrapper, CommonWrapper } from './styles';

import TabBarItem from '../TabBarItem';

const AuthBottomNavigation: React.FC = () => {
  const bottomTabStyles = useBottomTabStyles();

  const navigatorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: bottomTabStyles.wrapper,
    tabBarBackground: () => (
      <Box style={bottomTabStyles.background}>
        {Platform.OS === 'ios' ? <BlurWrapper /> : <CommonWrapper />}
      </Box>
    ),
  };

  const screenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarItem focused={focused} />,
  };

  return (
    <Tab.Navigator screenOptions={navigatorOptions}>
      <Tab.Screen options={screenOptions} name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default AuthBottomNavigation;
