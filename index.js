const axios = require('axios');
require('dotenv').config()


const QQ = process.env.QQ
const COOKIE = process.env.COOKIE
const G_TK = process.env.G_TK

console.log(QQ)

const service = axios.create({
  timeout: 30000,
  headers: {
    'cookie': COOKIE
  }
});

let albumListModeSort = [] // 用来存储所有的相册的基本信息


// 获取相册的接口地址 https://user.qzone.qq.com/proxy/domain/photo.qzone.qq.com/fcgi-bin/fcg_list_album_v3
service.get('https://user.qzone.qq.com/proxy/domain/photo.qzone.qq.com/fcgi-bin/fcg_list_album_v3', {
  params: {
    'g_tk': G_TK,
    'hostUin': QQ,
    'uin': QQ,
    'inCharset': 'utf-8',
    'outCharset': 'utf-8',
  }
}).then(response => {
  console.log(response.data)
})
.catch(err => {
  console.log(err)
});
