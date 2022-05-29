import { Button, Card, FormLayout, TextField } from '@shopify/polaris';
import POSLayout from 'layouts/POSLayout';
import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 492px;
  height: 311px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15%;
`;

const LoginScreen = () => {
  const navigate = useNavigate();
  const defaultState = useRef({
    nameFieldValue: 'dharma@jadedpixel.com',
    emailFieldValue: 'Jaded Pixel',
  });

  const [nameFieldValue, setNameFieldValue] = useState(
    defaultState.current.nameFieldValue,
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultState.current.emailFieldValue,
  );
  const handleNameFieldChange = useCallback((value) => {
    setNameFieldValue(value);
  }, []);
  const handleEmailFieldChange = useCallback((value) => {
    setEmailFieldValue(value);
  }, []);
  return (
    <POSLayout>
      <LoginContainer>
        <Card title="Đăng nhập" sectioned>
          <FormLayout>
            <TextField
              label="Tài khoản"
              value={nameFieldValue}
              onChange={handleNameFieldChange}
              autoComplete="name"
            />
            <TextField
              type="password"
              label="Mật khẩu"
              value={emailFieldValue}
              onChange={handleEmailFieldChange}
              autoComplete="password"
            />
            <Button
              onClick={() => navigate('/dashboard/home')}
              size="large"
              fullWidth
              textAlign="center"
              primary
            >
              ĐĂNG NHẬP
            </Button>
          </FormLayout>
        </Card>
      </LoginContainer>
    </POSLayout>
  );
};
export default LoginScreen;
