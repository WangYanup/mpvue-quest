import Fly from 'flyio/dist/npm/wx';
import _ from 'lodash/core';
import MapKeys from 'lodash/mapKeys';

import Storage from '@/utils/wx.storage';
import StorageType from '@/utils/storage.typename';

import {
  NetworkAPIHost,
  NetworkAPIVersion,
  _filterValidateParams
} from './config';

// 增加的请求的文件在此引入 begin
import base from './network.base';
const networkActions = {
  base
};
// 增加的请求的文件在此引入 end

class Network {
  constructor () {
    let self = this;
    MapKeys(networkActions, (collection, collectionKey) => {
      MapKeys(collection, (request, requestKey) => {
        collection[requestKey] = transformNetworkActionToHttpRequest(request);
      });
      self[collectionKey] = collection;
    });

    function transformNetworkActionToHttpRequest (networkAction) {
      return (params, uploadBlock, customUrl) => {
        if (!params) {
          params = {};
        }

        let BASICURL = NetworkAPIHost;
        let filteredParam = _filterValidateParams(networkAction.params, params);
        if (_.isUndefined(networkAction.apiVersion)) {
          networkAction.apiVersion = NetworkAPIVersion.v1_version + '/';
        }

        let url = !_.isUndefined(customUrl) ? networkAction.apiVersion + customUrl : networkAction.apiVersion + networkAction.url;
        if (_.isUndefined(url)) {
          return false;
        }

        let options = {
          url: url,
          method: networkAction.method,
          // 是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
          parseJson: true,
          timeout: 5 * 60000,
          baseURL: BASICURL,
          headers: {
          }
        };

        if (networkAction.authorization) {
          options.headers['token'] = self.authorizationHeader();
          // options.headers['token'] = 'THIS_IS_DUMMY_OPENID';
          // console.log(options);
        }

        if (options.method.toLowerCase() === 'post') {
          let formId = Storage.get(StorageType.formId);
          if (formId) {
            options.headers['formid'] = formId;
            Storage.remove(StorageType.formId);
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

        let fly = new Fly();
        fly.interceptors.response.use(
          (response) => {
            // 只将请求结果的data字段返回
            return response.data;
          },
          (err) => {
            return err;
            // console.log(err);
            // 发生网络错误后会走到这里
            // return Promise.resolve();
          }
        );

        // /* debug */
        if (!_.isUndefined(networkAction.debug)) {
          return new Promise((resolve, reject) => {
            resolve(networkAction.debug);
          });
        }

        return fly.request(options.url, filteredParam, options);
      };
    }
  }
  // 获取auth
  authorizationHeader () {
    let openidObj = Storage.get(StorageType.openid);

    if (!openidObj || !openidObj.openid) {
      return '';
    }
    return openidObj.openid;
  }
}

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

export default new Network();
