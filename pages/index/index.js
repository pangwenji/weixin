//index.js
//获取应用实例
// const app = getApp()
// var http =require()
Page({
  data: {
    pageNo:1,
    showBtn:false,
    isLoading:false,
    time:"今天 16：23",
    positionList:[]
  },

  //  gotoCustomInfo:function(){
  //    app.navTo('customInfo')
  //  },

  //  viewPositionDetail:(e)=>{
  //   app.navTo('postionDetail',{postionId:e.currentTarget.dataset.pid})
  //  },
  //  loadMore(){
  //   this.loadData(this.data.pageNo+1)
  //  },

  //  loadData(pageNo){
  //  let temData = {
  //     isLoading:true
  //  }
  //  var options = {}
  //  if(pageNo){
  //    options.data ={pageNo:pageNo}
  //  }
  //   this.setData(temData)
  //   http(app.apiName.indexList,options).then(res=>{
  //     temData.isLoading = false;
  //     for(let item of res.data.page.result){
  //       item.companyLogo = app.picHost + item.companyLogo
  //     }
  //     parseInt(res.data.content.data.page.start) + res.data.content.data.page.pageSize < res.data.content.data.page.totalCount ? tempData.showBtn = true : tempData.showBtn = false

  //     tempData.pageNo = res.data.content.data.page.pageNo

  //     pageNo ? tempData.positionList = this.data.positionList.concat(res.data.content.data.page.result) : tempData.positionList = res.data.content.data.page.result

  //     this.setData(tempData)
  //   })
  // },
  // onLoad: function () {
  //   this.loadData()
  // }
  getTodayDate() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    return [year, month, day].map(formatNumber).join('-')
    } 
})

