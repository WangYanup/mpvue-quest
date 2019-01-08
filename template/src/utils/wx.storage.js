class Storage {
  static set (key, val) {
    if (val) {
      return wx.setStorage({
        key: key,
        data: val
      });
    } else {
      console.log('保存storage错误', val);
    }
  }

  static get (key) {
    let result = wx.getStorageSync(key);
    if (result) {
      return result;
    } else {
      return false;
    }
  }

  static remove (key) {
    return wx.removeStorageSync(key);
  }
}

export default Storage;
