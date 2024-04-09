import { Button, Result } from 'antd';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="403~"
      extra={
        <Button type="primary" href="/">
          返回首页
        </Button>
      }
    />
  );
};
