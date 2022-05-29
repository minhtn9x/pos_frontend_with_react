import { Card, Heading, TextContainer, TextField } from '@shopify/polaris';
import { Icon } from '@shopify/polaris';
import { BackspaceMajor, DeleteMajor } from '@shopify/polaris-icons';
//import { ChevronLeftMinor, ChevronRightMinor } from '@shopify/polaris-icons';
import { Box, Stack } from 'components';
import { StyledButton } from 'components';
//import POSLayout from 'layouts/POSLayout';
import React, { useCallback, useState } from 'react';
import { paddingTop } from 'styled-system';
import { SURFACECOLORS } from 'theme/colors';

import { Pright } from '../Membership.styles';

const Money = () => {
  const card = [
    'Card 10k',
    'Card 20k',
    'Card 30k',
    'Card 50k',
    'Card 100k',
    'Card 200k',
    'Card 300k',
    'Card 400k',
    'Card 500k',
    'Card 1M',
    'Card 1M5',
    'Card 2M',
    'Card 3M',
    'Card 4M',
    'Card 5M',
  ];
  const money = ['20,000', '50,000', '100,000', '200,000'];
  const [textFieldValue, setTextFieldValue] = useState('10,000,000');
  const handleTextFieldChange = useCallback((value) => setTextFieldValue(value), []);
  const handleClearButtonClick = useCallback(() => setTextFieldValue(''), []);
  let NUMBER_KEYBOARDS = [...new Array(9)];
  return (
    <Box flex={2}>
      <Stack>
        <Box flex={1}>
          <Stack>
            <Box
              paddingY="10px"
              display="grid"
              gridTemplateColumns="1fr 1fr"
              gridColumnGap="50px"
              gridRowGap="12px"
            >
              {card.map((item, idx) => (
                <StyledButton
                  key={idx}
                  padding="20px"
                  backgroundColor={SURFACECOLORS.neutral.subdued}
                  fontSize="20px"
                  width="160px"
                  marginLeft="10px"
                >
                  {item}
                </StyledButton>
              ))}
            </Box>
          </Stack>
          <Stack>
            <StyledButton
              padding="15px"
              height="45px"
              width="380px"
              backgroundColor={SURFACECOLORS.neutral.subdued}
              fontSize="20px"
              marginLeft="10px"
              marginTop="25px"
            >
              Làm mới
            </StyledButton>
          </Stack>
        </Box>
        <Box flex={1}>
          <Card.Section title={'Nạp thêm'}>
            <TextField
              label=""
              value={textFieldValue}
              onChange={handleTextFieldChange}
              clearButton
              onClearButtonClick={handleClearButtonClick}
              autoComplete="off"
            />
            <TextContainer>
              <Heading>Thông tin thanh toán</Heading>
              <Stack>
                <Box flex={1}>
                  <p>Tổng tiền</p>
                  <p>Khách đưa</p>
                  <p>Trả lại</p>
                </Box>
                <Box flex={1}>
                  <Pright>000,000,000,000</Pright>
                  <Pright>000,000,000</Pright>
                  <Pright>000,000,000</Pright>
                </Box>
              </Stack>
            </TextContainer>
            <Stack>
              {money.map((item) => (
                <Box key={item} flex={1}>
                  <StyledButton
                    padding="5px"
                    color="blue"
                    //height="43px"
                    width="82px"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                  >
                    {item}
                  </StyledButton>
                </Box>
              ))}
            </Stack>
            <Stack>
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
                    width="111px"
                    backgroundColor={SURFACECOLORS.neutral.subdued}
                    fontSize="30px"
                    marginRight="0px"
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
              </Box>
            </Stack>
            {/* <Button7>
              <Button size="large" outline>
                NẠP TIỀN
              </Button>
            </Button7> */}
            <StyledButton
              height="45px"
              width="360px"
              marginTop="43px"
              padding="15px"
              backgroundColor="#ffecb3"
            >
              NẠP TIỀN
            </StyledButton>
          </Card.Section>
        </Box>
      </Stack>
    </Box>
  );
};

export default Money;
