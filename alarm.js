function updateTime() {
  const date =new Date();
  
  const hours =(date.getHours());
  const minutes =(date.getMinutes());
  const seconds =(date.getSeconds());
  clock.innerHTML= `${hours} : ${minutes} :${seconds}`

}


setInterval(updateTime, 1000);

const setAlarm= ()=>{
  var alarmHour = myHour.value
  var alarmMin = myMin.value
  date = new Date()
  if (alarmHour==date.getHours() && alarmMin == date.getMinutes()) {
    alert("time don knack")
  }
  setInterval("setAlarm()",1000)
}