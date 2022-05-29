import { Button, Modal, Select, TextField } from '@shopify/polaris';
import DatePickerModal from 'components/Modal/DatePickerModal';
import React, { useCallback, useState } from 'react';

import { Box } from '../index';

function BillReportModal() {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState('today');

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: 'passio hcm 1', value: 'passio hcm 1' },
    { label: 'passio hcm 2', value: 'passio hcm 2' },
    { label: 'passio hcm 3', value: 'passio hcm 3' },
  ];

  const activator = <Button onClick={toggleActive}>Xem báo cáo</Button>;

  return (
    <Modal
      small
      activator={activator}
      open={active}
      onClose={toggleActive}
      title=""
      primaryAction={{
        content: 'Xem',
        onAction: toggleActive,
      }}
      secondaryActions={[
        {
          content: 'Đóng',
          onAction: toggleActive,
        },
      ]}
    >
      <Modal.Section>
        <DatePickerModal type="text" label="Từ ngày" />
        <DatePickerModal type="text" label="Tới ngày" />
        <Select
          label="Nhân viên"
          options={options}
          onChange={handleSelectChange}
          value={selected}
        />
      </Modal.Section>
    </Modal>
  );
}

export default BillReportModal;
