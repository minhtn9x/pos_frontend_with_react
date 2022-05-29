import {
  Button,
  CalloutCard,
  Card,
  DisplayText,
  Heading,
  Icon,
  Layout,
  Scrollable,
  Subheading,
  TextStyle,
} from '@shopify/polaris';
import { CreditCardMajor, GiftCardMajor } from '@shopify/polaris-icons';
import { Box, Spacer, Stack, StyledButton, Text } from 'components';
import React from 'react';
import { SURFACECOLORS } from 'theme/colors';

const PromotionCard = () => {
  let TABLES = [...new Array(20)];
  return (
    <Layout>
      <Layout.Section oneThird fullWidth>
        <Box width="100%" height="700px" backgroundColor={SURFACECOLORS.default}>
          <Card title="Đã áp dụng">
            <Scrollable shadow style={{ height: '550px' }} focusable>
              <Card.Section>
                <Card sectioned title="BestBeatT150k" actions={[{ content: 'Hủy' }]}>
                  <Box fontSize="12px">Giảm 50k cho hóa đơn từ 90k</Box>
                  <Stack>
                    <Box fontSize="14px" flex="1">
                      Đã giảm:
                    </Box>
                    <Box textAlign="end" fontSize="14px" flex="1">
                      10.000 đ
                    </Box>
                  </Stack>
                </Card>
              </Card.Section>
              <Card.Section>
                <Card sectioned title="BestBeatT150k" actions={[{ content: 'Hủy' }]}>
                  <Box fontSize="12px">Giảm 50k cho hóa đơn từ 90k</Box>
                  <Stack>
                    <Box fontSize="14px" flex="1">
                      Đã giảm:
                    </Box>
                    <Box textAlign="end" fontSize="14px" flex="1">
                      10.000 đ
                    </Box>
                  </Stack>
                </Card>
              </Card.Section>
              <Card.Section>
                <Card sectioned title="BestBeatT150k" actions={[{ content: 'Hủy' }]}>
                  <Box fontSize="12px">Giảm 50k cho hóa đơn từ 90k</Box>
                  <Stack>
                    <Box fontSize="14px" flex="1">
                      Đã giảm:
                    </Box>
                    <Box textAlign="end" fontSize="14px" flex="1">
                      10.000 đ
                    </Box>
                  </Stack>
                </Card>
              </Card.Section>
            </Scrollable>
            <Card.Section>
              <Stack width="100%" flexDirection="row">
                <Box flex="1" padding="5px">
                  <Button fullWidth outline size="medium">
                    Làm mới
                  </Button>
                </Box>
                <Box flex="1" padding="5px">
                  <Button fullWidth primary size="medium">
                    Tìm mã
                  </Button>
                </Box>
              </Stack>
            </Card.Section>
          </Card>
        </Box>
      </Layout.Section>
      <Layout.Section>
        <Card>
          <Scrollable shadow style={{ height: '700px' }} focusable>
            <Card.Section title="Giảm giá trực tiếp (có thể áp dụng được với 2 và 3)">
              <Box
                width="100%"
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
                gridRowGap="8px"
                gridColumnGap="8px"
              >
                {TABLES.map((_, idx) => (
                  <StyledButton
                    key={idx}
                    borderRadius="5px"
                    backgroundColor={SURFACECOLORS.highlight}
                    height="52px"
                  >
                    <Stack flexDirection="column">
                      <Heading>%</Heading>
                      <Subheading>20% vip</Subheading>
                    </Stack>
                  </StyledButton>
                ))}
              </Box>
            </Card.Section>
            <Card.Section title="2. Khuyến mãi chung (có thể áp dụng nhiều)">
              <Box
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr"
                gridRowGap="8px"
                gridColumnGap="8px"
              >
                {TABLES.map((_, idx) => (
                  <StyledButton
                    borderRadius="5px"
                    key={idx}
                    backgroundColor={SURFACECOLORS.highlight}
                    height="52px"
                  >
                    <Stack flexDirection="column">
                      <Icon color="subdued" source={GiftCardMajor} />
                      <Spacer mb="5px"></Spacer>
                      <Subheading>Combo(49k)</Subheading>
                    </Stack>
                  </StyledButton>
                ))}
              </Box>
            </Card.Section>
            <Card.Section title="3. Khuyến mãi độc lập (chỉ được áp dụng duy nhất)">
              <Box
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr"
                gridRowGap="8px"
                gridColumnGap="8px"
              >
                {TABLES.map((_, idx) => (
                  <StyledButton
                    borderRadius="5px"
                    key={idx}
                    backgroundColor={SURFACECOLORS.highlight}
                    height="52px"
                  >
                    <Stack flexDirection="column">
                      <Icon source={CreditCardMajor} color="subdued" />
                      <Spacer mb="5px"></Spacer>
                      <Subheading>Combo(49k)</Subheading>
                    </Stack>
                  </StyledButton>
                ))}
              </Box>
            </Card.Section>
          </Scrollable>
        </Card>
      </Layout.Section>
    </Layout>
  );
};
export default PromotionCard;
