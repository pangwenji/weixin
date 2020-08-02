// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       winWidth:0,
       winheigth:0,
       currentTab:0,
       scrollleft:0
  },
  bindChange:function(e){
    var that = this;
    that.setData( { currentTab: e.detail.current });
     console.log(e.detail.current )
     this.checkCor();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       var that = this;
       wx.getSystemInfo({
         success:function(res){
            that.setData({
               winWidth:res.windowWidth,
               winheigth:res.windowHeight
            })
         }
       })
  },
  checkCor:function(){    
          if(this.data.currentTab>1){      
            this.setData({       
               scrollleft:300      
              })   
           }else{      
             this.setData({        
               scrollleft:0      
            })   
           } 
     },

  swichNav:function(e){
     var that  = this;
    if(that.data.currentTab ===e.target.dataset.currentTab){
         return false;
    }else{
      this.setData({
         
        currentTab:e.target.dataset.current
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