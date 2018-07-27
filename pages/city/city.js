// pages/city/city.js
var vm = null
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    vm = this
    var screenHeight = getApp().globalData.screenHeight
    var windowHeight = getApp().globalData.windowHeight
    console.log("可用窗口高度" + JSON.stringify(windowHeight))
    var place = screenHeight + 100 //导航栏高度
    vm.setData({
      pageTopHeight: screenHeight,
      allHeight: place,
    })
  },

  //跳转到地图详情页
  jumpCityMap: function() {
    util.jumpPage(1, "/pages/cityMap/cityMap")
  },

  //跳转到支付页
  jumpPayPage: function() {
    util.jumpPage(1, "/pages/pay/pay")
  },

  //返回
  back: function() {
    util.jumpPage(4, 1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})