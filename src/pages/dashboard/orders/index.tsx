import { Box, Stack } from 'components';
import React from 'react';

import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';

const OrdersScreen = () => {
  return (
    <Box width="100%" height="100%">
      <Stack height="100%">
        <Box height="100%" flex="2">
          <LeftComponent />
        </Box>
        <Box height="100%" flex="1">
          <RightComponent />
        </Box>
      </Stack>
    </Box>
  );
};
export default OrdersScreen;
