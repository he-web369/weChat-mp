const token=wx.getStorageSync('token')
export default function (url,data={},methods="GET") {
    return new Promise((resolve,reject)=>{
        wx.request({
            url,
            data,
            methods,
            header:{
              authorization:token
            },
            success:(res)=>{
              resolve(res.data)
            },
            fail:(err)=>{
                reject(err)
            }
          })
    })
}