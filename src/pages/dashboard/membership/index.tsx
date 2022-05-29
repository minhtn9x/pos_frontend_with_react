import { Card, Form, FormLayout, Page, Tabs, TextField } from '@shopify/polaris';
//import { ChevronLeftMinor, ChevronRightMinor } from '@shopify/polaris-icons';
import { Box, Stack, StyledButton, Text } from 'components';
import React, { useCallback, useState } from 'react';
import { SURFACECOLORS } from 'theme/colors';

import Money from './components/Money';
import Register from './components/Register';

const Membership = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );
  const tabs = [
    {
      id: '0',
      content: 'Nạp tiền',
      accessibilityLabel: 'All customers',
      panelID: 'tab1-content',
    },
    {
      id: '1',
      content: 'Đăng ký thẻ mới',
      panelID: 'tab2-content',
    },
  ];

  const [customersName, setCustomersName] = useState('');

  const handleSubmit = useCallback((_event) => setCustomersName(''), []);

  const handleUrlChange = useCallback((value) => setCustomersName(value), []);

  return (
    <Page title="Thẻ thành viên" fullWidth>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Stack>
            <Box flex={1}>
              <Card.Section title={'Thông tin khách hàng'}>
                <Form noValidate onSubmit={handleSubmit}>
                  <FormLayout>
                    <TextField
                      value={customersName}
                      onChange={handleUrlChange}
                      label="Thẻ thành viên"
                      type="url"
                      autoComplete="off"
                      placeholder="Jaded Pixel"
                    />
                    <Stack>
                      <Box flex={1}>
                        <StyledButton
                          width="155px"
                          height="43px"
                          padding="10px"
                          backgroundColor={SURFACECOLORS.neutral.subdued}
                        >
                          Làm mới
                        </StyledButton>
                      </Box>
                      <Box flex={1}>
                        <StyledButton
                          width="155px"
                          height="43px"
                          padding="10px"
                          marginLeft="27px"
                          backgroundColor="#ffecb3"
                        >
                          Tìm kiếm
                        </StyledButton>
                      </Box>
                    </Stack>
                  </FormLayout>
                </Form>
                {/* <TextStyle variation="strong">Thông tin chi tiết</TextStyle> */}
                <Text marginTop="20px">Thông tin chi tiết</Text>
              </Card.Section>
            </Box>

            {selected == Number.parseInt(tabs[0].id) ? <Money /> : <Register />}
          </Stack>
        </Tabs>
      </Card>
    </Page>
  );
};

export default Membership;
