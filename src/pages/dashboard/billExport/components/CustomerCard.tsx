import { Button, Card, FormLayout, TextField } from '@shopify/polaris';
import { Box, Stack } from 'components';
import React from 'react';
import { SURFACECOLORS } from 'theme/colors';

const CustomerCard = () => {
  return (
    <Box
      paddingX="141px"
      paddingY="72px"
      width="100%"
      backgroundColor={SURFACECOLORS.disabled}
    >
      <Box width="100%">
        <Card title="Thông tin khách hàng" sectioned>
          <Card.Section title="Thẻ thành viên">
            <FormLayout>
              <TextField autoComplete="number" />
              <Stack>
                <Box paddingRight="10px" flex="1">
                  <Button outline size="large" fullWidth textAlign="center">
                    Làm mới
                  </Button>
                </Box>
                <Box paddingLeft="10px" flex="1">
                  <Button primary size="large" fullWidth textAlign="center">
                    Tìm kiếm
                  </Button>
                </Box>
              </Stack>
            </FormLayout>
          </Card.Section>
          <Card.Section title="Thông tin chi tiết">
            <Stack display="" flexDirection="column">
              <Stack padding="10px">
                <Box fontSize="14px" flex="1">
                  Tên khách hàng:
                </Box>
                <Box fontSize="14px" flex="2">
                  Nguyễn Dương
                </Box>
              </Stack>
              <Stack padding="10px">
                <Box fontSize="14px" flex="1">
                  Só điện thoại :
                </Box>
                <Box fontSize="14px" flex="2">
                  0358817512
                </Box>
              </Stack>
              <Stack padding="10px">
                <Box fontSize="14px" flex="1">
                  Địa chỉ:
                </Box>
                <Box fontSize="14px" flex="2">
                  116/32 đường số 17 khu phố 5 linh trung thành phố thủ đức Tp hồ chí minh
                </Box>
              </Stack>
            </Stack>
          </Card.Section>
        </Card>
      </Box>
      <Card.Section fullWidth></Card.Section>
    </Box>
  );
};
export default CustomerCard;
