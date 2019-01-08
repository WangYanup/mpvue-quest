<template>
  <div class="container">
    主页
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    };
  },
  created () {
  },
  mounted () {
    this.$wxUtils.loading({title: '加载中...'});
    setTimeout(() => {
      this.$wxUtils.loading({show: false});
    }, 3000);
  },
  onShow () {

  },
  onHide () {
  },
  onPullDownRefresh () {
  },
  computed: {
  },
  methods: {
  },

  onReachBottom () {
  }
};
</script>

<style scoped lang="scss">
  @import '../../assets/style/variables.scss';
</style>
