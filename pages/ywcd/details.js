// pages/ddxq/ddxq.js
const app = getApp();
var com = require("../../utils/util.js");
var timeEnd = '';
var timeStart = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    num:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    com.post('/ApiservicePgd/info/findServicepgdById', { id: options.id }, "setContent", this);
  },
  setContent: function (e) {
    timeStart = e.content.timeStart;
    timeEnd = e.content.timeEnd;
    var start_date = new Date(timeStart.replace(/-/g, "/"));
    var end_date = new Date(timeEnd.replace(/-/g, "/"));
      var days = end_date.getTime() - start_date.getTime();
      var day = parseInt(days / (1000));
    var days = parseInt(day / 86400);
    var remain = parseInt(day % 86400);
    var hours = parseInt(remain/3600);
    var remain2 = parseInt(day % 3600);
    var mins = parseInt(remain2 / 60);
  
    this.setData({
      list: e.content,
      days: days,
      hours: hours,
      mins: mins
    });
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