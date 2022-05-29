import { Button, Icon, Modal, Spinner } from '@shopify/polaris';
import { CircleInformationMajor, CircleTickMajor } from '@shopify/polaris-icons';
import React, { useCallback, useState } from 'react';

import { Box, Stack } from '..';

export default function UpdatedNotifyModal(props: any) {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [success, setSuccess] = useState(true);

  const toggleActive = useCallback(() => setActive1((active1) => !active1), []);

  function updating() {
    toggleActive();
    setTimeout(() => {
      setActive2(!active2);
      toggleActive();
    }, 1000);
  }

  // const activator = (
  //   <Button fullWidth onClick={toggleActive}>
  //     {props.title}
  //   </Button>
  // );

  return (
    <>
      <Modal
        small
        activator={
          <Button fullWidth onClick={updating}>
            {props.title}
          </Button>
        }
        open={active1}
        onClose={() => setActive2(false)}
        title=""
      >
        <Modal.Section>
          <Box paddingY="5vh">
            <Box display="flex" justifyContent={'center'} paddingBottom="2vh">
              <Spinner accessibilityLabel="Spinner example" size="small" />
            </Box>
            <Box display="flex" justifyContent={'center'}>
              Đang cập nhật
            </Box>
          </Box>
        </Modal.Section>
      </Modal>

      {success ? (
        <Modal small open={active2} onClose={() => setActive2(false)} title="">
          <Box paddingY="8vh">
            <Box display="flex" justifyContent={'center'} paddingBottom="2vh">
              <Icon source={CircleTickMajor} color="warning" />
            </Box>
            <Box display="flex" justifyContent={'center'}>
              Cập nhật thành công
            </Box>
          </Box>
        </Modal>
      ) : (
        <Modal small open={active2} onClose={() => setActive2(false)} title="">
          <Box paddingY="8vh">
            <Box display="flex" justifyContent={'center'} paddingBottom="2vh">
              <Icon source={CircleInformationMajor} color="critical" />
            </Box>
            <Box display="flex" justifyContent={'center'}>
              Chưa có bản cập nhật mới
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
}
