// pages/mine/mine.js
var app=getApp();
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
  viewDeliver:()=>{
    wx.navigateTo({
      url: '/pages/deliver/deliver',
    })
  },
  viewResume:()=>{
    
  },
  viewInterview:()=>{
   wx.navigateTo({
     url: '/pages/interview/interview',
   })
  },
  viewCollect:()=>{
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  viewInterviews:()=>{
    console.log("sdfd")
    wx.navigateTo({
      url: '/pages/interviewpage/interviewpage',
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