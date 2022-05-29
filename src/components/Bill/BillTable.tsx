import { DataTable } from '@shopify/polaris';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Box } from '../index';

const rows = [
  // {name:'Iced Cappuccino (M)', unit:'40.000',quantity: 1,total: '000.000.000',discount: '0.00%',price: '000.000.000'},
  ['Iced Cappuccino (M)', '40.000', 1, '000.000.000', '0.00%', '000.000.000'],
  ['Iced Cappuccino (M)', '40.000', 1, '000.000.000', '0.00%', '000.000.000'],
  ['Iced Cappuccino (M)', '40.000', 1, '000.000.000', '0.00%', '000.000.000'],
  ['Iced Cappuccino (M)', '40.000', 1, '000.000.000', '0.00%', '000.000.000'],
  [
    'Hot expresso with milk and cream (M)',
    '40.000',
    1,
    '000.000.000',
    '0.00%',
    '000.000.000',
  ],
  [
    'Hot expresso with milk and cream (M)',
    '40.000',
    1,
    '000.000.000',
    '0.00%',
    '000.000.000',
  ],
  ['Iced Cappuccino (M)', '40.000', 1, '000.000.000', '0.00%', '000.000.000'],
  [
    'Hot expresso with milk and cream (M)',
    '40.000',
    1,
    '000.000.000',
    '0.00%',
    '000.000.000',
  ],
  [
    'Hot expresso with milk and cream (M)',
    '40.000',
    1,
    '000.000.000',
    '0.00%',
    '000.000.000',
  ],
  ['Iced Cappuccino (M)', '40.000', 1, '000.000.000', '0.00%', '000.000.000'],
];

export default function BillTable() {
  return (
    <>
      <Box
        overflowX="hidden"
        overflowY="scroll"
        maxHeight={'35vh'}
        width="63vw"
        paddingRight="2vw"
        color="#6D7175"
      >
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Tên sản phẩm',
            'Đơn vị',
            'Số lượng',
            'Tổng',
            '% Giảm giá',
            'Thành tiền',
          ]}
          rows={rows}
        />
      </Box>
      <Box backgroundColor={'#F6F6F7'} textAlign="center">
        <IoIosArrowDown />
      </Box>
    </>
  );
}
