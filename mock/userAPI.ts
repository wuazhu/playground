import Mockjs, { Random } from 'mockjs';

export default {
  'POST /api/v1/login': (req: any, res: any) => {
    console.log('🚀 ~ req:', req);
    // const bool = Random.boolean()
    res.json({
      data: Mockjs.mock({
        id: '@id',
        name: Random.cname(),
        role: Random.pick(['admin', 'user', 'editor']),
      }),
      success: true,
      code: 0,
      message: 'success',
    });
  },
  'GET /api/v1/userInfo': (req: any, res: any) => {
    // const bool = Random.boolean()
    res.json({
      data: Mockjs.mock({
        id: '@id',
        name: Random.cname(),
        role: Random.pick(['admin', 'user', 'editor']),
      }),
      success: true,
      code: 0,
      message: 'success',
    });
  },
};
