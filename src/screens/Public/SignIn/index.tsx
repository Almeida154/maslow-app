import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUser } from '@/contexts/UserContext';
import { Wrapper, Box, Text, BottomSheet } from '@/components';
import { showToast } from '@/utils/utilities';
import { GLOBAL_METRICS } from '@/theme';
import { UserService } from '@/services';

import { SignInScreenProps } from './types';

import { Content } from './styles';

export default function SignIn({ navigation }: SignInScreenProps) {
  const theme = useTheme();
  const { user, storeUser } = useUser();

  const signNewUserIn = async () => {
    if (!user) return;

    const { data, error } = await UserService.create({
      email: user.email,
      name: user.name,
      password: user?.password ?? '',
    });

    if (error || !data) {
      showToast({ message: error });
      return;
    }

    storeUser(data?.user);
    await AsyncStorage.setItem('@user', JSON.stringify(data?.user));
  };

  return (
    <Wrapper>
      <Content>
        <Box
          style={{
            marginBottom: 40,
            marginTop: 32,
            paddingHorizontal: GLOBAL_METRICS.horizontalSpacing,
          }}
        >
          <Text size="super-lg" heading style={{ marginBottom: 12 }}>
            aaaa
          </Text>

          <Text size="sm" style={{ lineHeight: 24 }}>
            bbbb
          </Text>
        </Box>
      </Content>
    </Wrapper>
  );
}
