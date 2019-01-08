<template>
  <div class="actionsheet-container">
    <div class="acs-bg" @click="hideACS"></div>
    <div class="acs-body">
      <div v-if="params.type === 'share'">
        <div class="acs-item">
          <button :open-type="'share'" :plain="'true'">
            <span>分享给朋友</span>
          </button>
        </div>
        <!-- <div class="acs-item" @click="visitDownloadImg">生成卡片 保存分享</div> -->
      </div>
      <div @click="hideACS" class="acs-item-cancel">取消</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['params'],
  data () {
    return {
      ACSShow: true
    };
  },
  methods: {
    hideACS () {
      this.$emit('hideasc');
    },

    visitDownloadImg (e) {
      console.log(this.params.data);

      let params = {
        id: this.params.data.id,
        pageType: this.params.data.pageType,
        name: this.params.data.name,
        context: this.params.data.about
      };

      this.$router.push('/pages/utils.pages/upload.shareimg?obj=' + JSON.stringify(params));
    }
  }
};
</script>
<style lang="scss" scoped>

  @import '../assets/style/variables.scss';

  .actionsheet-container {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    .acs-bg {
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .acs-body {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #fff;
      width: 100%;
      text-align: center;
      font-size: 16px;
      animation: hideTrans 0.3s;

      .acs-item {
        padding: 25rpx 0;
        border-bottom: 1rpx solid #dcdcdc;

        button {
          background-color: #ffffff;
          border: 0;
          width: 100%;
          line-height:normal;
          font-size:16px;
        }
      }

      .acs-item:last-child {
        border-bottom: 0;
      }

      .acs-item-cancel {
        padding: 25rpx 0;
        border-top: 20rpx solid #dcdcdc;
      }
    }

    @keyframes hideTrans {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
