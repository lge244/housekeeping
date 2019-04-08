// pages/fwcp/fwcp.js
const app = getApp();
var com = require("../../utils/util.js");
var cat_list=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function (options) {
  
    com.post('/Servetype/info/findServeproduct', { serveTypeId: app.globalData.zholei, belongAddressId: app.globalData.userInfo.belongAddressId}, "setContent", this);
  },
  setContent: function (e) {
    cat_list = e.content.list;
    this.setData({
      list: cat_list,
    });
  },
  goProduct:function(i){
    wx.navigateTo({
      url: "../xjgd/xjgd?pid=" + i.currentTarget.dataset.id,
    })
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