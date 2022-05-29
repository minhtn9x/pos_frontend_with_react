import { Button, Card, Icon, Scrollable } from '@shopify/polaris';
import { ChevronDownMinor, MobileCancelMajor } from '@shopify/polaris-icons';
import { Box, Spacer, Stack, Text } from 'components';
import React from 'react';
import { useNavigate } from 'react-router';

const RightComponent = () => {
  const navigate = useNavigate();
  const listProduct = [
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
  ];
  return (
    <Stack width="100%" height="100%" flexDirection="column">
      <Box>
        <Stack justifyContent="center">
          <Box
            height="46px"
            borderBottomStyle="groove"
            borderBottomWidth="1px"
            borderLeftStyle="groove"
            borderLeftWidth="1px"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            display="flexbox"
            flex="2"
          >
            <Text fontSize="16px">Đơn hàng :</Text>
            <Text fontSize="16px">2444</Text>
          </Box>
          <Box
            height="46px"
            borderBottomStyle="groove"
            borderBottomWidth="1px"
            borderLeftStyle="groove"
            borderLeftWidth="1px"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            display="flexbox"
            flex="1"
          >
            <Text fontSize="16px">Ban: 24</Text>
          </Box>
          <Box
            height="46px"
            borderBottomStyle="groove"
            borderBottomWidth="1px"
            borderLeftStyle="groove"
            borderLeftWidth="1px"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            display="flexbox"
            flex="1"
          >
            <Text fontSize="16px">Giao hang</Text>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Stack justifyContent="center">
          <Box
            height="46px"
            borderBottomStyle="groove"
            borderBottomWidth="1px"
            borderLeftStyle="groove"
            borderLeftWidth="1px"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            display="flexbox"
            flex="2"
          >
            <Text fontSize="16px">Tên</Text>
          </Box>
          <Box
            height="46px"
            borderBottomStyle="groove"
            borderBottomWidth="1px"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            display="flexbox"
            flex="1"
          >
            <Text fontSize="16px">Size</Text>
          </Box>
          <Box
            height="46px"
            borderBottomStyle="groove"
            borderBottomWidth="1px"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            display="flexbox"
            flex="1"
          >
            <Text fontSize="16px">Tổng</Text>
          </Box>
        </Stack>
      </Box>

      <Box zIndex="0" backgroundColor="white" overflowY="scroll" height="70%">
        <Stack flexDirection="column">
          {listProduct.map((_, idx) => (
            <Card.Section key={idx}>
              <Stack>
                <Box flex="0.5">
                  <Text textAlign="center" fontSize="14px" fontWeight="600">
                    1x
                  </Text>
                </Box>
                <Box flex="2">
                  <Stack flexDirection="column">
                    <Text fontSize="14px" fontWeight="600">
                      Hot Expresso with milk
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      1x Tép bưởi nước đường
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      1x Tép bưởi nước đường
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      1x Tép bưởi nước đường
                    </Text>
                    <Text color="green" fontSize="18px">
                      Hủy
                    </Text>
                  </Stack>
                </Box>
                <Box flex="0.5">
                  <Text textAlign="center" fontSize="14px" fontWeight="600">
                    S
                  </Text>
                </Box>
                <Box flex="1">
                  <Stack flexDirection="column">
                    <Text textAlign="right" fontSize="14px" fontWeight="600">
                      42.000 đ
                    </Text>
                    <Text textAlign="right" fontSize="12px" fontWeight="600">
                      12.000 đ
                    </Text>
                    <Text textAlign="right" fontSize="12px" fontWeight="600">
                      12.000 đ
                    </Text>
                    <Text textAlign="right" fontSize="12px" fontWeight="600">
                      12.000 đ
                    </Text>
                    <Text textAlign="right" fontSize="14px">
                      78.000 đ
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </Card.Section>
          ))}
        </Stack>
      </Box>

      <Box width="100%" height="34px">
        <Spacer mb="10px"></Spacer>
        <Icon source={ChevronDownMinor} color="base" />
      </Box>
      <Box
        borderBottomStyle="groove"
        borderBottomWidth="2px"
        width="100%"
        height="94px"
        backgroundColor="white"
      >
        <Stack>
          <Box
            padding="10px"
            justifyContent="space-between"
            flexDirection="column"
            flex="1"
          >
            <Text fontSize="16px">Số lượng</Text>
            <Spacer mb="20px"></Spacer>
            <Text fontWeight="bold" fontSize="20px">
              Tổng
            </Text>
          </Box>
          <Box
            padding="10px"
            justifyContent="space-between"
            flexDirection="column"
            flex="1"
          >
            <Text fontSize="16px" textAlign="right">
              90
            </Text>
            <Spacer mb="20px"></Spacer>
            <Text textAlign="right" fontWeight="bold" fontSize="20px">
              100.000.000 đ
            </Text>
          </Box>
        </Stack>
      </Box>
      <Box
        borderBottomStyle="groove"
        borderBottomWidth="2px"
        width="100%"
        height="94px"
        backgroundColor="white"
      >
        <Stack>
          <Box padding="20px" flex="1">
            <Button fullWidth size="large" icon={MobileCancelMajor}></Button>
          </Box>
          <Box padding="20px" flexDirection="column" flex="5">
            <Button
              onClick={() => navigate('/dashboard/billExport')}
              fullWidth
              primary
              size="large"
            >
              Thanh toán
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};
export default RightComponent;
