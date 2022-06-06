const router = require('koa-router')()
const mysql = require("../dataBase/db")  //导入 db.js
router.get('/', async (ctx, next) => {
  let sql =`select * from user`
    await mysql.query(sql).then(async (list) => {
      // console.log(res)
      ctx.body = {
        list,
        msg:'success'
      }
    }).catch(e => {
      console.log(e);
    })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
