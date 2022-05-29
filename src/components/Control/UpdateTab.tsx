import { Card } from '@shopify/polaris';
import React from 'react';

import { Box, Stack } from '..';
import UpdatedNotifyModal from './UpdatedNotifyModal';

const UpdateTab = () => {
  return (
    <Stack justifyContent={'center'} alignItems="center" height={'70vh'}>
      <Card>
        <Card.Section>
          <Stack
            width="35vw"
            height="25vh"
            alignItems={'center'}
            justifyContent="center"
            paddingY="25px"
            paddingX="40px"
          >
            <Box width={'30vw'}>
              <UpdatedNotifyModal title="Cập nhật tất cả" />
              <Stack justifyContent="space-between" paddingTop={'1vh'}>
                <Box width={'48%'}>
                  <Box paddingY={'1vh'}>
                    <UpdatedNotifyModal title="Cập nhật tài khoản" />
                  </Box>
                  <Box paddingY={'1vh'}>
                    <UpdatedNotifyModal title="Cập nhật khuyến mãi" />
                  </Box>
                  <Box paddingY={'1vh'}>
                    <UpdatedNotifyModal title="Cập nhật thanh toán" />
                  </Box>
                </Box>
                <Box width={'48%'}>
                  <Box paddingY={'1vh'}>
                    <UpdatedNotifyModal title="Cập nhật danh mục" />
                  </Box>
                  <Box paddingY={'1vh'}>
                    <UpdatedNotifyModal title="Cập nhật sản phẩm" />
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Card.Section>
      </Card>
    </Stack>
  );
};

export default UpdateTab;
