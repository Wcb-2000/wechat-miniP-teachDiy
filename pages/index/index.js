Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01848f55686a9a00000127164123cc.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625885201&t=7e7c170c66f47710eae1070cb9bec574",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01281255686a9a0000012716b13862.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625885295&t=6176dff9cbd15939a1ab331deab45966",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi03.c.aliimg.com%2Fimg%2Fibank%2F2014%2F906%2F017%2F1564710609_448061728.jpg&refer=http%3A%2F%2Fi03.c.aliimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625885571&t=a10619f40d115c54e7a089b27a45f18c",
      "https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=04b1bd4f71f082022d9291377bfafb8a/6d7124a4462309f739a8f47e700e0cf3d6cad656.jpg"
    ],
    imgHei: "",
    lists: [
      "https://img.alicdn.com/imgextra/i4/166965498/O1CN01OfEBQW1qU8ApTDmL1_!!166965498.jpg",
      "https://gd3.alicdn.com/imgextra/i3/2457441035/O1CN01xP7SDQ1JW4XEA8aIi_!!2457441035.jpg_400x400.jpg",
      "https://gd4.alicdn.com/imgextra/i1/0/O1CN014rAHrR1hy3ZYWiq9d_!!0-item_pic.jpg",
      "https://img.alicdn.com/imgextra/i2/3907876683/O1CN01DWaRHF1zErTmVGUX2_!!3907876683.jpg_430x430q90.jpg",
    ],
    //定义商品数据
    selectList: [{
        text: "更多小米手机产品",
        titleImg: "//img.alicdn.com/imgextra/i2/2467133155/O1CN019cHcM31ZB2GWYgYcw_!!2467133155.jpg_360x360Q90s50.jpg_.webp",
        goodList: [{
            id: 1,
            image: "//img.alicdn.com/imgextra/i2/2467133155/O1CN016mOyUN1ZB2GVbiUH7_!!2467133155.png_2200x2200Q50s50.jpg_.webp",
            title: "浙江队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check: true

          },
          {
            id: 2,
            image: "//img.alicdn.com/imgextra/i4/2467133155/O1CN01tjvhp11ZB2Gf9aWPP_!!2467133155.jpg_2200x2200Q50s50.jpg_.webp",
            title: "北京队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check: true
          },
          {
            id: 3,
            image: "//img.alicdn.com/imgextra/i2/2261828207/O1CN01gmk8w92AUr8HWqM1a_!!2261828207-0-lubanu-s.jpg_760x760Q50s50.jpg_.webp",
            title: "山西队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check: true
          },
          {
            id: 4,
            image: "//img.alicdn.com/imgextra/i1/2200758550316/O1CN01oPL9Vg1EClkslIVF3_!!2200758550316.jpg_760x760Q50s50.jpg_.webp",
            title: "福建队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check: true
          },
          {
            id: 5,
            image: "//img.alicdn.com/imgextra/i3/4289585626/O1CN01GF2PBp1rQkuxuUA5z_!!4289585626.jpg_760x760Q50s50.jpg_.webp",
            title: "上海队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check: true
          },
          {
            id: 6,
            image: "//img.alicdn.com/imgextra/i3/2200729308104/O1CN01yVOECK29jgNmve29Y_!!2200729308104-0-lubanu-s.jpg_760x760Q50s50.jpg_.webp",
            title: "广州队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check: true
          }
        ]
      },

    ]
  },

  /**
   * 当发生错误时触发error事件，event.detail = {errMsg: 'something wrong'}
   */
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },

  //点击更多系列商品跳转页面
  toCategory: function (event) {
    wx.navigateTo({
      url: '/pages/category/index',
    })
  },

  //点击跳转详情页
  toDetails: function (event) {
    //获取当前数据下标值
    var id = event.target.dataset.id
    //获取当前商品数组
    var goodList = this.data.selectList[0].goodList
    //1 获取当前商品数据，显示到详情页
    var good = goodList[id]
    //修改数据缓存 添加到缓存数据中
    wx.setStorageSync('detailList', [good])
    //2 跳转到详情页
    wx.navigateTo({
      url: '/pages/detail/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //同步版本
    // wx.setStorageSync      修改缓存数据（有则修改、无则添加）
    // wx.setStorageSync('list', 111111)
    // wx.removeStorageSync   删除缓存数据
    // wx.removeStorageSync('list')
    // wx.getStorageInfoSync  获取缓存数据信息
    // var info = wx.getStorageInfoSync()
    // console.log(info)
    // wx.getStorageSync      获取缓存数据
    //  var data = wx.getStorageSync('list')
    //  console.log(data)
    // wx.clearStorageSync    清空缓存数据

    // 异步版本
    // wx.setStorage 
    // wx.removeStorage
    // wx.getStorageInfo
    // wx.getStorage
    // wx.clearStorage

    // imgH:function(event){
    //   var imgWid = event.detail.width
    //   var imgHei = event.detail.height

    // }
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