import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components/native';

import { Box, Button, Input, Text, Wrapper } from '@/components';
import { useUser } from '@/contexts/UserContext';
import { UserService } from '@/services';
import { showToast } from '@/utils/utilities';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Form, PasswordLink } from './styles';

import { LoginScreenProps } from './types';
import { FONT_FAMILY } from '@/theme';
import { TouchableOpacity } from 'react-native';

export default function Login({ navigation }: LoginScreenProps) {
  const theme = useTheme();
  const { storeUser } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    const { data, error } = await UserService.login({ email, password });

    console.log({ data, error });

    if (error || !data?.user) {
      showToast({ message: error });
      return;
    }

    storeUser(data?.user);
  };

  return (
    <Wrapper>
      <Form>
        <Box
          style={{
            marginBottom: 40,
            marginTop: 32,
          }}
        >
          <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
            <MaterialCommunityIcons
              name="arrow-left"
              color={theme.title}
              size={24}
            />
          </TouchableOpacity>

          <Text
            size="lg"
            heading
            style={{ marginVertical: 12, fontFamily: FONT_FAMILY.SemiBold }}
          >
            Login
          </Text>
        </Box>

        <Input
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          containerStyle={{ marginBottom: 16 }}
          placeholder="Insira seu e-mail"
        />

        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Insira sua senha"
          isPassword
        />

        <PasswordLink>Esqueci minha senha</PasswordLink>

        <Button
          containerStyle={{ marginTop: 32 }}
          text="Login"
          primary
          onPress={onLogin}
        />
      </Form>
    </Wrapper>
  );
}
