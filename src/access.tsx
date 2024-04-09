export default (initialState: API.UserInfo) => {
  console.log('🚀 ~ initialState:', initialState);
  // 'admin', 'user', 'editor'
  const canSeeAdmin = !!(initialState && initialState.role === 'admin');
  const canSeeUser = !!(initialState && initialState.role === 'user');
  const canSeeEditor = !!(initialState && initialState.role === 'editor');

  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://umijs.org/docs/max/access
  return {
    canSeeAdmin,
    canSeeUser,
    canSeeEditor,
  };
};
