const app = getApp();
var com = require("../../utils/util.js");
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
var servicePgdId = 0;
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
  //开始录音的时候
  start: function () {

    const options = {
      duration: 10000,//指定录音的时长，单位 ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小，单位 KB
      audioSource:'auto'
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })
  },
  //停止录音
  stop: function () {
    recorderManager.stop();
    recorderManager.onStop((res) => {
      this.tempFilePath = res.tempFilePath;
      console.log('停止录音', res.tempFilePath)
      wx.uploadFile({
        url: 'https://www.hk952183.com:58443/njhk-wisdom-datasys-web-api/ApiservicePgd/info/overMC',
        filePath: res.tempFilePath,
        name: 'file',
        header: {
          "Content-Type": "multipart/form-data"//记得设置
        },
        dataType: "json",
        formData: {
          servicePgdId: servicePgdId.id
        },
        success: function (res) {
          console.log(res)
          res = JSON.parse(res.data);
          if (res.code == 200) {
            wx.showModal({
              title: '提交成功',
              content: '确定现在结束当前任务吗？',
              success: function (res) {
                if (res.confirm) {
                  wx.request({
              url:'http://www.hk952183.com:48089/njhk-wisdom-datasys-web-api/ApiservicePgd/info/overPgd',
                    data: { servicePgdId: servicePgdId.id},
                    method: "POST",
                    dataType: "json",
                    header: {
                      "Content-Type": "application/x-www-form-urlencoded" // 默认值
                    },
                    success: function (res) {
                      console.log(res)
                      if(res.data.code==200){
                        wx.showToast({
                          title: '结束成功',
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
                      }
                    },
                    fail: function (res) {
                      console.log('请求失败，请重试');
                    }
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
    })
  },
  
  setContent:function(e){
console.log(e)
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