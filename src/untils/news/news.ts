import { getNewsList } from '../../axios/api/api'
import {ref} from 'vue'

export let herfindex= ref(1)
// 头条
export const HeadNews = ref({})
// 列表
export let listNew: any = ref([])
// 学习资料
export  const learn = [
    { url: '../../../../public/img/headNewImg.jpg', title: "学习虚脱视频学习虚脱视频学习虚脱视频学习虚脱视频学习虚脱视频学习虚脱视频学习虚脱视频学习虚脱视频学习虚脱视频", time: "2022/09/28" },
    { url: '../../../../public/img/headNewImg.jpg', title: "学习虚脱视频", time: "2022/09/28" },
    { url: '../../../../public/img/headNewImg.jpg', title: "学习虚脱视频", time: "2022/09/28" },
    { url: '../../../../public/img/headNewImg.jpg', title: "学习虚脱视频", time: "2022/09/28" }
]
export const getnews = () => {
    getNewsList().then((res) => {
        const list = res.data.list
        const lenghtList = res.data.lenght
        // console.log(res.data.lenght)
        for (var i = 0; i < lenghtList; i++) {
            if(list[i].index){
                HeadNews.value=list[i]
            }else{
                listNew.value.push(list[i])
            }
        }
    })
}