import { createStackNavigator } from '@react-navigation/stack';

import AuthBottomNavigation from '../AuthBottomNavigation';

import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthBottomNavigation" component={AuthBottomNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
