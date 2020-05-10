class JHDataTimeUtils {

  static toOrderTimeStr(dataStart) {//es6 调用时末传值，默认值为空字符
    if (dataStart) {
      var d = new Date(dataStart)
    } else{
      var d = new Date();
    }
    let y = d.getFullYear(); // 年份
    let m = (d.getMonth() + 1).toString().padStart(2,'0'); // 月份
    let r = d.getDate().toString().padStart(2,'0'); // 日子
    let h = d.getHours().toString().padStart(2,'0'); // 小时 
    let mm = d.getMinutes().toString().padStart(2,'0'); // 分钟
    let ss = d.getSeconds().toString().padStart(2,'0'); // 秒
    return `${y}-${m}-${r}  ${h}:${mm}:${ss}`;// es6 字符串模板
  }
}

export { JHDataTimeUtils }