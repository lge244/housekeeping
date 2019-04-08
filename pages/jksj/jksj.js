// pages/jksj/jksj.js
const app = getApp();
var com = require("../../utils/util.js");
var id=0;
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
    id = options.id
    this.setData({
      id: options.id
    });
  },
  health: function (e) {
    com.post('/ApiservicePgd/info/updateServicepgd', e.detail.value, 'setContent', this)
  },
  setContent: function (result) {
    if (result.code == 200) {
      wx.showToast({
        title: '上传成功',
        icon: 'success',
        duration: 2000,
        success: function () {
          setTimeout(function () {
            //要延时执行的代码
            wx.redirectTo({
              url: '../sczp/sczp?id='+id
            })
          }, 2000) //延迟时间
        }
      })
    } else {
      wx.showModal({
        title: '上传失败',
        content: "请检查账号是否过期或者网络错误",

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