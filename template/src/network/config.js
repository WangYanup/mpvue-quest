import _ from 'lodash/core';
import MapKeys from 'lodash/mapKeys';

const NetworkAPIVersion = {
  v1_version: ''
};

const NetworkAPIHost = '你的域名信息';

class NetworkParamTypeClass {
  constructor (type) {
    this.type = type;
    switch (type) {
    case 'array':
      this.validate = data => _.isArray(data);
      break;
    case 'string':
      this.validate = data => _.isString(data);
      break;
    case 'number':
      this.validate = data => _.isNumber(data);
      break;
    case 'boolean':
      this.validate = data => _.isBoolean(data);
      break;
    case 'object':
      this.validate = data => _.isObject(data);
      break;
    }
  }
}

const NetworkParamType = {
  array: new NetworkParamTypeClass('array'),
  string: new NetworkParamTypeClass('string'),
  number: new NetworkParamTypeClass('number'),
  boolean: new NetworkParamTypeClass('boolean'),
  file: new NetworkParamTypeClass('file'),
  object: new NetworkParamTypeClass('object')
};

const _filterValidateParams = (actionParams, requestParams) => {
  let filteredParams = {};

  MapKeys(actionParams, (paramValue, paramName) => {
    if (!_.isUndefined(requestParams[paramName])) {
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

export {
  NetworkAPIHost,
  NetworkAPIVersion,
  NetworkParamType,
  _filterValidateParams
};
