// pages/index/index.js
const app = getApp();
var com = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  back_houtai: function (e) {
    // console.log(e)
    com.post('/customer/info/loginApp',e.detail.value, 'setContent',this)
  },
  setContent: function (result) { 
    app.globalData.userInfo = result.content;
   if(result.code == 200){
     wx.showToast({
       title: '登录中',
       icon: 'loading',
       duration: 2000,
       success: function () {
         
         setTimeout(function () {
           //要延时执行的代码
           wx.switchTab({
             url: '../homepage/homepage'
           })
         }, 2000) //延迟时间
       }
     })
   }else{
     wx.showModal({
       title: '登录失败',
       content: "请检查手机号或密码是否正确",
     
     })
   }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})