import { Button, Card, Icon, Page, Tabs } from '@shopify/polaris';
import {
  CircleInformationMajor,
  CustomersMajor,
  HomeMajor,
  PhoneMajor,
} from '@shopify/polaris-icons';
import BillList from 'components/Bill/BillList';
import BillReportModal from 'components/Bill/BillReportModal';
import BillTable from 'components/Bill/BillTable';
import CircleIcon from 'components/Icon/CircleIcon';
import React, { useCallback, useState } from 'react';

import { Box, Stack, Text } from '../../../components';

const BillScreen = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all',
      content: 'Tất cả',
    },
    {
      id: 'in-place',
      content: 'Tại quán',
    },
    {
      id: 'shipping',
      content: 'Giao hàng',
    },
    {
      id: 'take-away',
      content: 'Mang về',
    },
    {
      id: 'card',
      content: 'Thẻ',
    },
  ];

  return (
    <Box overflow={'hidden'}>
      <Page fullWidth>
        <Stack justifyContent="space-between">
          <Text fontSize={'26px'} fontWeight={'600'}>
            Hóa đơn
          </Text>
          <Stack>
            <Box>
              <BillReportModal />
            </Box>
            <Box marginLeft={'20px'}>
              <Button>Xem thông báo</Button>
            </Box>
          </Stack>
        </Stack>
        <Stack justifyContent={'space-between'}>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />
          <Stack alignItems={'center'}>
            <Box pl={'20px'}>
              <CircleIcon color={'#79FF10'} />
            </Box>
            <Text px="8px">Đang chế biến</Text>
            <Box pl={'20px'}>
              <CircleIcon color={'#CE3939'} />
            </Box>
            <Text px="8px">Hủy</Text>
            <Box pl={'20px'}>
              <CircleIcon color={'#EBE322'} />
            </Box>
            <Text px="8px">Hủy sớm</Text>
          </Stack>
        </Stack>

        {/* List of bill */}
        <Stack flexDirection={'row'}>
          <Box px="2px" minWidth="35vw">
            <BillList />
          </Box>

          <Stack flexDirection={'column'} width="60vw">
            <Card>
              <Box height={'72vh'} zIndex={2}>
                <Card.Section>
                  <Box
                    display={'flex'}
                    justifyContent="space-between"
                    paddingBottom={'30px'}
                    fontSize="16px"
                    fontWeight={600}
                  >
                    <Text>Mang đi - #PQ-136-TA-8yqc6o0</Text>
                    <Text paddingRight={'10vw'}>08/03/2022 14:31</Text>
                  </Box>
                  <Stack justifyContent="space-between" color="#8C9196">
                    <Box>
                      <Stack>
                        <Box pr="8px">
                          <Icon source={CustomersMajor} color="base" />
                        </Box>
                        <Text>Nguyễn Văn A</Text>
                      </Stack>

                      <Stack pt="12px">
                        <Box pr="8px">
                          <Icon source={PhoneMajor} color="base" />
                        </Box>

                        <Text>Nguyễn Văn A</Text>
                      </Stack>
                    </Box>
                    <Box paddingRight={'10.5vw'}>
                      <Stack>
                        <Box pr="8px">
                          <Icon source={CircleInformationMajor} color="base" />
                        </Box>

                        <Text>dsafdsafdsaf</Text>
                      </Stack>
                      <Stack pt="12px">
                        <Box pr="8px">
                          <Icon source={HomeMajor} color="base" />
                        </Box>
                        <Text>sdafdsfdsafasd</Text>
                      </Stack>
                    </Box>
                  </Stack>
                </Card.Section>
                {/* Table of bills */}
                <BillTable />

                <Card.Section>
                  <Stack justifyContent="space-between">
                    <Stack justifyContent={'space-between'} width="45%" color="#8C9196">
                      <Box>
                        <Text>Tiền mặt</Text>
                        <Text>Tiền thừa</Text>
                        <Text>Credit Card</Text>
                        <Text>Membership</Text>
                      </Box>
                      <Box textAlign="right">
                        <Text>{'000.000.000'}</Text>
                        <Text>{'0'}</Text>
                        <Text>{'0'}</Text>
                        <Text>{'0'}</Text>
                      </Box>
                    </Stack>
                    <Stack justifyContent={'space-between'} width="45%" color="#8C9196">
                      <Box>
                        <Text fontSize={'14px'} fontWeight={'600'} color="black">
                          Tổng thanh toán
                        </Text>
                        <Text>Giảm giá</Text>
                        <Text>VAT</Text>
                        <Text fontSize={'18px'} fontWeight={'600'} color="black">
                          Thành tiền
                        </Text>
                      </Box>
                      <Box textAlign="right">
                        <Text fontSize={'14px'} fontWeight={'600'} color="black">
                          {'000.000.000'}
                        </Text>
                        <Text>{'0'}</Text>
                        <Text>{'0'}</Text>
                        <Text fontSize={'18px'} fontWeight={'600'} color="black">
                          {'000.000.000'}
                        </Text>
                      </Box>
                    </Stack>
                  </Stack>
                  <Box display={'flex'} justifyContent={'flex-end'} paddingTop={'40px'}>
                    <Button size="large" primary>
                      IN HÓA ĐƠN
                    </Button>
                  </Box>
                </Card.Section>
              </Box>
            </Card>
          </Stack>
        </Stack>
      </Page>
    </Box>
  );
};

export default BillScreen;
