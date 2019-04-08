// pages/ddxq/ddxq.js
const app = getApp();
var com = require("../../utils/util.js");
var boole=false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    com.post('/ApiservicePgd/info/findServicepgdById', { id: options.id }, "setContent", this);
    com.post('/ApiservicePgd/info/findServicepgdByServepersonIDing', { servePersonID: app.globalData.userInfo.id }, "setbutton", this);
  },
  setContent: function (e) {
    console.log(e)
    this.setData({
      list: e.content
    });
  },
  setbutton:function(a){
      boole= a.content.inquiry
  },
  work: function (e) {
    if(boole == false){
      var that = this
      wx.showModal({
        title: '提示信息',
        content: '开始工作前，需要上传健康数据，确定上传吗？',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: "../jksj/jksj?id=" + e.currentTarget.dataset.id,
            })
          } else {

          }
        }
      })
    }else{
      wx.showModal({
        title: '提示信息',
        content: '已经有工作在身了，不能再接单了',
      })
    }
  
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