let A1 = document.getElementById('a1');
let A2 = document.getElementById('a2');
let A3 = document.getElementById('a3');
let B1 = document.getElementById('b1');
let B2 = document.getElementById('b2');
let B3 = document.getElementById('b3');
let C1 = document.getElementById('c1');
let C2 = document.getElementById('c2');
let C3 = document.getElementById('c3');
const det_btn = document.getElementById('determinant');
const inv_btn = document.getElementById('inverse');
const result = document.getElementById('result');

const determinant = () => {
   let a1 = parseInt(A1.value);
   let a2 = parseInt(A2.value);
   let a3 = parseInt(A3.value);
   let b1 = parseInt(B1.value);
   let b2 = parseInt(B2.value);
   let b3 = parseInt(B3.value);
   let c1 = parseInt(C1.value);
   let c2 = parseInt(C2.value);
   let c3 = parseInt(C3.value);
   if (isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(b1) || isNaN(b2) || isNaN(b3) || isNaN(c1) || isNaN(c2) || isNaN(c3)) {
      alert("Do not leave the input empty!!");
   }
   else {
      let determinant = ((a1 * ((b2 * c3) - (b3 * c2))) - (b1 * ((a2 * c3) - (a3 * c2))) + (c1 * ((a2 * b3) - (a3 * b2))));
      result.innerHTML = 'Determinant : ' + determinant;
   }
}
const inverse = () => {
   let a1 = parseInt(A1.value);
   let a2 = parseInt(A2.value);
   let a3 = parseInt(A3.value);
   let b1 = parseInt(B1.value);
   let b2 = parseInt(B2.value);
   let b3 = parseInt(B3.value);
   let c1 = parseInt(C1.value);
   let c2 = parseInt(C2.value);
   let c3 = parseInt(C3.value);
   if (isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(b1) || isNaN(b2) || isNaN(b3) || isNaN(c1) || isNaN(c2) || isNaN(c3)) {
      alert("Do not leave the input empty!!");
   }
   else {
      let determinant = ((a1 * ((b2 * c3) - (b3 * c2))) - (b1 * ((a2 * c3) - (a3 * c2))) + (c1 * ((a2 * b3) - (a3 * b2))));
      if (determinant == 0) {
         result.innerHTML = "Inverse : Matrix not invertible!"
      }
      else {
         result.innerHTML = "Inverse : " + "<br/>" + (((b2 * c3) - (b3 * c2)) / determinant).toFixed(1) + "  " + ((-1 * ((a2 * c3) - (a3 * c2))) / determinant).toFixed(1) + "  " + (((a2 * b3) - (a3 * b2)) / determinant).toFixed(1) + "<br/>" + ((-1 * ((b1 * c3) - (b3 * c1))) / determinant).toFixed(1) + "  " + (((a1 * c3) - (a3 * c1)) / determinant).toFixed(1) + "  " + ((-1 * ((a1 * b3) - (a3 * b1))) / determinant).toFixed(1) + "<br/>" + (((b1 * c2) - (b2 * c1)) / determinant).toFixed(1) + "  " + ((-1 * ((a1 * c2) - (a2 * c1))) / determinant).toFixed(1) + "  " + (((a1 * b2) - (a2 * b1)) / determinant).toFixed(1);
      }

   }
   console.log('inverse');
}