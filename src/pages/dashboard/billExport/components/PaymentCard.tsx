import { Card, FormLayout, Icon, Layout, Scrollable, TextField } from '@shopify/polaris';
import { BackspaceMajor, DeleteMajor } from '@shopify/polaris-icons';
import { Box, Stack, StyledButton } from 'components';
import React from 'react';
import { SURFACECOLORS } from 'theme/colors';
const PaymentCard = () => {
  let NUMBER_KEYBOARDS = [...new Array(9)];
  let PAYMENT_HISTORY = [...new Array(4)];
  const PAYMNENT_TYPE = [
    'Tiền mặt',
    'Điểm thưởng',
    'Thành viên',
    'MasterCard',
    'Momo',
    'Visa Card',
    'GrabFood',
    'VnPay',
    'Baemin',
    'Moca',
  ];
  return (
    <Layout>
      <Layout.Section fullWidth oneThird>
        <Box padding="15px" width="100%">
          <Box
            display="grid"
            backgroundColor={SURFACECOLORS.default}
            gridTemplateColumns="1fr 1fr"
            gridColumnGap="10px"
            gridRowGap="10px"
          >
            {PAYMNENT_TYPE.map((value, idx) => (
              <StyledButton
                key={idx}
                paddingY="20px"
                height="55px"
                backgroundColor={SURFACECOLORS.neutral.subdued}
                fontSize="14px"
              >
                {value}
              </StyledButton>
            ))}
          </Box>
        </Box>
      </Layout.Section>
      <Layout.Section>
        <Box
          paddingRight="15px"
          width="100%"
          height="100%"
          backgroundColor={SURFACECOLORS.default}
        >
          <Card>
            <Card.Section>
              <Box flexDirection="column" paddingX="40px" width="100%" height="100%">
                <Box paddingBottom="10px" fontWeight="bold" fontSize="20px">
                  Tiền khách trả
                </Box>
                <FormLayout>
                  <TextField clearButton autoComplete="number" />
                </FormLayout>
                <Box
                  paddingTop="10px"
                  display="grid"
                  gridTemplateColumns="1fr 1fr 1fr 1fr"
                  gridColumnGap="10px"
                >
                  <StyledButton
                    padding="12px"
                    color="blue"
                    height="50px"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                  >
                    20,000
                  </StyledButton>
                  <StyledButton
                    height="50px"
                    padding="12px"
                    color="blue"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                  >
                    50,000
                  </StyledButton>
                  <StyledButton
                    height="50px"
                    padding="12px"
                    color="blue"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                  >
                    100,000
                  </StyledButton>
                  <StyledButton
                    height="50px"
                    color="blue"
                    padding="12px"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                  >
                    200,000
                  </StyledButton>
                </Box>
                <Box
                  paddingY="10px"
                  display="grid"
                  gridTemplateColumns="1fr 1fr 1fr"
                  gridColumnGap="12px"
                  gridRowGap="12px"
                >
                  {NUMBER_KEYBOARDS.map((_, idx) => (
                    <StyledButton
                      key={idx}
                      padding="20px"
                      height="55px"
                      backgroundColor={SURFACECOLORS.neutral.subdued}
                      fontSize="30px"
                    >
                      {idx + 1}
                    </StyledButton>
                  ))}
                  <StyledButton
                    padding="20px"
                    height="55px"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                    fontSize="30px"
                  >
                    000
                  </StyledButton>
                  <StyledButton
                    padding="20px"
                    height="55px"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                    fontSize="30px"
                  >
                    0
                  </StyledButton>
                  <StyledButton
                    padding="20px"
                    height="55px"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                    fontSize="30px"
                  >
                    <Icon source={BackspaceMajor} color="base" />
                  </StyledButton>
                  <StyledButton
                    padding="20px"
                    height="55px"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                    fontSize="30px"
                  >
                    <Icon source={DeleteMajor} color="base" />
                  </StyledButton>
                  <StyledButton
                    padding="20px"
                    height="55px"
                    backgroundColor=" #FFECB3"
                    fontSize="30px"
                  >
                    OK
                  </StyledButton>
                </Box>
              </Box>
            </Card.Section>
          </Card>
          <Box
            marginBottom="15px"
            width="100%"
            height="128px"
            backgroundColor={SURFACECOLORS.hovered}
          >
            <Box padding="10px" display="flex" flexDirection="row">
              <Box fontWeight="bold" flex="1">
                #
              </Box>
              <Box fontWeight="bold" flex="3">
                Hình thức
              </Box>
              <Box fontWeight="bold" flex="3">
                Số tiền
              </Box>
              <Box fontWeight="bold" flex="3">
                Thời gian
              </Box>
              <Box fontWeight="bold" flex="1">
                <Icon source={DeleteMajor} color="base" />
              </Box>
            </Box>
            {PAYMENT_HISTORY.map((_, idx) => (
              <Box key={idx} paddingX="10px" display="flex" flexDirection="row">
                <Box fontWeight="bold" flex="1">
                  1
                </Box>
                <Box fontWeight="bold" flex="3">
                  Tiền mặt
                </Box>
                <Box fontWeight="bold" flex="3">
                  10.000.000
                </Box>
                <Box fontWeight="bold" flex="3">
                  20/04, 11:00
                </Box>
                <Box fontWeight="bold" flex="1"></Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Layout.Section>
    </Layout>
  );
};
export default PaymentCard;
