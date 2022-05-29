import { Button, Card, Page, Tabs, TextField } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';

import { Box, Stack } from '../../../components';
import ChangePasswordTab from '../../../components/Control/ChangePasswordTab';
import UpdateTab from '../../../components/Control/UpdateTab';

const ControlScreen = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'change-password',
      content: 'Đổi mật khẩu',
    },
    {
      id: 'open-safe',
      content: 'Mỡ két',
    },
    {
      id: 'update',
      content: 'Cập nhật',
    },
    {
      id: 'kitchen',
      content: 'Nhà bếp',
    },
  ];

  return (
    <Box overflow={'hidden'}>
      <Page fullWidth title="Bảng điều khiển">
        <Card>
          <Box height="80vh" width={'100%'}>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />

            {selected == 0 ? (
              <ChangePasswordTab />
            ) : selected == 1 ? (
              <Box>Mở két</Box>
            ) : selected == 2 ? (
              <UpdateTab />
            ) : (
              <Box>Nhà bếp</Box>
            )}
          </Box>
        </Card>
      </Page>
    </Box>
  );
};

export default ControlScreen;
