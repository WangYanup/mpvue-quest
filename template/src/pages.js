module.exports = {
  'pages': [
    {
      'path': '/pages/index/index',
      'config': {
        'enablePullDownRefresh': true
      }
    },
    '/pages/account/index',
    {
      'path': '/pages/guideMap/index',
      'config': {
        'navigationBarTitleText': '文章列表'
      }
    }
  ],

  'window': {
    'backgroundTextStyle': 'light',
    'navigationBarBackgroundColor': '#fff',
    'navigationBarTitleText': 'mpvue-quest',
    'navigationBarTextStyle': 'black',
    'onReachBottomDistance': 100
  },
  'onReachBottomDistance': 200,
  'tabBar': {
    'color': '#454545',
    'borderStyle': 'black',
    'selectedColor': '#32DA31',
    'position': 'bottom',
    'list': [{
      'pagePath': 'pages/index/index',
      'text': '发现',
      'iconPath': 'img/ic_see_off_tab.png',
      'selectedIconPath': 'img/ic_see_on_tab.png'
    }, {
      'pagePath': 'pages/account/index',
      'text': '我',
      'iconPath': 'img/ic_me_off_tab.png',
      'selectedIconPath': 'img/ic_me_on_tab.png'
    }]
  }
}
