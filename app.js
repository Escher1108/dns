/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-03-08 22:26:10
 * @LastEditTime: 2022-03-10 22:33:33
 * @LastEditors: Do not edit
 * @FilePath: \dns\app.js
 * @Description: 耶斯莫拉
 */
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();


const url = 'https://dns.nextdns.io';
const PORT = process.env.PORT || 5001;
// const url = 'https://www.baidu.com'

// 配置
const options = {
    target: url, // 目标服务器 host
    changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
    ws: true,                         // 是否代理websockets
};

// Info GET endpoint
app.get('/about', (req, res, next) => {
    // res.send('本页面由Escher1108提供！');
    res.sendFile(__dirname + '/about.html');
});

app.use('/', createProxyMiddleware(options));
app.listen(PORT);