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