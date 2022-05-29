import {
  Card,
  DisplayText,
  Modal,
  Page,
  Pagination,
  TextContainer,
} from '@shopify/polaris';
import { Box, Stack, Text } from 'components';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { SURFACECOLORS } from 'theme/colors';

import { CardTable, GridWrapper } from './Home.styles';

const HomeScreen = () => {
  let TABLES = [...new Array(30)];
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);
  return (
    <Page title="Chọn bàn" fullWidth>
      <Modal
        primaryAction={{
          content: 'Chọn',
          onAction: () => navigate('/dashboard/orders'),
        }}
        open={active}
        onClose={handleChange}
        title="Chọn hình thức giao hàng"
      >
        <Modal.Section>
          <Stack>
            <Box backgroundImage="public/icons/delivery.png"></Box>
          </Stack>
        </Modal.Section>
      </Modal>
      <Card sectioned>
        <Box width="100%" height="100%" display="flex">
          <Box marginX="auto" marginY="80px">
            <Stack flexDirection="column">
              <Box marginBottom="30px">
                <GridWrapper>
                  {TABLES.map((_, idx) => (
                    <CardTable onClick={handleChange} key={idx}>
                      <DisplayText>{idx + 1}</DisplayText>
                    </CardTable>
                  ))}
                </GridWrapper>
              </Box>
              <Box>
                <Stack justifyContent="flex-end">
                  <Pagination
                    hasPrevious
                    onPrevious={() => {
                      console.log('Previous');
                    }}
                    hasNext
                    onNext={() => {
                      console.log('Next');
                    }}
                  />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Card>
    </Page>
  );
};
export default HomeScreen;
