global.webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkAPIHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NetworkAPIVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NetworkParamType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _filterValidateParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_core__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_mapKeys__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_mapKeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_mapKeys__);




var NetworkAPIVersion = {
  v1_version: ''
};

var NetworkAPIHost = '你的域名信息';

var NetworkParamTypeClass = function NetworkParamTypeClass(type) {
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, NetworkParamTypeClass);

  this.type = type;
  switch (type) {
    case 'array':
      this.validate = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash_core___default.a.isArray(data);
      };
      break;
    case 'string':
      this.validate = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash_core___default.a.isString(data);
      };
      break;
    case 'number':
      this.validate = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash_core___default.a.isNumber(data);
      };
      break;
    case 'boolean':
      this.validate = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash_core___default.a.isBoolean(data);
      };
      break;
    case 'object':
      this.validate = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash_core___default.a.isObject(data);
      };
      break;
  }
};

var NetworkParamType = {
  array: new NetworkParamTypeClass('array'),
  string: new NetworkParamTypeClass('string'),
  number: new NetworkParamTypeClass('number'),
  boolean: new NetworkParamTypeClass('boolean'),
  file: new NetworkParamTypeClass('file'),
  object: new NetworkParamTypeClass('object')
};

var _filterValidateParams = function _filterValidateParams(actionParams, requestParams) {
  var filteredParams = {};

  __WEBPACK_IMPORTED_MODULE_2_lodash_mapKeys___default()(actionParams, function (paramValue, paramName) {
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash_core___default.a.isUndefined(requestParams[paramName])) {
      filteredParams[paramName] = requestParams[paramName];
      // console.log(filteredParams);
    }
  });

  // make exceptions for files
  // MapKeys(requestParams, (value, key) => {
  //   if (value instanceof File) {
  //     filteredParams[key] = value;
  //   }
  // });

  return filteredParams;
};



/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var State = {
  overflowHiddenStatus: false
};

/* harmony default export */ __webpack_exports__["a"] = (State);

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_type__ = __webpack_require__(50);



var Mutations = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__mutation_type__["a" /* OVERFLOW_HIDDEN_STATUS */], function (state, params) {
  state.overflowHiddenStatus = params;
});

/* harmony default export */ __webpack_exports__["a"] = (Mutations);

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import MapKeys from 'lodash/mapKeys';
// import * as MutationsType from './mutation.type';

var Search = {
  state: {},
  mutations: {}
};

var Discovery = {
  state: {},
  mutations: {}
};

/* harmony default export */ __webpack_exports__["a"] = ({
  Search: Search,
  Discovery: Discovery
});

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var Storage = function () {
  function Storage() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Storage);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Storage, null, [{
    key: 'set',
    value: function set(key, val) {
      if (val) {
        return wx.setStorage({
          key: key,
          data: val
        });
      } else {
        console.log('保存storage错误', val);
      }
    }
  }, {
    key: 'get',
    value: function get(key) {
      var result = wx.getStorageSync(key);
      if (result) {
        return result;
      } else {
        return false;
      }
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      return wx.removeStorageSync(key);
    }
  }]);

  return Storage;
}();

/* harmony default export */ __webpack_exports__["a"] = (Storage);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var StorageTypeName = {
  openid: 'openid',
  address: 'address',
  location: 'location'
};

/* harmony default export */ __webpack_exports__["a"] = (StorageTypeName);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_typename__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wx_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_location__ = __webpack_require__(248);





// 获取用户信息
var getUserInfo = function getUserInfo() {
  // 调用登录接口
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.login({
      success: function success() {
        wx.getUserInfo({
          success: function success(res) {
            resolve(res.userInfo);
          }
        });
      }
    });
  });
};

// 获取用户位置信息.
// 保存在Storage, 超过20分钟重新获取
var getLocation = function getLocation() {
  var location = __WEBPACK_IMPORTED_MODULE_2__wx_storage__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_1__storage_typename__["a" /* default */].location);
  var timestamp = parseInt(new Date() / 1000);
  var time = 20 * 60;
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    if (location && timestamp - location.timestamp < time) {
      // console.log('getlocation storage', location);
      resolve(location);
    } else {
      wx.getLocation({
        type: 'gcj02',
        success: function success(res) {
          // console.log('getlocation wx', res);
          res.timestamp = timestamp;
          __WEBPACK_IMPORTED_MODULE_2__wx_storage__["a" /* default */].set(__WEBPACK_IMPORTED_MODULE_1__storage_typename__["a" /* default */].location, res);
          resolve(res);
        },
        fail: function fail(err) {
          // console.log(err);
          reject(err);
        }
      });
    }
  });
};

// 权限设置
var setAuth = function setAuth() {
  wx.openSetting({
    success: function success(res) {
      /*
        * res.authSetting = {
        *   "scope.userInfo": true,
        *   "scope.userLocation": true
        * }
        */
      // console.log(res);
      if (res.authSetting['scope.userLocation']) {
        // 当打开小程序时，没有进行定位授权，都会打开设置页面，授权成功之后，重新加载此页面
        getLocation().then(function (resl) {
          // console.log(resl);
          Object(__WEBPACK_IMPORTED_MODULE_3__utils_location__["a" /* GetAddressUseLngLat */])(resl);
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
var getAuthList = function getAuthList(param, cb) {
  wx.getSetting({
    success: function success(res) {
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

var callPhone = function callPhone(_ref) {
  var phone = _ref.phone;

  wx.makePhoneCall({
    phoneNumber: phone // 仅为示例，并非真实的电话号码
  });
};

var loading = function loading(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === undefined ? '' : _ref2$title,
      _ref2$mask = _ref2.mask,
      mask = _ref2$mask === undefined ? false : _ref2$mask,
      _ref2$show = _ref2.show,
      show = _ref2$show === undefined ? true : _ref2$show;

  if (show) {
    wx.showLoading({
      title: title,
      mask: mask
    });
  } else {
    wx.hideLoading();
  }
};

var toast = function toast(_ref3) {
  var title = _ref3.title,
      _ref3$icon = _ref3.icon,
      icon = _ref3$icon === undefined ? 'none' : _ref3$icon,
      hide = _ref3.hide,
      _ref3$dur = _ref3.dur,
      dur = _ref3$dur === undefined ? 2000 : _ref3$dur;

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

var showModal = function showModal(obj) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showModal({
      title: obj.title,
      success: function success(res) {
        resolve(res.confirm);
      }
    });
  });
};

var download = function download(_ref4) {
  var url = _ref4.url;

  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.downloadFile({
      url: url,
      success: function success(res) {
        resolve(res.tempFilePath);
      },
      fail: function fail(res) {
        reject(res);
      }
    });
  });
};

var setNavTitle = function setNavTitle(text) {
  wx.setNavigationBarTitle({
    title: text
  });
};

var chooseImg = function chooseImg(_ref5) {
  var _ref5$num = _ref5.num,
      num = _ref5$num === undefined ? 1 : _ref5$num,
      _ref5$sizeType = _ref5.sizeType,
      sizeType = _ref5$sizeType === undefined ? ['compressed'] : _ref5$sizeType;

  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.chooseImage({
      count: num,
      sizeType: sizeType,
      sourceType: ['album', 'camera'],
      success: function success(res) {
        // tempFilePaths 可以作为img标签的src属性显示图片
        resolve(res);
      }
    });
  });
};

var previewImage = function previewImage(_ref6) {
  var urls = _ref6.urls;

  wx.previewImage({
    urls: urls
  });
};

var setClipboardData = function setClipboardData(text, titleParam) {
  var showTitle = titleParam || '复制成功！';

  wx.setClipboardData({
    data: text,
    success: function success(res) {
      toast({ title: showTitle });
    }
  });
};

var pageScrollTo = function pageScrollTo() {
  var dis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  wx.pageScrollTo({
    scrollTop: dis,
    duration: time
  });
};

var stopPullDownRefresh = function stopPullDownRefresh() {
  wx.stopPullDownRefresh();
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getUserInfo: getUserInfo,
  getLocation: getLocation,
  callPhone: callPhone,
  loading: loading,
  toast: toast,
  showModal: showModal,
  download: download,
  setNavTitle: setNavTitle,
  chooseImg: chooseImg,
  previewImage: previewImage,
  setClipboardData: setClipboardData,
  pageScrollTo: pageScrollTo,
  stopPullDownRefresh: stopPullDownRefresh,
  setAuth: setAuth,
  getAuthList: getAuthList
});

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug_data__ = __webpack_require__(245);



/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取用户的openid，使用wxlogin的code去后台获取
  */
  getOpenid: {
    url: 'user',
    method: 'get',
    apiVersion: __WEBPACK_IMPORTED_MODULE_0__config__["b" /* NetworkAPIVersion */].v1_version,
    params: {
      limit: [__WEBPACK_IMPORTED_MODULE_0__config__["c" /* NetworkParamType */].number],
      offset: [__WEBPACK_IMPORTED_MODULE_0__config__["c" /* NetworkParamType */].number]
    },
    debug: __WEBPACK_IMPORTED_MODULE_1__debug_data__["a" /* default */].getOpenid
  }
});

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Data = {
  getOpenid: {
    openid: 'test1234'
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Data);

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getPagesLength = function getPagesLength() {
  return getCurrentPages(); // 需要关闭eslint检查
};

// 随机生成32为字符串
var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var PlugUtils = {
  generateMixed: function generateMixed() {
    var res = '';
    for (var i = 0; i < 32; i++) {
      var id = Math.ceil(Math.random() * 35);
      res += chars[id];
    }
    return res;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getPagesLength: getPagesLength,
  PlugUtils: PlugUtils
});

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s) {
  return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}
function b64_md5(s) {
  return binl2b64(core_md5(str2binl(s), s.length * chrsz));
}
function str_md5(s) {
  return binl2str(core_md5(str2binl(s), s.length * chrsz));
}
function hex_hmac_md5(key, data) {
  return binl2hex(core_hmac_md5(key, data));
}
function b64_hmac_md5(key, data) {
  return binl2b64(core_hmac_md5(key, data));
}
function str_hmac_md5(key, data) {
  return binl2str(core_hmac_md5(key, data));
}

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test() {
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;

  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t) {
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
  return md5_cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
  return md5_cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data) {
  var bkey = str2binl(key);
  if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16),
      opad = Array(16);
  for (var i = 0; i < 16; i++) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xFFFF;
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str) {
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < str.length * chrsz; i += chrsz) {
    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
  }return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin) {
  var str = "";
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < bin.length * 32; i += chrsz) {
    str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
  }return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray) {
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i += 3) {
    var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;
    for (var j = 0; j < 4; j++) {
      if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
    }
  }
  return str;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  hex_md5: hex_md5
});

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAddressUseLngLat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_wx_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_wx_utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_storage_typename__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugs_qqmap_wx_jssdk_js__ = __webpack_require__(249);





var qqMap = null;

// 注册腾讯地图
qqMap = new __WEBPACK_IMPORTED_MODULE_3__plugs_qqmap_wx_jssdk_js__["a" /* default */]({
  key: 'HUKBZ-5IIWU-NORVA-BB4KA-B7TR5-GFFH7'
});

var reverseGeocoder = function reverseGeocoder(res, cb) {
  // 通过用户的定位获取当前城市
  qqMap.reverseGeocoder({
    location: {
      latitude: res.latitude,
      longitude: res.longitude
    },
    complete: function complete(res) {
      // console.log('腾讯地图定位', res);
      __WEBPACK_IMPORTED_MODULE_0__utils_wx_storage__["a" /* default */].set(__WEBPACK_IMPORTED_MODULE_2__utils_storage_typename__["a" /* default */].address, res);

      if (typeof cb === 'function') {
        cb(res);
      } else {
        return res;
      }
    }
  });
};

var GetAddressUseLngLat = function GetAddressUseLngLat(res, cb) {
  if (res) {
    reverseGeocoder(res, cb);
  } else {
    __WEBPACK_IMPORTED_MODULE_1__utils_wx_utils__["a" /* default */].getLocation().then(function (res) {
      reverseGeocoder(res, cb);
    });
  }
};



/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);


/**
 * 微信小程序JavaScriptSDK
 *
 * @version 1.0
 * @date 2017-01-10
 * @author jaysonzhou@tencent.com
 */

var ERROR_CONF = {
    KEY_ERR: 311,
    KEY_ERR_MSG: 'key格式错误',
    PARAM_ERR: 310,
    PARAM_ERR_MSG: '请求参数信息有误',
    SYSTEM_ERR: 600,
    SYSTEM_ERR_MSG: '系统错误',
    WX_ERR_CODE: 1000,
    WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var Utils = {
    /**
     * 得到终点query字符串
     * @param {Array|String} 检索数据
     */
    location2query: function location2query(data) {
        if (typeof data == 'string') {
            return data;
        }
        var query = '';
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            if (!!query) {
                query += ';';
            }
            if (d.location) {
                query = query + d.location.lat + ',' + d.location.lng;
            }
            if (d.latitude && d.longitude) {
                query = query + d.latitude + ',' + d.longitude;
            }
        }
        return query;
    },


    /**
     * 使用微信接口进行定位
     */
    getWXLocation: function getWXLocation(success, fail, complete) {
        wx.getLocation({
            type: 'gcj02',
            success: success,
            fail: fail,
            complete: complete
        });
    },


    /**
     * 获取location参数
     */
    getLocationParam: function getLocationParam(location) {
        if (typeof location == 'string') {
            var locationArr = location.split(',');
            if (locationArr.length === 2) {
                location = {
                    latitude: location.split(',')[0],
                    longitude: location.split(',')[1]
                };
            } else {
                location = {};
            }
        }
        return location;
    },


    /**
     * 回调函数默认处理
     */
    polyfillParam: function polyfillParam(param) {
        param.success = param.success || function () {};
        param.fail = param.fail || function () {};
        param.complete = param.complete || function () {};
    },


    /**
     * 验证param对应的key值是否为空
     *
     * @param {Object} param 接口参数
     * @param {String} key 对应参数的key
     */
    checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
        if (!param[key]) {
            var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
            param.fail(errconf);
            param.complete(errconf);
            return true;
        }
        return false;
    },


    /**
     * 验证参数中是否存在检索词keyword
     *
     * @param {Object} param 接口参数
     */
    checkKeyword: function checkKeyword(param) {
        return !this.checkParamKeyEmpty(param, 'keyword');
    },


    /**
     * 验证location值
     *
     * @param {Object} param 接口参数
     */
    checkLocation: function checkLocation(param) {
        var location = this.getLocationParam(param.location);
        if (!location || !location.latitude || !location.longitude) {
            var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
            param.fail(errconf);
            param.complete(errconf);
            return false;
        }
        return true;
    },


    /**
     * 构造错误数据结构
     * @param {Number} errCode 错误码
     * @param {Number} errMsg 错误描述
     */
    buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
        return {
            status: errCode,
            message: errMsg
        };
    },


    /**
     * 构造微信请求参数，公共属性处理
     *
     * @param {Object} param 接口参数
     * @param {Object} param 配置项
     */
    buildWxRequestConfig: function buildWxRequestConfig(param, options) {
        var that = this;
        options.header = { "content-type": "application/json" };
        options.method = 'GET';
        options.success = function (res) {
            var data = res.data;
            if (data.status === 0) {
                param.success(data);
            } else {
                param.fail(data);
            }
        };
        options.fail = function (res) {
            res.statusCode = ERROR_CONF.WX_ERR_CODE;
            param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, result.errMsg));
        };
        options.complete = function (res) {
            var statusCode = +res.statusCode;
            switch (statusCode) {
                case ERROR_CONF.WX_ERR_CODE:
                    {
                        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
                        break;
                    }
                case ERROR_CONF.WX_OK_CODE:
                    {
                        var data = res.data;
                        if (data.status === 0) {
                            param.complete(data);
                        } else {
                            param.complete(that.buildErrorConfig(data.status, data.message));
                        }
                        break;
                    }
                default:
                    {
                        param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
                    }

            }
        };
        return options;
    },


    /**
     * 处理用户参数是否传入坐标进行不同的处理
     */
    locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
        var that = this;
        locationfail = locationfail || function (res) {
            res.statusCode = ERROR_CONF.WX_ERR_CODE;
            param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
        };
        locationcomplete = locationcomplete || function (res) {
            if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
                param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            }
        };
        if (!param.location) {
            that.getWXLocation(locationsuccess, locationfail, locationcomplete);
        } else if (that.checkLocation(param)) {
            var location = Utils.getLocationParam(param.location);
            locationsuccess(location);
        }
    }
};

var QQMapWX = function () {

    /**
     * 构造函数
     *
     * @param {Object} options 接口参数,key 为必选参数
     */
    function QQMapWX(options) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, QQMapWX);

        if (!options.key) {
            throw Error('key值不能为空');
        }
        this.key = options.key;
    }

    /**
     * POI周边检索
     *
     * @param {Object} options 接口参数对象
     *
     * 参数对象结构可以参考
     * @see http://lbs.qq.com/webservice_v1/guide-search.html
     */


    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(QQMapWX, [{
        key: 'search',
        value: function search(options) {
            var that = this;
            options = options || {};

            Utils.polyfillParam(options);

            if (!Utils.checkKeyword(options)) {
                return;
            }

            var requestParam = {
                keyword: options.keyword,
                orderby: options.orderby || '_distance',
                page_size: options.page_size || 10,
                page_index: options.page_index || 1,
                output: 'json',
                key: that.key
            };

            if (options.address_format) {
                requestParam.address_format = options.address_format;
            }

            if (options.filter) {
                requestParam.filter = options.filter;
            }

            var distance = options.distance || "1000";
            var auto_extend = options.auto_extend || 1;

            var locationsuccess = function locationsuccess(result) {
                requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";
                wx.request(Utils.buildWxRequestConfig(options, {
                    url: URL_SEARCH,
                    data: requestParam
                }));
            };
            Utils.locationProcess(options, locationsuccess);
        }

        /**
         * sug模糊检索
         *
         * @param {Object} options 接口参数对象
         *
         * 参数对象结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-suggestion.html
         */

    }, {
        key: 'getSuggestion',
        value: function getSuggestion(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);

            if (!Utils.checkKeyword(options)) {
                return;
            }

            var requestParam = {
                keyword: options.keyword,
                region: options.region || '全国',
                region_fix: options.region_fix || 0,
                policy: options.policy || 0,
                output: 'json',
                key: that.key
            };
            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_SUGGESTION,
                data: requestParam
            }));
        }

        /**
         * 逆地址解析
         *
         * @param {Object} options 接口参数对象
         *
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-gcoder.html
         */

    }, {
        key: 'reverseGeocoder',
        value: function reverseGeocoder(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);
            var requestParam = {
                coord_type: options.coord_type || 5,
                get_poi: options.get_poi || 0,
                output: 'json',
                key: that.key
            };
            if (options.poi_options) {
                requestParam.poi_options = options.poi_options;
            }

            var locationsuccess = function locationsuccess(result) {
                requestParam.location = result.latitude + ',' + result.longitude;
                wx.request(Utils.buildWxRequestConfig(options, {
                    url: URL_GET_GEOCODER,
                    data: requestParam
                }));
            };
            Utils.locationProcess(options, locationsuccess);
        }

        /**
         * 地址解析
         *
         * @param {Object} options 接口参数对象
         *
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-geocoder.html
         */

    }, {
        key: 'geocoder',
        value: function geocoder(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);

            if (Utils.checkParamKeyEmpty(options, 'address')) {
                return;
            }

            var requestParam = {
                address: options.address,
                output: 'json',
                key: that.key
            };

            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_GET_GEOCODER,
                data: requestParam
            }));
        }

        /**
         * 获取城市列表
         *
         * @param {Object} options 接口参数对象
         *
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-region.html
         */

    }, {
        key: 'getCityList',
        value: function getCityList(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);
            var requestParam = {
                output: 'json',
                key: that.key
            };

            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_CITY_LIST,
                data: requestParam
            }));
        }

        /**
         * 获取对应城市ID的区县列表
         *
         * @param {Object} options 接口参数对象
         *
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-region.html
         */

    }, {
        key: 'getDistrictByCityId',
        value: function getDistrictByCityId(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);

            if (Utils.checkParamKeyEmpty(options, 'id')) {
                return;
            }

            var requestParam = {
                id: options.id || '',
                output: 'json',
                key: that.key
            };

            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_AREA_LIST,
                data: requestParam
            }));
        }

        /**
         * 用于单起点到多终点的路线距离(非直线距离)计算：
         * 支持两种距离计算方式：步行和驾车。
         * 起点到终点最大限制直线距离10公里。
         *
         * @param {Object} options 接口参数对象
         *
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-distance.html
         */

    }, {
        key: 'calculateDistance',
        value: function calculateDistance(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);

            if (Utils.checkParamKeyEmpty(options, 'to')) {
                return;
            }

            var requestParam = {
                mode: options.mode || 'walking',
                to: Utils.location2query(options.to),
                output: 'json',
                key: that.key
            };

            var locationsuccess = function locationsuccess(result) {
                requestParam.from = result.latitude + ',' + result.longitude;
                wx.request(Utils.buildWxRequestConfig(options, {
                    url: URL_DISTANCE,
                    data: requestParam
                }));
            };
            if (options.from) {
                options.location = options.from;
            }

            Utils.locationProcess(options, locationsuccess);
        }
    }]);

    return QQMapWX;
}();

/* harmony default export */ __webpack_exports__["a"] = (QQMapWX);

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module__ = __webpack_require__(117);





// import createPersistedState from 'vuex-persistedstate'; // 使vuex的数据永久化到本地


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_3__mutation__["a" /* default */],
  modules: {
    search: __WEBPACK_IMPORTED_MODULE_4__module__["a" /* default */].Search,
    discovery: __WEBPACK_IMPORTED_MODULE_4__module__["a" /* default */].Discovery
  },
  plugins: [
    // createPersistedState({
    //   storage: {
    //     getItem: key => {
    //       wx.getStorageSync(key);
    //     },
    //     setItem: (key, value) => {
    //       if (value) {
    //         wx.setStorageSync(key, value);
    //       }
    //     },
    //     removeItem: key => {
    //       // wx.removeStorageSync(key);
    //       // console.log('removeItem');
    //     }
    //   }
    // })
  ]
}));

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flyio_dist_npm_wx__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_flyio_dist_npm_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_core__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_mapKeys__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_mapKeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_mapKeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_wx_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_storage_typename__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__network_base__ = __webpack_require__(244);












// 增加的请求的文件在此引入 begin

var networkActions = {
  base: __WEBPACK_IMPORTED_MODULE_9__network_base__["a" /* default */]
};
// 增加的请求的文件在此引入 end

var Network = function () {
  function Network() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Network);

    var self = this;
    __WEBPACK_IMPORTED_MODULE_5_lodash_mapKeys___default()(networkActions, function (collection, collectionKey) {
      __WEBPACK_IMPORTED_MODULE_5_lodash_mapKeys___default()(collection, function (request, requestKey) {
        collection[requestKey] = transformNetworkActionToHttpRequest(request);
      });
      self[collectionKey] = collection;
    });

    function transformNetworkActionToHttpRequest(networkAction) {
      return function (params, uploadBlock, customUrl) {
        if (!params) {
          params = {};
        }

        var BASICURL = __WEBPACK_IMPORTED_MODULE_8__config__["a" /* NetworkAPIHost */];
        var filteredParam = Object(__WEBPACK_IMPORTED_MODULE_8__config__["d" /* _filterValidateParams */])(networkAction.params, params);
        if (__WEBPACK_IMPORTED_MODULE_4_lodash_core___default.a.isUndefined(networkAction.apiVersion)) {
          networkAction.apiVersion = __WEBPACK_IMPORTED_MODULE_8__config__["b" /* NetworkAPIVersion */].v1_version + '/';
        }

        var url = !__WEBPACK_IMPORTED_MODULE_4_lodash_core___default.a.isUndefined(customUrl) ? networkAction.apiVersion + customUrl : networkAction.apiVersion + networkAction.url;
        if (__WEBPACK_IMPORTED_MODULE_4_lodash_core___default.a.isUndefined(url)) {
          return false;
        }

        var options = {
          url: url,
          method: networkAction.method,
          // 是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
          parseJson: true,
          timeout: 5 * 60000,
          baseURL: BASICURL,
          headers: {}
        };

        if (networkAction.authorization) {
          options.headers['token'] = self.authorizationHeader();
          // options.headers['token'] = 'THIS_IS_DUMMY_OPENID';
          // console.log(options);
        }

        if (options.method.toLowerCase() === 'post') {
          var formId = __WEBPACK_IMPORTED_MODULE_6__utils_wx_storage__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_7__utils_storage_typename__["a" /* default */].formId);
          if (formId) {
            options.headers['formid'] = formId;
            __WEBPACK_IMPORTED_MODULE_6__utils_wx_storage__["a" /* default */].remove(__WEBPACK_IMPORTED_MODULE_7__utils_storage_typename__["a" /* default */].formId);
          }
        }

        // console.log(
        // 'Requesting on:',
        // networkAction.multipart ? "Multipart" : "NonMultipart",
        // BASICURL,
        // url,
        // filteredParam,
        // options.headers
        // );

        var fly = new __WEBPACK_IMPORTED_MODULE_3_flyio_dist_npm_wx___default.a();
        fly.interceptors.response.use(function (response) {
          // 只将请求结果的data字段返回
          return response.data;
        }, function (err) {
          return err;
          // console.log(err);
          // 发生网络错误后会走到这里
          // return Promise.resolve();
        });

        // /* debug */
        if (!__WEBPACK_IMPORTED_MODULE_4_lodash_core___default.a.isUndefined(networkAction.debug)) {
          return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
            resolve(networkAction.debug);
          });
        }

        return fly.request(options.url, filteredParam, options);
      };
    }
  }
  // 获取auth


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Network, [{
    key: 'authorizationHeader',
    value: function authorizationHeader() {
      var openidObj = __WEBPACK_IMPORTED_MODULE_6__utils_wx_storage__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_7__utils_storage_typename__["a" /* default */].openid);

      if (!openidObj || !openidObj.openid) {
        return '';
      }
      return openidObj.openid;
    }
  }]);

  return Network;
}();

// 添加请求拦截器
/**
  baseURL,  //请求的基地址
  body, //请求的参数
  headers, //自定义的请求头
  method, // 请求方法
  timeout, //本次请求的超时时间
  url, // 本次请求的地址
  withCredentials //跨域请求是否发送第三方cookie
*/
// fly.interceptors.request.use((request) => {
//   // 添加请求头部host
//   // request.baseURL = NetworkAPIHost;
//   // 给所有请求添加自定义header
//   // request.headers['X-Tag'] = 'flyio';
//   // 打印出请求体
//   console.log(request.body);
//   // 终止请求
//   // var err=new Error("xxx")
//   // err.request=request
//   // return Promise.reject(new Error(""))

//   // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
//   return request;
// });

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
/**
  data, //服务器返回的数据
  engine, //请求使用的http engine(见下面文档),浏览器中为本次请求的XMLHttpRequest对象
  headers, //响应头信息
  request  //本次响应对应的请求信息
*/
// fly.interceptors.response.use(
//   (response) => {
//     // 只将请求结果的data字段返回
//     return response.data;
//   },
//   (err) => {
//     console.log(err);
//     // 发生网络错误后会走到这里
//     // return Promise.resolve();
//   }
// );

/* harmony default export */ __webpack_exports__["a"] = (new Network());

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_uncheck_utils__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugs_md5__ = __webpack_require__(247);



/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 调用微信支付请求
  */

  wxPayment: function wxPayment(_ref) {
    var sign = _ref.sign,
        cb = _ref.cb;

    var timeStamp = new Date().getTime();
    var nonceStr = __WEBPACK_IMPORTED_MODULE_0__utils_uncheck_utils__["a" /* default */].PlugUtils.generateMixed();
    var paySign = __WEBPACK_IMPORTED_MODULE_1__plugs_md5__["a" /* default */].hex_md5('appId=wx0d9fe1abe5ba75b6&nonceStr=' + nonceStr + '&package=prepay_id=' + sign + '&signType=MD5&timeStamp=' + timeStamp + '&key=yf7hCy5wiGzhHZAj3HLSGiM9mMtU61qt');
    wx.requestPayment({
      'timeStamp': timeStamp + '',
      'nonceStr': nonceStr,
      'package': 'prepay_id=' + sign,
      'signType': 'MD5',
      'paySign': paySign.toUpperCase(),
      'success': function success(res) {
        if (typeof cb === 'function') {
          var params = { status: true, obj: res };
          cb(params);
        }
        // console.log(res);
      },
      'fail': function fail(err) {
        // console.log(err);
        if (typeof cb === 'function') {
          var params = { status: false, obj: err };
          cb(params);
        }
      }
    });
  }
});

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_wx_utils__ = __webpack_require__(16);


// 获取用户授权信息
wx.getSetting({
  success: function success(res) {
    // console.log(res)
    if (res.authSetting['scope.userInfo']) {
      var wxUserInf = '';

      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不需要在请求微信
      if (wxUserInf) {
        return;
      }

      wx.getUserInfo({
        success: function success(res) {
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
        success: function success(res) {
          // console.log(res);
          __WEBPACK_IMPORTED_MODULE_0__utils_wx_utils__["a" /* default */].getLocation().then(function (res) {
            // console.log(res);
          });
        },
        fail: function fail(res) {
          __WEBPACK_IMPORTED_MODULE_0__utils_wx_utils__["a" /* default */].toast({ title: '位置授权失败，请在我的账户中进行设置' });
          // console.log('fail', res);
        }
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_0__utils_wx_utils__["a" /* default */].getLocation().then(function (res) {
        // console.log('进入应用定位信息', res);
      });
    }
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);


// 说明：页面回退时， 保证data数据不会被重置，页面显示不变。

var pageDatas = {};
/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(_Vue) {
    // 添加全局方法或属性
    _Vue.prototype.$isPage = function isPage() {
      return this.$mp && this.$mp.mpType === 'page';
    };

    _Vue.prototype.$pageId = function pageId() {
      var pid = null;
      try {
        pid = this.$isPage() ? this.$mp.page.__wxWebviewId__ : null;
      } catch (e) {}
      return pid;
    };

    // 注入组件
    _Vue.mixin({

      methods: {
        stashPageData: function stashPageData() {
          return {
            data: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.$data)
          };
        },
        restorePageData: function restorePageData(oldData) {
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, oldData.data);
        }
      },

      onLoad: function onLoad() {
        if (this.$isPage()) {
          // 新进入页面
          if (this.$options.data) {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
          }
        }
      },
      onUnload: function onUnload() {
        if (this.$isPage()) {
          // 退出页面，删除数据
          delete pageDatas[this.$pageId()];
          this.$needReloadPageData = true;
        }
      },
      onHide: function onHide() {
        if (this.$isPage()) {
          // 将要隐藏时，备份数据
          pageDatas[this.$pageId()] = this.stashPageData();
        }
      },
      onShow: function onShow() {
        if (this.$isPage()) {
          // 如果是后退回来的，拿出历史数据来设置data
          if (this.$needReloadPageData) {
            var oldData = pageDatas[this.$pageId()];
            if (oldData) {
              this.restorePageData(oldData);
            }
            this.$needReloadPageData = false;
          }
        }
      }
    });
  }
});

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OVERFLOW_HIDDEN_STATUS; });
/* unused harmony export TOGGLE_SEARCH_OVERFLOW */
var OVERFLOW_HIDDEN_STATUS = 'OVERFLOW_HIDDEN_STATUS';
var TOGGLE_SEARCH_OVERFLOW = 'TOGGLE_SEARCH_OVERFLOW';

/***/ })

});
//# sourceMappingURL=webim.js.map