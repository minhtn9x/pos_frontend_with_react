import { Icon } from '@shopify/polaris';
import {
  CircleCancelMajor,
  CircleMinusMajor,
  MobileHamburgerMajor,
} from '@shopify/polaris-icons';
import { Box, Stack } from 'components';
import React from 'react';

import { NavBarWrapper } from '../POSLayout/POSLayout.style';

type Props = {};

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Stack justifyContent="space-between" height="100%">
        <Box marginY="auto">
          <Icon source={MobileHamburgerMajor} color="base" />
        </Box>
        <Stack justifyContent="space-between" width="100">
          <Box marginY="auto">
            <Icon source={CircleMinusMajor} color="base" />
          </Box>
          <Box marginLeft="16px" marginY="auto">
            <Icon source={CircleCancelMajor} color="base" />
          </Box>
        </Stack>
      </Stack>
    </NavBarWrapper>
  );
};

export default NavBar;
