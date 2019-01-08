import StorageTypeName from './storage.typename';
import Storage from './wx.storage';
import {GetAddressUseLngLat} from '@/utils/location';

// 获取用户信息
const getUserInfo = () => {
  // 调用登录接口
  return new Promise((resolve, reject) => {
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: res => {
            resolve(res.userInfo);
          }
        });
      }
    });
  });
};

// 获取用户位置信息.
// 保存在Storage, 超过20分钟重新获取
const getLocation = () => {
  let location = Storage.get(StorageTypeName.location);
  let timestamp = parseInt(new Date() / 1000);
  let time = 20 * 60;
  return new Promise((resolve, reject) => {
    if (location && (timestamp - location.timestamp < time)) {
      // console.log('getlocation storage', location);
      resolve(location);
    } else {
      wx.getLocation({
        type: 'gcj02',
        success: (res) => {
          // console.log('getlocation wx', res);
          res.timestamp = timestamp;
          Storage.set(StorageTypeName.location, res);
          resolve(res);
        },
        fail: (err) => {
          // console.log(err);
          reject(err);
        }
      });
    }
  });
};

// 权限设置
const setAuth = () => {
  wx.openSetting({
    success: (res) => {
      /*
        * res.authSetting = {
        *   "scope.userInfo": true,
        *   "scope.userLocation": true
        * }
        */
      // console.log(res);
      if (res.authSetting['scope.userLocation']) {
        // 当打开小程序时，没有进行定位授权，都会打开设置页面，授权成功之后，重新加载此页面
        getLocation().then(resl => {
          // console.log(resl);
          GetAddressUseLngLat(resl);
        });
      }

      // if (res.authSetting['scope.userInfo']) {
      //   // 当打开小程序时，没有进行定位授权，都会打开设置页面，授权成功之后，重新加载此页面
      // }
    }
  });
};

// 获取权限列表
// @param  (scope.userInfo , scope.userLocation )
const getAuthList = (param, cb) => {
  wx.getSetting({
    success (res) {
      // console.log(res.authSetting);
      // res.authSetting = {
      //   "scope.userInfo": true,
      //   "scope.userLocation": true
      // }
      if (typeof cb === 'function') {
        if (param) {
          cb(res.authSetting[param]);
        } else {
          cb(res.authSetting);
        }
      }
    }
  });
};

const callPhone = ({phone}) => {
  wx.makePhoneCall({
    phoneNumber: phone // 仅为示例，并非真实的电话号码
  });
};

const loading = ({title = '', mask = false, show = true}) => {
  if (show) {
    wx.showLoading({
      title: title,
      mask: mask
    });
  } else {
    wx.hideLoading();
  }
};

const toast = ({title, icon = 'none', hide, dur = 2000}) => {
  if (hide) {
    wx.hideToast();
  } else {
    wx.showToast({
      title: title,
      icon: icon,
      duration: dur
    });
  }
};

const showModal = obj => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: obj.title,
      success (res) {
        resolve(res.confirm);
      }
    });
  });
};

const download = ({url}) => {
  return new Promise((resolve, reject) => {
    wx.downloadFile({
      url: url,
      success: (res) => {
        resolve(res.tempFilePath);
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
};

const setNavTitle = text => {
  wx.setNavigationBarTitle({
    title: text
  });
};

const chooseImg = ({num = 1, sizeType = ['compressed']}) => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: num,
      sizeType: sizeType,
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePaths 可以作为img标签的src属性显示图片
        resolve(res);
      }
    });
  });
};

const previewImage = ({urls}) => {
  wx.previewImage({
    urls: urls
  });
};

const setClipboardData = (text, titleParam) => {
  let showTitle = titleParam || '复制成功！';

  wx.setClipboardData({
    data: text,
    success (res) {
      toast({title: showTitle});
    }
  });
};

const pageScrollTo = (dis = 0, time = 300) => {
  wx.pageScrollTo({
    scrollTop: dis,
    duration: time
  });
};

const stopPullDownRefresh = () => {
  wx.stopPullDownRefresh();
};

export default {
  getUserInfo,
  getLocation,
  callPhone,
  loading,
  toast,
  showModal,
  download,
  setNavTitle,
  chooseImg,
  previewImage,
  setClipboardData,
  pageScrollTo,
  stopPullDownRefresh,
  setAuth,
  getAuthList
};
