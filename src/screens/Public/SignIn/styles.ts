import styled from 'styled-components';

import { Box } from '@/components';
import { GLOBAL_METRICS } from '@/theme';

export const Content = styled(Box)`
  flex: 1;
  padding: 0 ${GLOBAL_METRICS.horizontalSpacing}px;
`;
