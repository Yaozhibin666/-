import { ref, watch } from 'vue'
import {ReportMySelf,ARR} from '../../axios/api/api'
export const Form = ref([
  { title: "姓名", content: "", type: "text", warn: "请输入正确格式的姓名", state: "none", maxlength: "4" },
  { title: "学号", content: "", type: "text", warn: "请输入学号(11位)", state: "none", maxlength: "11" },
  { title: "邮箱", content: "", type: "text", warn: "请输入正确格式的邮箱", state: "none", maxlength: "value" },
  { title: "电话", content: "", type: "text", warn: "请输入手机号(11位)", state: "none", maxlength: "11" },
])
// 验证判断
const rules  = ref({
  Introduce_iNDEX:false,like:false,myself:false
})
// 偏向哪里
export const project = ref("")
// 自我介绍
export const Introduce = ref("")

export const blur = (index: any) => {
  if (Form.value[index].content == "") {
    Form.value[index].state = "inline-block"
  } else {
    Form.value[index].state = "none"
  }
  if (index == 2) {
    var str = Form.value[index].content;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == "@") {
        Form.value[index].state = "none"
        break;
      } else {
        Form.value[index].state = "inline-block"
      }
    }
  }
  pd()
}
// 判断
const pd =()=>{
  // 个人信息
  for(var i=0;i<Form.value.length;i++){
    if(Form.value[i].content==""){
      rules.value.Introduce_iNDEX=false
      return
    }else{
      rules.value.Introduce_iNDEX=true
    }
  }
  // 兴趣方向
  if(project.value==""){
    rules.value.like=false
    return
  }else{
    rules.value.like=true
  }
  // 个人介绍
  if(Introduce.value==""||Introduce==null){
    rules.value.myself=false
    return
  }else{
    rules.value.myself=true
  }
}
// 数字限制
export const singular = (index: any) => {
  if (index == 0 || index == 2) {
    return true
  } else {
    return false
  }
}
export const plural = (index: any) => {
  if (index == 1 || index == 3) {
    return true
  } else {
    return false
  }
}
// 监听自我介绍与偏向
watch([project,Introduce], () => {
  pd()
})
export const introduce_submit =()=>{
  console.log("提交")
  const rule = rules.value
  const form = Form.value
  console.log(rules.value)
  if(rule.Introduce_iNDEX){
    if(rule.like){
      if(rule.myself){
        const MyIntroduce = <ARR>{
          name:form[0].content,
          id:form[1].content,
          email:form[2].content,
          phone:form[3].content,
          like:project.value,
          intro:Introduce.value
        }
        // 
        ReportMySelf(MyIntroduce).then((res)=>{
          console.log(res)
        })
        console.log(
          "我的名字是"+form[0].content+",我的学号是"+form[1].content+
          ",我的邮箱是"+form[2].content+",我的手机号是"+form[3].content+
          ",我的偏向是"+project.value+",自我介绍:"+Introduce.value
        )
      }
    }
  }
}
