import { useContext } from 'react';

import Constants from 'expo-constants';

import { Box, Button, Scrollable, Text, Wrapper } from '@/components';

import { ThemeContext } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';

import { BOTTOM_TAB_ITEM_SIZE } from '@/navigation/constants';
import { FONT_SIZE } from '@/theme';

import { HomeScreenProps } from './types';

export default function Home({ navigation }: HomeScreenProps) {
  const { toggle } = useContext(ThemeContext);
  const { logout } = useUser();

  return (
    <Wrapper style={{ paddingTop: 0, paddingHorizontal: 24 }}>
      <Scrollable
        mainNavigation
        paddingTop={Constants.statusBarHeight + 12}
        paddingBottom={BOTTOM_TAB_ITEM_SIZE + 120}
      >
        <Box alignItemsCenter style={{ marginBottom: 24 }}>
          <Text>Home</Text>
        </Box>

        <Button text="Sair" primary onPress={logout} style={{ marginBottom: 16 }} />
        <Button text="Toggle" primary onPress={toggle} />
      </Scrollable>
    </Wrapper>
  );
}
