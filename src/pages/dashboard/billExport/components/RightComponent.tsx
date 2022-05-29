import { Button, Card } from '@shopify/polaris';
import { Box, Stack } from 'components';
import React from 'react';
import { SURFACECOLORS } from 'theme/colors';

const RightComponent = () => {
  return (
    <Box width="100%" height="700px">
      <Card>
        <Box
          paddingY="10px"
          display="block"
          width="100%"
          backgroundColor={SURFACECOLORS.disabled}
          textAlign="center"
          height="46px"
          alignItems="center"
          justifyContent="center"
          fontSize="20px"
          fontWeight="bold"
        >
          THÔNG TIN THANH TOÁN
        </Box>
        <Card.Section>
          <Stack display="" flexDirection="column">
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                Khách hàng:
              </Box>
              <Box fontSize="14px" flex="1">
                Nguyễn Dương
              </Box>
            </Stack>
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                Thanh toán bằng :
              </Box>
              <Box fontSize="14px" flex="1">
                Tiền mặt
              </Box>
            </Stack>
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                Thời gian
              </Box>
              <Box fontSize="14px" flex="1">
                08/01/22, 10:30
              </Box>
            </Stack>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack display="" flexDirection="column">
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                Điểm:
              </Box>
              <Box fontSize="14px" flex="1">
                000.000.000
              </Box>
            </Stack>
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                Giảm giá :
              </Box>
              <Box fontSize="14px" flex="1">
                000.000.000
              </Box>
            </Stack>
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                Còn lại
              </Box>
              <Box fontSize="14px" flex="1">
                000.000.000
              </Box>
            </Stack>
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                VAT
              </Box>
              <Box fontSize="14px" flex="1">
                000.000.000
              </Box>
            </Stack>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack display="" flexDirection="column">
            <Stack padding="10px">
              <Box fontWeight="bold" fontSize="14px" flex="1">
                Thành tiền
              </Box>
              <Box fontSize="14px" flex="1">
                000.000.000
              </Box>
            </Stack>
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                Khách đưa
              </Box>
              <Box fontSize="14px" flex="1">
                000.000.000
              </Box>
            </Stack>
            <Stack padding="10px">
              <Box fontSize="14px" flex="1">
                Thiếu
              </Box>
              <Box fontSize="14px" flex="1">
                000.000.000
              </Box>
            </Stack>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack padding="10px">
            <Box fontWeight="bold" fontSize="20px" flex="1">
              Tổng cộng
            </Box>
            <Box fontWeight="bold" fontSize="20px" flex="1">
              000.000.000
            </Box>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack padding="10px">
            <Box fontWeight="bold" fontSize="20px" flex="1">
              Trả lại
            </Box>
            <Box fontWeight="bold" fontSize="20px" flex="1">
              000.000.000
            </Box>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack flexDirection="column">
            <Box padding="10px">
              <Button fullWidth outline size="large">
                Làm mới
              </Button>
            </Box>
            <Box padding="10px">
              <Button fullWidth primary size="large">
                Hoàn tất
              </Button>
            </Box>
          </Stack>
        </Card.Section>
      </Card>
    </Box>
  );
};
export default RightComponent;
