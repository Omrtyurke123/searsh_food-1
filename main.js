
/*
 Lookup full meal details by id
www.themealdb.com/api/json/v1/1/lookup.php?i=52772
----------------------------------------
Filter by main ingredient
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

Filter by multi-ingredient (only available to Paypal supporters)
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt
Filter by Category
www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
Filter by Area
www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
 */
var inputSersh = document.querySelector('.input-sersh')
var btnSersh = document.querySelector('.btn')
var rightSection = document.querySelector('.right-section')

// btnSersh.addEventListener('click',recoestData)

// function recoestData(){
   let vlueInput =  inputSersh.value
//     //${vlueInput}
//     let link =`https://api.spoonacular.com/food/products/search?apiKey=${vlueInput}`
//     fetch(link)
//     .then((res)=>{
//         console.log(res);
//     })


// }
console.log(fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=${vlueInput}`));