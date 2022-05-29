import { Button, Card, TextField } from '@shopify/polaris';
import { Icon } from '@shopify/polaris';
import { Box, Stack, StyledButton, Text } from 'components';
import React, { useCallback, useState } from 'react';

import {
  ButtonWrapper8,
  ButtonWrapper9,
  ButtonWrapper10,
  TextWrapper,
  TextWrapper2,
  TextWrapper3,
} from '../Membership.styles';

const Register = () => {
  const [customersName, setCustomersName] = useState('');
  const handleUrlChange = useCallback((value) => setCustomersName(value), []);
  return (
    <Box flex={2}>
      <Stack>
        <Box flex={1}>
          <Card.Section title="Đăng ký tài khoản thanh toán"></Card.Section>

          <TextWrapper>
            <TextField
              onChange={handleUrlChange}
              label="Họ tên"
              type="url"
              autoComplete="off"
              placeholder="Jaded Pixel"
            />
          </TextWrapper>
          <TextWrapper>
            <TextField
              onChange={handleUrlChange}
              label="Điện thoại"
              type="url"
              autoComplete="off"
              placeholder="Jaded Pixel"
            />
          </TextWrapper>
          <TextWrapper>
            <TextField
              onChange={handleUrlChange}
              label="Loại"
              type="url"
              autoComplete="off"
              placeholder="Jaded Pixel"
            />
          </TextWrapper>
          <TextWrapper>
            <TextField
              onChange={handleUrlChange}
              label="Địa chỉ"
              type="url"
              autoComplete="off"
              placeholder="Jaded Pixel"
            />
          </TextWrapper>
          <TextWrapper>
            <TextField
              onChange={handleUrlChange}
              label="Quận"
              type="url"
              autoComplete="off"
              placeholder="Jaded Pixel"
            />
          </TextWrapper>
        </Box>
        <Box flex={1}>
          <Card.Section></Card.Section>
          <TextWrapper style={{ paddingTop: '42px' }}>
            <TextField
              onChange={handleUrlChange}
              label="Email"
              type="url"
              autoComplete="off"
              placeholder="Jaded Pixel"
            />
          </TextWrapper>
          <TextWrapper>
            <TextField
              onChange={handleUrlChange}
              label="CMND"
              type="url"
              autoComplete="off"
              placeholder="Jaded Pixel"
            />
          </TextWrapper>
          <Stack>
            <Box flex={1}>
              <TextWrapper2>
                <TextField
                  onChange={handleUrlChange}
                  label="Ngày sinh"
                  type="url"
                  autoComplete="off"
                  placeholder="Ngày"
                />
              </TextWrapper2>
            </Box>
            <Box flex={1}>
              <TextWrapper3>
                <TextField
                  onChange={handleUrlChange}
                  label=""
                  type="url"
                  autoComplete="off"
                  placeholder="Tháng"
                />
              </TextWrapper3>
            </Box>
            <Box flex={1}>
              <TextWrapper3>
                <TextField
                  onChange={handleUrlChange}
                  label=""
                  type="url"
                  autoComplete="off"
                  placeholder="Năm"
                />
              </TextWrapper3>
            </Box>
          </Stack>
          <TextWrapper>
            <p style={{ margin: 0 }}>Giới tính</p>
          </TextWrapper>
          <Stack>
            <Box flex={1}>
              <ButtonWrapper8>
                <Button>Nam</Button>
              </ButtonWrapper8>
            </Box>
            <Box flex={1}>
              <ButtonWrapper9>
                <Button>Nữ</Button>
              </ButtonWrapper9>
            </Box>
            <Box flex={1}>
              <ButtonWrapper9>
                <Button>Khác</Button>
              </ButtonWrapper9>
            </Box>
          </Stack>
          <TextWrapper>
            <TextField
              onChange={handleUrlChange}
              label="Thành phố"
              type="url"
              autoComplete="off"
              placeholder="Jaded Pixel"
            />
          </TextWrapper>
        </Box>
      </Stack>
      <Stack>
        <ButtonWrapper10>
          <Button>ĐĂNG KÝ THÀNH VIÊN MỚI</Button>
        </ButtonWrapper10>
      </Stack>
    </Box>
  );
};

export default Register;
