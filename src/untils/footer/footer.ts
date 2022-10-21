import {getBeian} from '../../axios/api/api'
import {ref} from 'vue'
export let beian =ref("")
export const imgurl = [
    {url:"../../../../public/img/QQ.png"},
    {url:"../../../../public/img/weixin.png"},
    {url:"../../../../public/img/github-fill.png"}
]
// 获取备案号
export const getBB =()=>{
    getBeian().then((res) => {
        // console.log(res.data)
        const len = res.data.BEIAN.length
        beian=res.data.BEIAN[len-1].beian
        // 后台每次修改/新增备案
        // 数据库保留历史记录,最新备案为最后一个
        // 即数据长度-1
        // console.log(beian);
    })
}