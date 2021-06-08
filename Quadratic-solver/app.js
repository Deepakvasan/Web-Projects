const calculate = document.getElementById('calculate-btn');
const clear = document.getElementById('reset-btn');
const a_inp = document.getElementById('a');
const b_inp = document.getElementById('b');
const c_inp = document.getElementById('c');
const nature = document.getElementById('nature');
const root_one = document.getElementById('root-one');
const root_two = document.getElementById('root-two');

function find_roots(){    
    let d = (b_inp.value * b_inp.value) - (4 * a_inp.value * c_inp.value);
    let r1, r2 = 0;
    if (d == 0){
        nature.innerHTML = "Nature of Roots: Real and Equal";
        r1 = -b_inp.value / (2 * a_inp.value);
        r2 = -b_inp.value / (2 * a_inp.value);
        root_one.innerHTML = "Root one: " + r1;
        root_two.innerHTML = "Root two: " + r2;
    }
    else if (d > 0){
        nature.innerHTML = "Nature of Roots: Real and unequal";
        r1 = (-b_inp.value + d) / (2 * a_inp.value);
        r2 = (-b_inp.value - d) / (2 * a_inp.value);
        root_one.innerHTML = "Root one: " + r1;
        root_two.innerHTML = "Root two: " + r2;
    }
    else{
        nature.innerHTML = "Nature of Roots: Imaginary numbers";
        root_one.innerHTML = "Root one: Imaginary";
        root_two.innerHTML = "Root two: Imaginary";      
}}
function reset(){
    nature.innerHTML = "Nature of Roots:";
    root_one.innerHTML = "Root one: ";
    root_two.innerHTML = "Root two: ";
}
calculate.addEventListener('click', function(){
    if (a_inp.value == "" || b_inp.value == "" || c_inp.value == ""){
        if (a_inp.value == ""){
            alert("Please enter the value of a");
        }
        else if (b_inp.value == ""){
            alert("Please enter the value of b");
        }
        else{
            alert("Please enter the value of c");
        }
    }
    else{
        find_roots();
    }
});
clear.addEventListener('click', reset());
