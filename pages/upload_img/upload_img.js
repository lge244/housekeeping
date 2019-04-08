// pages/sczp/sczp.js
const app = getApp();
var com = require("../../utils/util.js");
var servicePgdId = '';
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
    
    servicePgdId = options;
  },

  uploadimg: function () {
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

      success: function (res) {
        //console.log(res)
        //前台显示
        that.setData({
          source: res.tempFilePaths
        })

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(servicePgdId)
        wx.uploadFile({
          url: 'http://www.hk952183.com:48089/njhk-wisdom-datasys-web-api/ApiservicePgd/info/over',
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            "Content-Type": "multipart/form-data"//记得设置
          },
          dataType: "json",
          formData: {
            servicePgdId: servicePgdId.id
          },
          success: function (res) {
            res = JSON.parse(res.data);
            if (res.code == 200) {
              wx.showModal({
                title: '上传成功',
                content: '工作完成前,需要录制语音评价,确定录制吗?',
                success: function (res) {
                  if (res.confirm) {
                    wx.navigateTo({
                      url: "../ly/ly?id=" + servicePgdId.id,
                    })
                  }
                }
              })
            } else {
              wx.showModal({
                title: '出错咯',
                content: "请检查账号是否过期或者网络错误",
              })
            }
          }
        })

      }
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