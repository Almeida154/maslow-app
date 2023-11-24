import { createStackNavigator } from '@react-navigation/stack';

import { Login, SignIn, Initial } from '@/screens';
import { PublicStackParamList } from './types';

const Stack = createStackNavigator<PublicStackParamList>();

const PublicNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
