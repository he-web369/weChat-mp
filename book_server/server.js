let Koa= require('koa')
let KoaRouter=require('koa-router')
let datas=require('../static/datas/data.json')
let Fly=require('flyio/src/node')
const jwt=require('jsonwebtoken')
const fly=new Fly

const app=new Koa()
const router=new KoaRouter()

app.use(router.routes()).use(router.allowedMethods())

router.get('/searchBooks',(ctx,next)=>{
    let req=ctx.query.req
    const searchData=datas.filter(item=>{
        if(item.title.indexOf(req)!==-1){
            return true
        }
    })
    if(req)ctx.body=searchData
})
router.get('/getopenId',async (ctx,next)=>{
    const code=ctx.query.code
    const appSecret="35e12c3ea51c80dc89afc06da3097c8b"
    const appId="wx1ddb455375597b60"
    const result=await fly.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`)
    const userInfo=result.data
    const token=jwt.sign({userInfo},'atxxx')
    ctx.body=token
})
router.get('/test',(ctx,next)=>{
    try {
        jwt.verify(ctx.request.header.authorization,'atxxx')
        ctx.body="验证成功"
    } catch (error) {
        ctx.body="验证失败"
    }
})
app.listen('3000',()=>{
    console.log('服务器启动成功')
    console.log('服务器端口号3000')
})