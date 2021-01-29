// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res){
        console.log(res)
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

  },
  getUserInfo(res){
    let userInfo=res.detail.userInfo
    let pormise = new Promise((resolve,reject) => {
      wx.login({
        success(res){
          resolve(res.code)
        }
      })
    }).then(code =>{
      let data = {'code': code, client:1};
      data = Object.assign(userInfo,data);
      wx.request({
        url: 'https://www.boaiyun.cn/user/index/loginMiniapp',
        method:"POST",
        data,
        success(res){
          let token = res.data.data.token
          let userid = res.data.data.userid
          getApp().globalData.token = token
          getApp().globalData.userid = userid
          wx.navigateTo({
            url: '/pages/distinguish/distinguish',
          })
        }
      })
    })








    // wx.login({
    //   success(res){
    //     console.log(res)
    //     let data = {'code': res.code, client:1};
    //     data = Object.assign(userInfo,data);
    //     console.log(data)
    //     wx.request({
    //       url: 'http://www.boaiyun.cn/user/index/loginMiniapp',
    //       method:"POST",
    //       data,
    //       success(res){
    //         console.log(res)
    //       },
    //       fail(err){
    //         console.log(err)
    //       }
    //     })
    //   }
    // })
  }
})