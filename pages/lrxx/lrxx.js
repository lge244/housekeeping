// pages/dfwu/dfwu.js
const app = getApp();
var com = require("../../utils/util.js");
var pageNo = 1;
var pageSize = 20;
var status = 0;
var cat_list = [];
var total_page = 0;
Page({

  /**
  * 页面的初始数据
  */
  data: {
    list: [],
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    status = options.id;
    var sync = wx.getSystemInfoSync();
    this.setData({
      min_height: sync.windowHeight
    })
    com.post('/customer/info/getCustomerByList', { pageNo: pageNo, pageSize: pageSize }, "setContent", this);
  },
  setContent: function (e) {
    console.log(e)
    total_page = e.content.count;
    cat_list = e.content.list;
    this.setData({
      list: cat_list,
    });
  },
/**
* 下拉显示更多
*/
  onList: function () {
    pageNo = pageNo + 1;
    pageSize = pageSize + 10;
    if (total_page >= pageSize) {
      com.post('/customer/info/getCustomerByList', { pageNo: pageNo, pageSize: pageSize}, "setContent", this);
    }
  },
  goDetails: function (e) {
    wx.navigateTo({
      url: "../xjgd/xjgd?id=" + e.currentTarget.dataset.id,
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