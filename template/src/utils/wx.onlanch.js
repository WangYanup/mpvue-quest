import Utils from '@/utils/wx.utils';

// 获取用户授权信息
wx.getSetting({
  success: res => {
    // console.log(res)
    if (res.authSetting['scope.userInfo']) {
      let wxUserInf = '';

      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不需要在请求微信
      if (wxUserInf) {
        return;
      }

      wx.getUserInfo({
        success: res => {
          // 可以将 res 发送给后台解码出 unionId
          // console.log(res.userInfo);
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
        }
      });
    } else {
      // 主动调用授权，放置用户在storage拒绝授权时一段时间内不会再提示。
      // @@微信升级不在自动调用
    };

    // 用户地理信息授权
    // console.log(res.authSetting)
    if (!res.authSetting['scope.userLocation']) {
      wx.authorize({
        scope: 'scope.userLocation',
        success (res) {
          // console.log(res);
          Utils.getLocation().then(res => {
            // console.log(res);
          });
        },
        fail (res) {
          Utils.toast({title: '位置授权失败，请在我的账户中进行设置'});
          // console.log('fail', res);
        }
      });
    } else {
      Utils.getLocation().then(res => {
        // console.log('进入应用定位信息', res);
      });
    }
  }
});
