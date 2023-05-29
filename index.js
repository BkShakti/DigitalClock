const clock = document.querySelector(".watch_time")

updateClock();
stopTime();


function updateClock(){
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();
  let amPm = 'am';
  console.log(hour, minute, second);
  
  if(hour > 12){
    amPm = 'pm';
  } 

  if (hour > 12){
    hour = hour-12;
  }


  if(hour< 10){
    hour = '0'+ hour;
  }

  if (minute< 10){
    minute = '0'+ minute;
  }
  
  if (second< 10){
    second = '0'+ second;
  }

  clock.innerHTML = hour + ':' + minute + ':' + second + ' ' + amPm;

}

function stopTime(){
  clearInterval(clock);
}