var baseUrl = 'http://guojingfeng.nat123.net/api/';

module.exports = function(apiName,options,callback){
  return new Promise(
    (resolve,reject)=>{
      var config = {
        url :baseUrl +apiName,
        method:'GET',
        success:function(res){
          resolve(res)
        },
        fail:function(){
          reject('请求失败的')
        }
      }
      if(options){
        Object.assign(config,options);
      }
      var requestTask = wx.request(config)
      callback && callback(requestTask)
    }
  ).catch(err=>console.log(err))
}