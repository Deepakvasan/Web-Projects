const check_btn = document.getElementById('check');
const result_area = document.getElementById('result');
const number = document.getElementById('guess');

check_btn.addEventListener('click', function(){
    let comp_guess = (Math.floor(Math.random() * 20) + 1);
    let user_guess = Number(number.value);
    if (comp_guess == user_guess){
        result_area.innerHTML = "Yes!! You guessed the correct number!!"
    }
    else{
        result_area.innerHTML = "Oh!! You got it wrong!!\n The Computer was thinking " + String(comp_guess) + "\n Better luck next time!!";
    }
});