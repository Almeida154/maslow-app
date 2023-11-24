import { useTheme } from 'styled-components/native';

import { Box, Button, Maslow, Text, Wrapper } from '@/components';

import wallpaper from '@/../assets/initial-screen-background.png';

import { Form, Logo, Link, BackgroundImage } from './styles';

import { LoginScreenProps } from './types';

export default function Login({ navigation }: LoginScreenProps) {
  const theme = useTheme();

  const startNow = () => {
    navigation.navigate('SignIn');
  };

  const login = () => {
    navigation.navigate('Login');
  };

  return (
    <Wrapper>
      <BackgroundImage source={wallpaper} />

      <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter spaceBetween>
        <Logo>
          <Maslow.Icon size={120} color={theme.title} />
        </Logo>

        <Form>
          <Text heading size="super-lg" style={{ textAlign: 'center' }}>
            Vamos lá!
          </Text>

          <Text
            size="sm"
            style={{
              marginTop: 16,
              marginBottom: 48,
              textAlign: 'center',
              lineHeight: 24,
            }}
          >
            Comece agora mesmo e conheça os inúmeros benefícios ao aderir a Maslow em
            sua vida.
          </Text>

          <Button
            text="Começar"
            primary
            onPress={startNow}
            style={{ marginBottom: 16 }}
          />

          <Button
            text="Entrar na minha conta"
            containerStyle={{ backgroundColor: 'transparent' }}
            onPress={login}
            icon="login"
            textStyle={{ color: theme.title, fontSize: 12 }}
          />
        </Form>
      </Box>
    </Wrapper>
  );
}
