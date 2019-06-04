var requestUrl = "https://www.hk952183.com:58443/njhk-wisdom-datasys-web-api";
function post(url, data, fun, that) {
  if (url == 'undefined') {
    return false;
  }
  var postUrl = requestUrl + url;
  wx.request({
    url: postUrl,
    data: data,
    method: "POST",
    dataType: "json",
    header: {
      "Content-Type": "application/x-www-form-urlencoded" // 默认值
    },
    success: function (res) {
      that[fun](res.data);
    },
    fail: function (res) {
      console.log('请求失败，请重试');
      return {};
    }
  })
}
module.exports.post = post