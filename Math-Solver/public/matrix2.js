let A1 = document.getElementById('a1');
let A2 = document.getElementById('a2');
let B1 = document.getElementById('b1');
let B2 = document.getElementById('b2');
const result = document.getElementById('result');

const determinant = () => {
   console.log('Determinant');
   let a1 = parseInt(A1.value);
   let a2 = parseInt(A2.value);
   let b1 = parseInt(B1.value);
   let b2 = parseInt(B2.value);
   if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2)) {
      alert("Do not leave the input empty!!");
   }
   else {
      let determinant = ((a1 * b2) - (a2 * b1));
      result.innerHTML = "Determinant: " + determinant.toFixed(2);
   }

}
const inverse = () => {
   console.log('Inverse');
   let a1 = parseInt(A1.value);
   let a2 = parseInt(A2.value);
   let b1 = parseInt(B1.value);
   let b2 = parseInt(B2.value);
   if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2)) {
      alert("Do not leave the input empty!!");
   }
   else {
      let determinant = ((a1 * b2) - (a2 * b1));
      if (determinant == 0) {
         result.innerHTML = "Matrix not invertible!!";
      }
      else {
         result.innerHTML = "Inverse: <br/>" + " " + ((b2 / determinant).toFixed(2)) + "  " + (-1 * (b1 / determinant).toFixed(2)) + "<br/>" + " " + (-1 * (a2 / determinant).toFixed(2)) + "  " + ((a1 / determinant).toFixed(2));
      }

   }
}