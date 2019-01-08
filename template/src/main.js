import Vue from 'vue';
import App from './App';
import Store from './store/index';
import Network from './network/index';
import WxNetwork from './network/network.wx';
import MpvueRouterPatch from 'mpvue-router-patch';

import Storage from '@/utils/wx.storage';
import StorageTypeName from '@/utils/storage.typename';
import WxUtils from '@/utils/wx.utils';
import '@/utils/wx.onlanch';

import '@/assets/style/weui.scss';
import '@/assets/style/base.scss';

import Hack from './plugs/hack';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

// 开始挂载插件对象
Vue.prototype.$store = Store;
Vue.prototype.$network = Network;
Vue.prototype.$wxNetwork = WxNetwork;
Vue.prototype.$storage = Storage;
Vue.prototype.$storageTypeName = StorageTypeName;
Vue.prototype.$wxUtils = WxUtils;
Vue.use(MpvueRouterPatch);
Vue.use(Hack);

export default {
};
