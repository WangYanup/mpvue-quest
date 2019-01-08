import Storage from '@/utils/wx.storage';
import WxUtils from '@/utils/wx.utils';
import StorageTypeName from '@/utils/storage.typename';
import QQMapWX from '@/plugs/qqmap-wx-jssdk.js';

let qqMap = null;

// 注册腾讯地图
qqMap = new QQMapWX({
  key: 'HUKBZ-5IIWU-NORVA-BB4KA-B7TR5-GFFH7'
});

let reverseGeocoder = (res, cb) => {
  // 通过用户的定位获取当前城市
  qqMap.reverseGeocoder({
    location: {
      latitude: res.latitude,
      longitude: res.longitude
    },
    complete: res => {
      // console.log('腾讯地图定位', res);
      Storage.set(StorageTypeName.address, res);

      if (typeof cb === 'function') {
        cb(res);
      } else {
        return res;
      }
    }
  });
};

const GetAddressUseLngLat = (res, cb) => {
  if (res) {
    reverseGeocoder(res, cb);
  } else {
    WxUtils.getLocation().then(res => {
      reverseGeocoder(res, cb);
    });
  }
};

export {
  GetAddressUseLngLat
};
