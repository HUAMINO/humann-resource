const express = require('express')
var history = require('connect-history-api-fallback');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
app.use(history())
app.use(express.static('./dist'))
app.use('/api', createProxyMiddleware(
    { target: 'http://ihrm-java.itheima.net',
     changeOrigin: true
    }));
app.listen(80, ()=>{
    console.log('程序在运行');
})