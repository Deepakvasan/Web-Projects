const result = document.getElementById('result');
const len = document.getElementById('length');
const button = document.getElementById('button');
const Super = ['A','a','B','b','c','C','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z',1,2,3,4,5,6,7,8,9,0,'!','@','#','$','%','^','&','-','_'];
button.addEventListener('click', function(){
   if(len.value == ''){
      alert('Please enter the length of the password needed!!');
   }
   else{
      let password = '';
      let key = 0;
      for(var i = 1; i <= Number(len.value);i++){
         key = Math.floor(Math.random() * 71);
         password += Super[key];
      }  
      result.innerHTML = "Password: " + password;          
   }
});