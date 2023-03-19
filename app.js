const Koa = require('koa')
const app = new Koa()
const resMiddlewareDuration = require('./middleware/koa_response_duration')
const resMiddleWareHeader = require('./middleware/loa_response_header')
const resMiddleWareData = require('./middleware/koa_response_data')
//  使用第一层中间件
app.use(resMiddlewareDuration)
app.use(resMiddleWareHeader)
app.use(resMiddleWareData)
app.listen(8888)

const WebSocketService = require('./service/websocket.service')
WebSocketService.listen()