# mpvue-quest
> 可以立即使用的mpvue开发配置

## Build Setup
``` bash
# install dependencies
npm install

# 本地开发
npm run dev
打开小程序查看

# 发布
点击小程序上传按钮，登录后台提交审核

# 使用的插件
mpvue, sass, mpvue-entry, mpvue-router-patch, flyio.js, vuex, mpvue-weui, vuex-persistedstate
```
## 有关文档
[mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch)

[mpvue-weui](https://kuangpf.com/mpvue-weui/#/search)

[mpvue-wxParse 格式化html/markdown](https://github.com/htzhanglong/mpvue-wxParse)

[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/)

## 已支持的功能和组件
``` bash
# scss

# 两个地点之间推荐路线，腾讯地图第三方插件。
*pages/guideMap/index.vue && pages/guideMap/index.vue*

# 小程序支付
描述：只需要传入 prepay_id
*network/network.wx.js*

# 开启debug模拟请求返回数据。
描述：network.base.js文件中书写请求，设置debug参数则此请求返回对应的本地数据
```

## mpvue开发问题总结

[点击查看](http://wangyanz.cn/2018/12/05/mpvueqa/)
```bash
问题列表：
1. 下拉刷新页面时，页面上放出现大段空白。
2. 当使用组建展示列表数据，需要滑动到底部加载更多时使用 scroll-view实现。
3. 使用腾讯小程序 sdk module.exports 需要修改为  module default
4. 地图的坐标因为是双向数据绑定，拖动地图时会出现抖动并且回到定位点。
5. tabbar icon 图片只能直接放在dist（输出文件夹）中才能够访问的到。
6.绑定地图拖拽事件 regionchange无效。
7.如何增加单个页面的配置。
8.建立项目目录，index 文件夹中只放首页内容，否则会影响分包。tabbar的页面也放在独立的文件夹中，可以减少分包的大小。
9.wx.chooseImage 返回的图片地址，只能在image里设置，否则ios不会显示。
11.lodash 使用npm 打包过大，加载核心方法 lodash/core, 其他方法单独加载。
12.解决分包过大问题
13.某一个文件不想使用eslint检查
```

## 文件描述

### 文件夹：assets
```bash
--- 文件夹名：images ---
描述：放置普通icon或小图

--- 文件夹名：product-img ---
描述：放置需要在小程序 image标签、tab图标、map mark image 图片。

--- 文件夹名：style ---
描述：放置基本的scss设置

```

### 文件夹：src/network
``` bash
--- 文件名：config.js ---
描述：配置请求的域名（NetworkAPIHost）。
*network/index.js使用此插件*

--- debug.data.js ---
描述：模拟后台返回数据的格式时可以使用。
*network/network.base.js使用此插件*

--- 文件名：index.js ---
描述：使用flyio进行发送请求。
*main.js使用此插件，将所有的请求函数绑定在vue对象，方便使用*

--- 文件名：network.base.js ---
描述：书写发送的请求配置，可以分割为多个文件，需要在 network/index.js中引入。此类文件为书写发送请求的主要编辑文件。

--- 文件名：network.wx.js ---
描述：封装微信小程序提供的API进行请求后台。
```

### 文件夹：src/pages
```bash
放置页面文件
```

### 文件夹：src/utils
``` bash
--- 文件名：location.js ---
描述：对腾讯小程序api进行封装，统一管理

--- 文件名：storage.typename.js ---
描述：设置保存到Storage中的数据名称，方便统一修改
*main.js 使用此插件*

--- 文件名：wx.onlanch.js ---
描述：小程序首次加载执行的内容，例如：获取openid，权限管理，小程序登录
*main.js 使用此插件*

--- 文件名：wx.storage.js ---
描述：封装小程序保存Storage API。
*main.js 使用此插件*

--- 文件名：wx.utils.js ---
描述：对小程序api进行封装，统一管理
*main.js 使用此插件*
```

### 文件夹：src/plugs
``` bash
--- 文件名：qqmap-wx-jssdk.js ---
描述：[腾讯地图位置服务小程序sdk](https://lbs.qq.com/qqmap_wx_jssdk/index.html)。
*utils/location.js使用此插件*

--- 文件名：md5.js ---
描述：小程序支付使用。
*network/newwork.wx.js使用此插件*

--- 文件名：hack.js ---
描述：页面回退时，保证data数据不会被重置，页面显示不变。
*main.js 使用此插件*
```


### 文件夹：src/store
[点击查看vuex文档](https://vuex.vuejs.org/zh/)
``` bash
vuex 有关内容
```
### 其他文件说明
```bash
--- 文件名：app.json ---
描述：小程序设置文件

--- 文件名：main.js ---
描述：初始化vue对象等有关操作

--- 文件名：pages.js ---
描述：设置文件目录

**增加新页面时需要同时在app.json和pages.js文件增加路径**
```
