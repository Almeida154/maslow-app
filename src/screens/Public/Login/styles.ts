import styled from 'styled-components/native';

import { FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';
import { Text } from '@/components';

export const Logo = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.View`
  width: 100%;
  padding: 0 ${GLOBAL_METRICS.horizontalSpacing}px;
`;

export const PasswordLink = styled(Text)`
  color: ${({ theme }) => theme.title};
  font-family: ${FONT_FAMILY.Regular};
  align-self: flex-end;
  font-size: ${`${FONT_SIZE.Small}px`};
  margin-top: 16px;
`;
