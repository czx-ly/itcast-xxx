// 用户管理
//保存数据的属性 state  如果不使用函数的方式会报错的
export const state = () => {
  return {
    userInfo: {
      token: "",
      user: {}
    }
  };
};
//同步修改数据 mutations
export const mutations = {
  //state 就是上面的state,这个参数是固定默认的
  //data 使用调用该方法时候传入的数据
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  //清除用户数据
  clearUserInfo(state) {
    state.userInfo = {
      token: "",
      user: {}
    };
  }
};

//异步修改数据
export const actions = {};
