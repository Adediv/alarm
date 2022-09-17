const song = new Audio('fireboy.mp3');
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
    song.play()
  }
  setInterval("setAlarm()",1000)
}
const stop=()=>{
  alert("Answer this question")
  var wakeUp = prompt('Do you have class today?','yes or no')
  if(wakeUp == "no" ){
    song.pause()
  }
 else if (wake == "yes"){
    song.play()
  }
}