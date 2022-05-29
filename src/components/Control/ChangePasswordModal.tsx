import { Button, Modal } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';

export default function ChangePasswordModal(props: any) {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const activator = (
    <Button textAlign="center" fullWidth destructive onClick={toggleActive}>
      Đổi mật khẩu
    </Button>
  );

  return (
    <Modal
      small
      activator={activator}
      open={active}
      onClose={toggleActive}
      title="Đổi mật khẩu thành công"
      primaryAction={{
        content: 'OK',
        onAction: toggleActive,
      }}
    >
      <Modal.Section>
        Vui lòng sử dụng mật khẩu mới vào lần đăng nhập tiếp theo
      </Modal.Section>
    </Modal>
  );
}
