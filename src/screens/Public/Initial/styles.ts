import styled from 'styled-components/native';

import { DEVICE_DIMENSIONS, FONT_FAMILY, GLOBAL_METRICS } from '@/theme';
import { Image } from 'expo-image';

export const Logo = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 80px ${GLOBAL_METRICS.horizontalSpacing}px;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-family: ${FONT_FAMILY.SemiBold};
  text-decoration-line: underline;
`;

export const PasswordLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-family: ${FONT_FAMILY.Regular};
  align-self: flex-end;
  margin-top: 16px;
`;

export const BackgroundImage = styled(Image)`
  width: 100%;
  height: ${`${DEVICE_DIMENSIONS.height}px`};
  position: absolute;
`;
