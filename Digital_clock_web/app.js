
function update(){
   const fulldate = new Date();
   const hour = fulldate.getHours();
   const minute = fulldate.getMinutes();
   const second = fulldate.getSeconds();
   document.getElementById('hours').innerHTML = hour;
   document.getElementById('minutes').innerHTML = minute;
   document.getElementById('seconds').innerHTML = second;
}

setInterval(update, 100);

