<template>
  <div class="container">
    <button :size="'default'" :type="'primary'" @click="sendInputMessage">发送</button>
  </div>
</template>

<script>
import WebSocketModule from '@/utils/wx_websocket_module';

export default {
  components: {
  },
  data () {
    return {
      Socket: null,
      socketStatus: false,
      num: 1
    };
  },
  mounted () {
  },
  onShow () {
    this.Socket = new WebSocketModule({
      url: 'ws://127.0.0.1:8080',
      keepliveIntervalTime: 60000,
      outlog: (data) => {
        if (data.name === 'open:ok') {
          this.sendMessage();
        }
        this.socketStatus = data.status;
        console.log('outlog', data);
      }
    });
  },
  onHide () {
    this.Socket.closeSocket();
  },
  methods: {
    sendMessage () {
      this.Socket.onMessage((res) => {
        console.log('组件外收到的数据', res);
      });
    },

    sendInputMessage () {
      console.log(this.socketStatus);
      this.num = this.num + 1;
      this.Socket.send('你好' + this.num).then(res => {
        console.log('发送成功');
      }).catch(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
