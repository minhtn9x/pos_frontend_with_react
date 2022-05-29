import { Card, EmptyState } from '@shopify/polaris';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const all: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Card sectioned>
      <EmptyState
        heading="Không tìm thấy trang"
        action={{
          content: 'Trang chủ',
          onAction() {
            navigate('/login');
          },
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        fullWidth
      >
        <p>Trang bạn yêu cầu không tìm thấy</p>
      </EmptyState>
    </Card>
  );
};

export default all;
