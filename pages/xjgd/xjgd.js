// pages/xjgd/xjgd.js
const app = getApp();
var com = require("../../utils/util.js");
var count = 0;
var list = [];
var id=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    old_man_info:[],
    kind:[],
    product:[],
    radio_val:'',
    radioCheck: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id){
      app.globalData.oldman = options.id;
    
    }
    if (options.fid){
     app.globalData.zholei = options.fid;
     
   }
    if (options.pid) {
   
      app.globalData.proId = options.pid;
    } 
    com.post('/customer/info/getCustomerById', { id: app.globalData.oldman }, 'setContent', this)
    com.post('/Servetype/info/findServetype', { belongAddressId: app.globalData.userInfo.belongAddressId }, 'setf', this)
    com.post('/Servetype/info/findServeproduct', { serveTypeId: app.globalData.zholei, belongAddressId: app.globalData.userInfo.belongAddressId }, 'setPro', this)
  },
setContent:function(e){
  this.setData({
    old_man_info: e.content,
  });
},
  setf: function (e) {
    var that = this
    count=e.content.list.length
    list=e.content.list
    for (var k = 0; k <= count-1;k++){  
      if (list[k].id== app.globalData.zholei){
        this.setData({
          kind: list[k],
        });
      }
    }
  },
  setPro: function (e) {
    var that = this
    count = e.content.list.length
    list = e.content.list
    for (var k = 0; k <= count - 1; k++) {
      if (list[k].id == app.globalData.proId) {
        this.setData({
          product: list[k],
        });
      }
    }
  },
  hint:function(i){
    if (app.globalData.zholei){
      wx.navigateTo({
        url: '../fwcp/fwcp'
      })
    }else{
      wx.showModal({
        title: '提示信息',
        content: "请先选择服务类型",
      })
    }
  },
  radioChange:function(k){
    var radioCheck = this.data.radioCheck;
    this.setData({ "radioCheck": !radioCheck });
    if (this.data.radioCheck) {
      app.globalData.num = 0;
      if (this.data.radioCheck){
        this.setData({
          radio_val: '是',
        });
      }else{
        this.setData({
          radio_val: '否',
        });
      }
    } 
  },
  submit:function(){
    if (app.globalData.oldman == 0 || app.globalData.zholei == 0 || app.globalData.proId == 0){
      wx.showModal({
        title: '提示信息',
        content: "请根据内容填写选择完整信息",
      })
    }else{
      com.post('/ApiservicePgd/info/insertServicepgd', { customerID: app.globalData.oldman, serveProduct: app.globalData.proId, serviceType: app.globalData.zholei, servePersonID: app.globalData.userInfo.id, num: app.globalData.radio_val, belongAddressId: app.globalData.userInfo.belongAddressId }, 'callBack', this)
    }
   
  },
  callBack: function (e) {
    if (e.code == 200) {
      wx.showToast({
        title: '创建成功',
        icon: 'succes',
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
    } else {
      wx.showModal({
        title: '工单创建失败',
        content: "请检查账号是否过期或网络是否出错",

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