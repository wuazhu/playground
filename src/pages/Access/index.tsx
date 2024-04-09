import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  console.log('🚀 ~ access:', access);
  return (
    <PageContainer
      ghost
      header={{
        title: '按钮级权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
      <Access accessible={access.canSeeEditor}>
        <Button>只有 canSeeEditor 可以看到这个按钮</Button>
      </Access>
      <Access accessible={access.canSeeUser}>
        <Button>只有 canSeeUser 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
