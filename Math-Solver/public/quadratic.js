let A = document.getElementById('a');
let B = document.getElementById('b');
let C = document.getElementById('c');
const calculate_btn = document.getElementById("calcuate__button");
const nature = document.getElementById("nature");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");

function calculate() {
   a = parseInt(A.value);
   b = parseInt(B.value);
   c = parseInt(C.value);
   if (A.value == '' || B.value == '' || C.value == '') {
      alert("Do not leave the input empty!!");
   }
   else {
      if (a == 0) {
         nature.innerHTML = "This is not a quadratic equation. It is linear!";
         r1.innerHTML = "The root is x = " + ((-1 * c) / b);
         r2.innerHTML = "";
      }
      else {
         let det = Math.pow(b, 2) - (4 * a * c);
         if (det == 0) {
            nature.innerHTML = "Nature: " + "Real and Equal";
            r1.innerHTML = "Root 1 : " + (-b / (2 * a));
            r2.innerHTML = "Root 2 : " + (-b / (2 * a));
         }
         else if (det > 0) {
            nature.innerHTML = "Nature: " + "Real and Unequal";
            r1.innerHTML = "Root 1 : " + ((-b + Math.sqrt(det)) / (2 * a));
            r2.innerHTML = "Root 2 : " + ((-b - Math.sqrt(det)) / (2 * a));
         }
         else {
            nature.innerHTML = "Nature: " + "Imaginary";
            r1.innerHTML = "Root 1 : " + "(" + (-b / (2 * a)).toFixed(2) + " + " + "(" + (Math.sqrt(-1 * det) / (2 * a)).toFixed(2) + " i" + ")" + ")";
            r2.innerHTML = "Root 2 : " + "(" + (-b / (2 * a)).toFixed(2) + " - " + "(" + (Math.sqrt(-1 * det) / (2 * a)).toFixed(2) + " i" + ")" + ")";
         }
         console.log(det);
      }

   }

}