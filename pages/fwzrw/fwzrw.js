// pages/fwzrw/fwzrw.js
const app = getApp();
var com = require("../../utils/util.js");
var list_val =[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    com.post('/ApiservicePgd/info/findServicepgdByServepersonID', { pageNo: 1, pageSize: 1, servePersonID: app.globalData.userInfo.id, orderType:3 }, "setContent", this);
  },
  setContent: function (e) {
    console.log(e)
    if(e.content.count!=0){
      list_val = e.content.list[0]
      this.setData({
        count: e.content.count,
        list: list_val
      });
    }
   
  },
  over:function(e){
      wx.showModal({
        title: '提示信息',
        content: '请上传结束工作的照片',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: "../upload_img/upload_img?id=" + e.currentTarget.dataset.id,
            })
          }
        }
      })
    console.log(e.currentTarget.dataset.id)
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