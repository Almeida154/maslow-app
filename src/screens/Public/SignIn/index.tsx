import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUser } from '@/contexts/UserContext';
import { Wrapper, Box, Text, Input, Button } from '@/components';
import { showToast } from '@/utils/utilities';
import { UserService } from '@/services';

import { SignInScreenProps } from './types';

import { Content } from './styles';
import { FONT_FAMILY } from '@/theme';
import { useState } from 'react';

export default function SignIn({ navigation }: SignInScreenProps) {
  const theme = useTheme();
  const { storeUser } = useUser();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const signNewUserIn = async () => {
    const { data, error } = await UserService.create({
      email,
      name,
      password,
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
            Que legal que queira experimentar a plataforma!
          </Text>

          <Text size="sm" style={{ marginTop: 4, fontFamily: FONT_FAMILY.Regular }}>
            Preencha os dados abaixo para continuar
          </Text>
        </Box>

        <Input
          label="Nome"
          value={name}
          onChangeText={setName}
          containerStyle={{ marginBottom: 16 }}
          placeholder="Insira seu username"
        />

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

        <Button
          containerStyle={{ marginTop: 32 }}
          text="Cadastrar"
          primary
          onPress={signNewUserIn}
        />
      </Content>
    </Wrapper>
  );
}
