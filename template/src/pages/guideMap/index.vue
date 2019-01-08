<template>
  <div class="guide-map">
    <!-- 需要将index.json 文件在 build 的时候直接复制到dist对应的位置 -->
    <map-route v-if="routeInfo" :route-info="routeInfo"></map-route>
  </div>
</template>
<script>
// 说明：使用腾讯第三方地图插件，需要在小程序的管理后台进行添加，并在app.json中设置。
// "plugins": {
//   "mapPlug": {
//     "version": "1.0.6",
//     "provider": "wx5bc2ac602a747594"
//   }
// },
export default {
  data () {
    return {
      routeInfo: null
    };
  },
  onShow () {
    if (!this.$route.query.obj) {
      this.$wxUtils.toast({title: '路线规划失败，请重试！'});
      setTimeout(() => {
        this.$router.back();
      }, 3000);
      return;
    }
    // console.log(this.$route.query.obj);
    let params = JSON.parse(decodeURIComponent(this.$route.query.obj));
    // console.log(params);

    let routeInfo = {
      startLat: params.slat,
      startLng: params.slng,
      startName: '我的位置',
      endLat: params.elat,
      endLng: params.elng,
      endName: params.ename,
      mode: 'car'
    };
    this.routeInfo = routeInfo;
  }
};
</script>

<style lang="scss" scoped>
  .guide-map {
    height: 100vh;
  }
</style>

