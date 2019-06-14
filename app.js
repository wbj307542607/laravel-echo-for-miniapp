//app.js
const io = require('libs/weapp.socket.io.js')
const Echo = require("libs/echo.js")
const choose=false
const developing = false
App({
  onLaunch: function (options) {
    this.initLaravelEcho();
  },

  onShow: function (options) {
    
  },
  
  globalData: {
    
    laravelEcho: {} // laravel-echo
  },
  initLaravelEcho:function(){
    let that = this
    that.globalData.laravelEcho = new Echo({
      broadcaster: 'socket.io',
      host: 'http://127.0.0.1:6001'      //地址填写实际项目的地址
    });
  }

})
