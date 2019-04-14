const express = require('express')
const router = express.Router()
const api = require('./api')
// https://blog.csdn.net/qq_36571602/article/details/78201109
// post方法通过body获取参数，需要使用body-parser，否则body为空
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

router.use(bodyParser.urlencoded({
  extended: false
}))
router.get('/', (req, res, next) => {
  res.json({data: 'hahah'})
})
router.post('/leyou/user/login', (req, res, next) => {
  api.login(req, res, next)
})

router.post('/leyou/user/getUserInfo', (req, res, next) => {
  api.getUserInfo(req, res, next)
})
module.exports = router
