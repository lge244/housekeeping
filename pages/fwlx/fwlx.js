// pages/fwlx/fwlx.js
const app = getApp();
var com = require("../../utils/util.js");
var cat_list=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    com.post('/Servetype/info/findServetype', { belongAddressId: app.globalData.userInfo.belongAddressId }, "setContent", this);
  },

  setContent: function (e) {
    cat_list = e.content.list;
    this.setData({
      list: cat_list,
    });
  },
  goDetails: function (e) {
    wx.navigateTo({
      url: "../xjgd/xjgd?fid=" + e.currentTarget.dataset.id,
    })
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