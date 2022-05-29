import { Button, DatePicker, Icon, Modal, TextField } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';
import { Box, Stack, Text } from 'components';
import React, { useCallback, useState } from 'react';

function DatePickerPopup() {
  const [{ month, year }, setDate] = useState({ month: 0, year: 2022 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Mon Jan 18 2022 00:00:00 '),
    end: new Date('Mon Jan 18 2022 00:00:00 '),
  });

  const handleMonthChange = useCallback((month, year) => setDate({ month, year }), []);

  return (
    <>
      <Box textAlign={'center'}>{'Month: ' + (month + 1)}</Box>
      <DatePicker
        month={month}
        year={year}
        onChange={setSelectedDates}
        onMonthChange={handleMonthChange}
        selected={selectedDates}
      />
    </>
  );
}

function DatePickerModal(props: any) {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const date = new Date('Mon Apr 18 2022 00:00:00 ');

  const DateTextField = () => {
    const [value, setValue] = useState(
      date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
    );
    const handleChange = useCallback((newValue) => setValue(newValue), []);

    return (
      <Box onClick={toggleActive}>
        <TextField
          label={props.label}
          value={value}
          onChange={handleChange}
          autoComplete="off"
        />
      </Box>
    );
  };

  const DateHeader = () => {
    const [display, setDisplay] = useState(true);
    const [textFieldValue, setTextFieldValue] = useState('');
    const handleTextFieldChange = useCallback((value) => setTextFieldValue(value), []);
    return (
      <>
        <Box
          width="100%"
          paddingY={'10px'}
          backgroundColor="white"
          display={display ? 'block' : 'none'}
        >
          <Stack
            justifyContent="space-between"
            alignItems={'center'}
            width="50%"
            marginY={'16px'}
          >
            <Box
              onClick={() => setDisplay(!display)}
              style={{ cursor: 'pointer' }}
              paddingX="13px"
            >
              <Icon source={SearchMinor}></Icon>
            </Box>

            <Text
              fontWeight={600}
              fontSize="20px"
              paddingLeft={'55%'}
              onClick={toggleActive}
              style={{ cursor: 'pointer' }}
            >
              {'03/08/2022'}
            </Text>
          </Stack>
        </Box>
        <Box display={!display ? 'block' : 'none'} paddingY={'18px'}>
          <TextField
            label=""
            type="text"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            placeholder="Tìm kiếm"
            prefix={
              <Box onClick={() => setDisplay(!display)} style={{ cursor: 'pointer' }}>
                <Icon source={SearchMinor}></Icon>
              </Box>
            }
            autoComplete="off"
          />
        </Box>
      </>
    );
  };

  const activator = props.type == 'text' ? <DateTextField /> : <DateHeader />;

  return (
    <Modal
      small
      activator={activator}
      open={active}
      onClose={toggleActive}
      title=""
      primaryAction={{
        content: 'Xong',
        onAction: toggleActive,
      }}
      secondaryActions={[
        {
          content: 'Hủy',
          onAction: toggleActive,
        },
      ]}
    >
      <Modal.Section>
        <Box height="30vh">
          <DatePickerPopup></DatePickerPopup>
        </Box>
      </Modal.Section>
    </Modal>
  );
}

export default DatePickerModal;
