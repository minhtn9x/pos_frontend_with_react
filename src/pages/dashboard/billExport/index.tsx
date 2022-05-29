import { Button, Card, Layout, Page, Tabs } from '@shopify/polaris';
import { Box, Stack } from 'components';
import React, { useCallback, useState } from 'react';
import { SURFACECOLORS } from 'theme/colors';

import CustomerCard from './components/CustomerCard';
import PaymentCard from './components/PaymentCard';
import PromotionCard from './components/PromotionCard';
import RightComponent from './components/RightComponent';

const BillExport = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: '1',
      content: 'Khách hàng',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: '2',
      content: 'Khuyến mãi',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: '3',
      content: 'Thanh toán',
      panelID: 'repeat-customers-content-1',
    },
  ];

  return (
    <Box width="100%" height="100%">
      <Stack height="100%">
        <Box height="100%" flex="2">
          <Page
            fullWidth
            breadcrumbs={[{ content: 'Orders', url: '/dashboard/orders' }]}
            title="Thanh toán"
            subtitle="#13o0123jjfd - Bàn 00 - Giao hàng"
          >
            <Card>
              <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                <Box height="100%" width="100%">
                  {selected == 0 ? (
                    <CustomerCard />
                  ) : selected == 1 ? (
                    <PromotionCard />
                  ) : (
                    <PaymentCard />
                  )}
                </Box>
              </Tabs>
            </Card>
          </Page>
        </Box>
        <Box height="100%" flex="1">
          <RightComponent />
        </Box>
      </Stack>
    </Box>
  );
};
export default BillExport;
