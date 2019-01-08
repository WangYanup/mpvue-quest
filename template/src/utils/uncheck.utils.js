const getPagesLength = () => {
  return getCurrentPages(); // 需要关闭eslint检查
};

// 随机生成32为字符串
const chars = [
  '0','1','2','3','4','5','6','7','8','9',
  'a','b','c','d','e','f','g','h','i','j',
  'k','l','m','n','o','p','q','r','s','t',
  'u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J',
  'K','L','M','N','O','P','Q','R','S','T',
  'U','V','W','X','Y','Z'];

const PlugUtils = {
  generateMixed: () => {
    var res = '';
    for (var i = 0; i < 32; i++) {
      var id = Math.ceil(Math.random() * 35);
      res += chars[id];
    }
    return res;
  }
};

export default {
  getPagesLength,
  PlugUtils
};
