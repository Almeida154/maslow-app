import { useContext } from 'react';

import Constants from 'expo-constants';

import { Button, Scrollable, Text, Wrapper } from '@/components';

import { ThemeContext } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';

import { BOTTOM_TAB_ITEM_SIZE } from '@/navigation/constants';
import { FONT_SIZE } from '@/theme';

import { HomeScreenProps } from './types';

export default function Home({ navigation }: HomeScreenProps) {
  const { toggle } = useContext(ThemeContext);
  const { logout } = useUser();

  const onCheckAllArticles = () => {
    navigation.navigate('Articles');
  };

  return (
    <Wrapper style={{ paddingTop: 0 }}>
      <Scrollable
        mainNavigation
        paddingTop={Constants.statusBarHeight + 12}
        paddingBottom={BOTTOM_TAB_ITEM_SIZE + 120}
      >
        <Text>Home</Text>

        <Button
          text="Ver tudo"
          icon="arrow-right"
          primary
          containerStyle={{
            backgroundColor: 'transparent',
            padding: 0,
            height: 24,
            width: 'auto',
          }}
          textStyle={{ fontSize: FONT_SIZE.Small }}
          onPress={onCheckAllArticles}
        />
      </Scrollable>
    </Wrapper>
  );
}
