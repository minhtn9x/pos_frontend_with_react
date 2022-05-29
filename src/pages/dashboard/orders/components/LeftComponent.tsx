import {
  Button,
  Collapsible,
  DisplayText,
  Icon,
  Pagination,
  Scrollable,
  Tabs,
} from '@shopify/polaris';
import {
  DragHandleMinor,
  MinusMinor,
  MobileCancelMajor,
  PlusMinor,
} from '@shopify/polaris-icons';
import { Box, Spacer, Stack, StyledButton, Text } from 'components';
import React, { useCallback, useState } from 'react';
import { SURFACECOLORS } from 'theme/colors';

const LeftComponent = () => {
  const categories = [
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
    'Best ',
  ];

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-4',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-4',
    },
    {
      id: 'accepts-marketing-4',
      content: ' marketing',
      panelID: 'accepts-marketing-content-4',
    },
    {
      id: 'repeat-customers-4',
      content: ' customers',
      panelID: 'repeat-customers-content-4',
    },
    {
      id: 'prospects-4',
      content: 'Prospects',
      panelID: 'prospects-content-4',
    },
    {
      id: 'prospects-5',
      content: 'Prospects',
      panelID: 'prospects-content-4',
    },
    {
      id: 'prospects-6',
      content: 'Prospects',
      panelID: 'prospects-content-4',
    },
  ];
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);
  return (
    <Stack flexDirection="row-reverse">
      <Box width="100%" paddingRight="50px">
        <Stack width="100%" height="100px" flexDirection="row">
          <Box flex="8">
            <Tabs
              fitted
              tabs={tabs}
              selected={selected}
              onSelect={handleTabChange}
            ></Tabs>
            <Collapsible
              open={open}
              id="basic-collapsible"
              transition={{ timingFunction: 'ease-in-out' }}
            >
              <Tabs
                tabs={tabs}
                selected={selected}
                onSelect={handleTabChange}
                disclosureText="More views"
                fitted
              ></Tabs>
            </Collapsible>
          </Box>
          <Box flex="1" height="100%">
            <Button
              size="medium"
              onClick={handleToggle}
              ariaExpanded={open}
              ariaControls="basic-collapsible"
              icon={DragHandleMinor}
            ></Button>
          </Box>
        </Stack>
        <Box flex="7" width="100%" height="100%" marginTop="28px" marginLeft="40px">
          <Box marginBottom="20px" fontSize="30px">
            Best Seller
          </Box>
          <Box
            marginRight="50px"
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gridColumnGap="16px"
            gridRowGap="16px"
          >
            {categories.map((_, idx) => (
              <Box
                key={idx}
                borderRadius="10px"
                backgroundColor="white"
                height="123px"
                display="row"
              >
                <Stack>
                  <Box
                    borderBottomLeftRadius="10px"
                    borderTopLeftRadius="10px"
                    borderRightStyle="groove"
                    borderRightWidth="2px"
                    backgroundColor="white"
                    height="123px"
                    flex="3"
                  >
                    <Stack justifyItems="space-between" flexDirection="column">
                      <Text
                        fontWeight="bold"
                        marginLeft="10px"
                        marginTop="10px"
                        fontSize="14px"
                      >
                        Test cai the card
                      </Text>
                      <Spacer mb="50px"></Spacer>
                      <Text marginLeft="10px">40.000</Text>
                    </Stack>
                  </Box>
                  <Box
                    borderBottomRightRadius="10px"
                    borderTopRightRadius="10px"
                    height="123px"
                    flex="1"
                  >
                    <Stack height="100%" flexDirection="column">
                      <Box
                        height="50%"
                        borderBottomStyle="groove"
                        borderBottomWidth="2px"
                        marginY="auto"
                      >
                        <Spacer mb="20px"></Spacer>
                        <Icon source={PlusMinor} color="base" />
                      </Box>
                      <Box height="50%">
                        <Spacer mb="20px"></Spacer>
                        <Icon source={MinusMinor} color="base" />
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
        <Box flex="1" height="10%" marginTop="15px " marginLeft="590px">
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
        </Box>
      </Box>
      <Box width="500px" position="absolute" height="800px" display="none" zIndex="1">
        <Box
          borderTopLeftRadius="5px"
          alignItems="center"
          height="60px"
          width="60px"
          marginTop="400px"
          backgroundColor="green"
          fontSize="50px"
          borderBottomLeftRadius="5px"
          borderColor="black"
        >
          <Icon source={MobileCancelMajor} color="base" />
        </Box>
        <Box backgroundColor="white" width="100%" height="700px">
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted></Tabs>
        </Box>
      </Box>
    </Stack>
  );
};
export default LeftComponent;
