const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx,next)=>{
  const reqpath = ctx.request.url  // /api/seller
  let filePath = reqpath.replace('/api','')
   filePath = '../data'+filePath+'.json'
   filePath = path.join(__dirname,filePath)
   try{
    const res =await fileUtils.getFile(filePath)
    ctx.response.body = res
   }catch(error){
    const errMsg = {
      message:'读取文件失败',
      status:404
    }
    ctx.response.body = errMsg
   }
  await next()
}