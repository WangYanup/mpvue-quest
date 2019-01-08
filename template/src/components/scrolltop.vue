<template>
  <div class="scroll-container" :class="type === 'tall' ? 'tall' : ''" @click="tapToTop" v-if="show">
    <span class="scroll-icon"></span>
  </div>
</template>
<script>
export default {
  props: ['type'],
  data () {
    return {
      show: false
    };
  },
  methods: {
    tapToTop () {
      this.$wxUtils.pageScrollTo();
    }
  },
  onPageScroll (e) {
    if (e.scrollTop > 2000) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>

  @import '../assets/style/variables.scss';

  .scroll-container {
    position: fixed;
    right: 20rpx;
    bottom: 50rpx;
    z-index: 99;
    border-radius: 100%;
    background-color: #ffffff;
    width: 50rpx;
    height: 50rpx;
    padding: 6rpx;

    .scroll-icon {
      display: inline-block;
      width: 100%;
      height: 100%;
      @include backgroundImg('../assets/images/top.png');
    }
  }

  .tall {
    bottom: 100rpx;
  }
</style>
