
<script>
import request from './utils/request'
export default {
  async mounted () {
    wx.login({
      success:async (res)=>{
        const code =res.code
        const result =await request('http://localhost:3000/getopenId',{code})
        wx.setStorageSync('token',result)
      }
    })
    const result=await request('http://localhost:3000/test')
    console.log(result)
  }
  
 }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
 /* 全局样式 */
page
  width 100%
  height 100%
 
 
</style>
 