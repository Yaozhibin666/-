import {service}  from '../request'


// 获取新闻列表 
export const getNewsList = () =>{
    return service({
        // url:"/news/list",
        url:'../src/untils/news/news.json',
        method:"GET",
    })
}

// 添加内容
export interface ARR  {
    name: string;
    id: string;
    email: string;
    phone: string;
    like: string;
    intro: string;
}
export const ReportMySelf =(MyIntroduce:ARR)=>{
    return service({
        url:'', //提交接口
        method:'post',
        data:{

        }
    })
}
// 备案号
export const getBeian = () =>{
    return service({
        url:"../src/untils/footer/beian.json",
        method:"GET",
    })
}