import { Button, Card, ResourceItem, ResourceList, TextField } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';
import { Box, Stack, Text } from 'components';
import CircleIcon from 'components/Icon/CircleIcon';
import React, { useCallback, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import DatePickerModal from '../Modal/DatePickerModal';

const billStatus = [
  { name: 'Đang chế biến', color: '#79FF10' },
  { name: 'Hủy', color: '#CE3939' },
  { name: 'Hủy sớm', color: '#EBE322' },
];

const MOCK_ORDERS = [...Array(10)].map((index) => ({
  id: index,
  url: '#',
  orderId: 'PQ-136-TA-3ASDGASX',
  price: '000,000,000',
  type: 'Giao hàng',
  time: '15:16',
  status: 'Đang chế biến',
}));

export default function BillList() {
  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  return (
    <Card>
      <Box height={'72vh'}>
        <DatePickerModal />

        <Box maxHeight={'88%'} overflowX="hidden" overflowY="scroll" width={'104%'}>
          <ResourceList
            items={MOCK_ORDERS}
            renderItem={renderItem}
            resourceName={resourceName}
          />
        </Box>

        <Box width={'100%'} backgroundColor="#F6F6F7" textAlign={'center'}>
          <IoIosArrowDown />
        </Box>
      </Box>
    </Card>
  );
}
function renderItem(item: any) {
  const { id, url, orderId, price, type, time, status } = item;

  return (
    <ResourceItem
      id={id}
      url={url}
      //media={media}
    >
      <Stack justifyContent={'space-between'} marginY="5px">
        <Stack alignItems={'center'}>
          <Box paddingRight={'23px'}>
            <CircleIcon
              color={billStatus.map((stt) => {
                if (status == '') return;
                if (stt.name == status) return stt.color;
              })}
            />
          </Box>

          <Box>
            <Text fontWeight={600} fontSize="20px">
              {time}
            </Text>
            <Text color="#8C9196">{orderId}</Text>
          </Box>
        </Stack>

        <Box textAlign="right">
          <Text fontWeight={600} fontSize="20px">
            {price}
          </Text>
          <Text color="#8C9196">{type}</Text>
        </Box>
      </Stack>
    </ResourceItem>
  );
}
