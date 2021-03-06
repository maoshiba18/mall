let _mm=require('util/mm.js')
let _user ={
  //用户登录
  login:function(userinfo,resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/login.do'),
      data: userinfo,
      method: 'POST',
      success: resolve,
      error: reject
    })

  },  //检查登录状态
  checkLogin:function(resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/get_user_info.do'),
      method: 'POST',
      success: resolve,
      error: reject
    })

  },  
  // 验证用户名字是否存在
  checkUsername:function(username,resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/check_valid.do'),
      data:{
        type: 'username',
        str: username
      },
      method: 'POST',
      success: resolve,
      error: reject
    })
  }, 
   // 用户注册
  register:function(userinfo,resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/register.do'),
      data: userinfo,
      method: 'POST',
      success: resolve,
      error: reject
    })

  }, 
  // 获取用户密码提示问题 
  getQuestion:function(username,resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/forget_get_question.do'),
      data: {
        username : username
      },
      method: 'POST',
      success: resolve,
      error: reject
    })

  },
  checkAnswer:function(userInfo,resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/forget_check_answer.do'),
      data: userInfo,
      method: 'POST',
      success: resolve,
      error: reject
    })
  }, 
  // 重置密码
  resetPassword:function(userInfo,resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/forget_reset_password.do'),
      data: userInfo,
      method: 'POST',
      success: resolve,
      error: reject
    })
  },
  // 获取用户信息  
  getUserInfo: function(resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/get_information.do'),
      method: 'POST',
      success: resolve,
      error: reject
    })
  },

  updateUserInfo:function(userInfo,resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/update_information.do'),
      data: userInfo,
      method: 'POST',
      success: resolve,
      error: reject
    })
  },
  // 登录状态更新密码
  updatePassword:function(userInfo,resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/reset_password.do'),
      data: userInfo,
      method: 'POST',
      success: resolve,
      error: reject
    })
  },
  // 登出
  logout:function(resolve,reject){
    _mm.request({
      url: _mm.getServerUrl('/user/logout.do'),
      method: 'POST',
      success : resolve,
      error : reject
    })
  },
  
}
module.exports=_user