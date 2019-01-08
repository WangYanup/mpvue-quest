import UncheckUtils from '@/utils/uncheck.utils';
import MD5 from '@/plugs/md5';

export default {
  /**
   * 调用微信支付请求
  */

  wxPayment ({sign, cb}) {
    let timeStamp = new Date().getTime();
    let nonceStr = UncheckUtils.PlugUtils.generateMixed();
    let paySign = MD5.hex_md5('appId=wx0d9fe1abe5ba75b6&nonceStr=' + nonceStr + '&package=prepay_id=' + sign + '&signType=MD5&timeStamp=' + timeStamp + '&key=yf7hCy5wiGzhHZAj3HLSGiM9mMtU61qt');
    wx.requestPayment({
      'timeStamp': timeStamp + '',
      'nonceStr': nonceStr,
      'package': 'prepay_id=' + sign,
      'signType': 'MD5',
      'paySign': paySign.toUpperCase(),
      'success' (res) {
        if (typeof cb === 'function') {
          let params = {status: true, obj: res};
          cb(params);
        }
        // console.log(res);
      },
      'fail' (err) {
        // console.log(err);
        if (typeof cb === 'function') {
          let params = {status: false, obj: err};
          cb(params);
        }
      }
    });
  }

};
