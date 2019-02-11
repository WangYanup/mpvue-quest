let keepliveInterval = null;
let connectIntervar = null;
class WxWebSocketModule {
  /**
  * @keepLiveSend // 发送给服务器检验心跳包的参数
  * @keepliveIntervalTime // 发送心跳包频率 ms
  * @keepliveMaxCount // 心跳包多少次没有收到回复进行重新链接
  * @allowConnectCount // 最大重连次数
  * @url （必填） // socket连接地址
  * @outlog （必填）// 输出WebSocket状态 name ==='open:ok' 代表可以开始发送数据，status 代表socket链接状态
  * */
  constructor ({keepLiveSend = 'keeplive', keepliveIntervalTime = 60000, keepliveMaxCount = 3, allowConnectCount = 5, url, outlog}) {
    this.params = {
      keepLiveSend: keepLiveSend,
      keepliveIntervalTime: keepliveIntervalTime,
      keepliveMaxCount: keepliveMaxCount,
      allowConnectCount: allowConnectCount,
      url: url,
      outlog: outlog
    };
    this.socket = null;
    this.socketConnect = false;
    this.keepliveSendCount = 0;
    this.openSocket();
  }

  openSocket () {
    this.socket = wx.connectSocket({
      url: this.params.url,
      header: {
        'content-type': 'application/json'
      },
      // protocols: ['protocol1'],
      method: 'GET',
      success: (res) => {
        this.params.outlog({name: 'connectapi:ok', res: res, status: this.socketConnect});
      },
      fail: (res) => {
        this.params.outlog({name: 'connectapi:fail', res: res, status: this.socketConnect});
      }
    });

    this.onOpen();
    this.onClose();
    this.onError();
  }

  onOpen () {
    this.socket.onOpen((res) => {
      this.socketConnect = true;
      this.params.outlog({name: 'open:ok', res: res, status: this.socketConnect});
      this.keepLive();
    });
  }

  closeSocket () {
    this.socket.close((res) => {
      this.params.outlog({name: 'runclose', res: res, status: this.socketConnect});
    });
  }

  onClose () {
    /**
     * 1.服务器出现问题导致断开链接，需要重连.code 1006
     * */
    this.socket.onClose((res) => {
      this.socketConnect = false;
      // 1006 代表服务器断开链接，connectIntervar 为空表示没有进行重连
      if (res.code === 1006) {
        if (connectIntervar === null) {
          this.connectSocket();
        }
        this.params.outlog({name: 'close:err', res: res, status: this.socketConnect});
      } else {
        this.params.outlog({name: 'close:ok', res: res, status: this.socketConnect});
      }
    });
  }

  onError () {
    this.socket.onError((res) => {
      this.params.outlog({name: 'error', res: res, status: this.socketConnect});
      this.socketConnect = false;
      this.keepliveSendCount = 0;
      clearInterval(keepliveInterval);
      keepliveInterval = null;
    });
  }

  // 有两种情况，‘检验心跳包数据’ ‘正常返回的数据’
  onMessage (cb) {
    // 收到数据，无论是什么数据都代表还在连接状态
    this.socket.onMessage((res) => {
      this.keepliveSendCount = 0;
      // this.params.outlog({name: 'message', res: res, status: this.socketConnect});
      cb(res);
    });
  }

  // data - string/ArrayBuffer(unsupport)
  send (params) {
    if (typeof params !== 'string') {
      params = JSON.stringify(params);
    }
    return new Promise((resolve, reject) => {
      this.socket.send({
        data: params,
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          console.log('send err', res);
          reject(res);
        }
      });
    });
  }

  // 固定间隔发送心跳包测试数据 keeplivestatus, 每间隔1分钟，发送一次
  keepLive () {
    keepliveInterval = setInterval(() => {
      this.send(this.params.keepLiveSend);
      // 表示发送了验证心跳包状态参数
      this.keepliveSendCount = this.keepliveSendCount + 1;
      // 重复发送大于设置次数，停止发送心跳包
      if (this.keepliveSendCount > this.params.keepliveMaxCount) {
        clearInterval(keepliveInterval);
        this.keepliveSendCount = 0;
        keepliveInterval = null;
        this.socketConnect = false;
        // 执行重连函数
        this.connectSocket();
      }
    }, this.params.keepliveIntervalTime);
  }

  connectSocket () {
    let connectCount = 0;
    this.params.outlog({name: 'reconnect:start', res: '', status: this.socketConnect});
    connectIntervar = null;
    connectIntervar = setInterval(() => {
      connectCount = connectCount + 1;
      if (this.socketConnect && connectCount > 1) {
        // 已成功重新链接，结束重连
        this.params.outlog({name: 'reconnect:ok', res: '', status: this.socketConnect});
        clearInterval(connectIntervar);
        connectIntervar = 'success';
      } else {
        this.params.outlog({name: 'reconnectcount:', res: connectCount, status: this.socketConnect});
        this.closeSocket();
        this.socket = null;
        this.openSocket();
      }

      // 大于重试次数，结束链接
      if (connectCount > this.params.allowConnectCount) {
        this.params.outlog({name: 'reconnect:fail', res: '', status: this.socketConnect});
        clearInterval(connectIntervar);
        connectIntervar = 'fail';
        this.socketConnect = false;
      }
    }, 5000);
  }
};

export default WxWebSocketModule;
