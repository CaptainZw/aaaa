// 导入
const express = require("express");
const axios = require("axios");

// 创建app
const app = express();

// 开启CORS
//设置允许跨域访问该服务.
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 监听浏览器的请求，并且处理，处理完毕之后再返回
app.get("/douban/in_theaters", (req, res) => {
  // 发送请求给豆瓣的服务器，然后拿到数据之后，再通过响应把数据返回给自家的浏览器
  axios.get("http://api.douban.com/v2/movie/in_theaters").then(res1 => {
    //    console.log(res.data)
    res.send(res1.data);
  });
});

// 开启监听
app.listen(9000, err => {
  console.log("start ok");
});
