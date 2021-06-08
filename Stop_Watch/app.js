const seconds_span = document.getElementById('second');
const minutes_span = document.getElementById('minute');
const hours_span = document.getElementById('hour');
let count = 0;
let clearid;
function update(){
      count += 1;
      seconds_span.innerHTML = count;
      if(count == 60){
         minutes_span.innerHTML = Number(minutes_span.innerText) + 1;
         count = 0;
         if(Number(minutes_span.innerText) == 60){
            hours_span.innerHTML = Number(hours_span.innerText) + 1;
            minutes_span.innerHTML = 0;
         }
      }
}
function start_timer(){
   console.log("Started timer");
   clearid = setInterval(update, 1000);
}
function stop_timer(){
   console.log("Stopped timer");
   
   clearInterval(clearid);
}
function reset_timer(){
   console.log("Resetted timer");
   count = 0;
   seconds_span.innerHTML = '00';
   minutes_span.innerHTML = '00';
   hours_span.innerHTML = '00';
}