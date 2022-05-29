import { Button, Card, Modal, TextField } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';

import { Box, Stack } from '..';

const ChangePasswordTab = () => {
  const [active, setActive] = useState(false);
  const [oldpass, setOldPass] = useState('');
  const [newpass, setNewPass] = useState('');
  const [checknew, setCheckNew] = useState('');
  const [next, setNext] = useState(false);
  const [error, setError] = useState(false);
  const handleChangeOld = useCallback((newValue) => setOldPass(newValue), []);
  const handleChangeNew = useCallback((newValue) => setNewPass(newValue), []);
  const handleChangeCheck = useCallback((newValue) => setCheckNew(newValue), []);
  const toggleActive = useCallback(() => {
    setActive((active) => !active);
  }, []);
  function changePass() {
    toggleActive();
    setNext(false);
  }
  function checkOldPass() {
    if (oldpass == '1') {
      setNext(true);
      setError(false);
    } else setError(true);
  }

  if (next)
    return (
      <Stack justifyContent={'center'} alignItems="center" height={'70vh'}>
        <Card>
          <Stack width="35vw" height="25vh" alignItems={'center'} justifyContent="center">
            <Card.Section>
              <Box width={'30vw'}>
                <Box paddingBottom={'1vh'}>
                  <TextField
                    label={'Nhập mật khẩu mới'}
                    value={newpass}
                    onChange={handleChangeNew}
                    autoComplete="off"
                    placeholder="Ex: 123456"
                    type="password"
                  />
                </Box>
                <Box paddingBottom={'1vh'}>
                  <TextField
                    label={'Nhập lại mật khẩu mới'}
                    value={checknew}
                    onChange={handleChangeCheck}
                    autoComplete="off"
                    placeholder="Ex: 123456"
                    type="password"
                    error={
                      checknew != newpass
                        ? 'Mật khẩu không trùng khớp'
                        : newpass == '1'
                        ? 'Mật khẩu trùng với mật khẩu cũ'
                        : false
                    }
                  />
                </Box>
                <Box paddingTop={'2vh'}>
                  <Button textAlign="center" fullWidth destructive onClick={toggleActive}>
                    Đổi mật khẩu
                  </Button>
                  <Modal
                    small
                    open={active}
                    onClose={toggleActive}
                    title="Đổi mật khẩu thành công"
                    primaryAction={{
                      content: 'OK',
                      onAction: changePass,
                    }}
                  >
                    <Modal.Section>
                      Vui lòng sử dụng mật khẩu mới vào lần đăng nhập tiếp theo
                    </Modal.Section>
                  </Modal>
                </Box>
              </Box>
            </Card.Section>
          </Stack>
        </Card>
      </Stack>
    );

  return (
    <Stack justifyContent={'center'} alignItems="center" height={'70vh'}>
      <Card>
        <Stack width="35vw" height="25vh" alignItems={'center'} justifyContent="center">
          <Card.Section>
            <Box width={'30vw'}>
              <Box paddingBottom={'2vh'}>
                <TextField
                  label={'Nhập mật khẩu cũ'}
                  value={oldpass}
                  onChange={handleChangeOld}
                  autoComplete="off"
                  error={error ? 'Sai mật khẩu' : false}
                  placeholder="Ex: 123456"
                  type="password"
                  helpText="password: 1"
                />
              </Box>
              <Box paddingTop={'2vh'}>
                <Button
                  textAlign="center"
                  fullWidth
                  destructive
                  onClick={() => checkOldPass()}
                >
                  OK
                </Button>
              </Box>
            </Box>
          </Card.Section>
        </Stack>
      </Card>
    </Stack>
  );
};

export default ChangePasswordTab;
