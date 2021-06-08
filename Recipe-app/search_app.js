const name = document.getElementById('result__dishname');
const category = document.getElementById('result__dishcategory');
const ing = document.getElementById('result__ingredients');
const image = document.getElementById('result__dishimage');
const input = document.getElementById('dish');

let check = 0;

async function test() {
   console.log('ready');
   const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);

   const data = res.data.meals[0];

   console.log(data);

   name.innerHTML = data["strMeal"];
   category.innerHTML = "Country: " + data["strArea"];

   image.setAttribute('src', data.strMealThumb);

   let list = "Ingridents: ";

   for (let c in data) {
      if (c.includes('Ingredient')) {
         if ((data[c] == null) || (data[c] == "")) {
            continue;
         }
         else {
            list = list + "<br/>   ->  " + data[c];
         }
      }
   }
   ing.innerHTML = list;
}
