import { useTheme } from 'styled-components/native';

import { Box, Maslow, Text, Wrapper } from '@/components';

import { Form, Logo, Link } from './styles';

import { LoginScreenProps } from './types';

export default function Login({ navigation }: LoginScreenProps) {
  const theme = useTheme();

  const onNewAccountPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Wrapper>
      <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
        <Logo>
          <Maslow.Icon size={60} color={theme.title} />
        </Logo>

        <Form>
          <Text heading size="super-lg">
            Boas vindas!
          </Text>

          <Text size="sm" style={{ marginTop: 16, marginBottom: 48 }}>
            Faça login ou{' '}
            <Link onPress={onNewAccountPress}>crie uma nova conta.</Link>
          </Text>
        </Form>
      </Box>
    </Wrapper>
  );
}
