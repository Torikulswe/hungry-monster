//search meals function
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function () {
    const input = document.getElementById('search-input').value;
    mealsName(input);
})
const mealsName = input => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
        .then(res => res.json())
        .then(data => {
            displayMealItem(data.meals);
        })
        // error handling
        .catch(err => {
            alert('Search Valid Foods');
        })

}
// display
const displayMealItem = mealName => {
    const mealDiv = document.getElementById('meal');
    mealDiv.innerHTML = '';

    mealName.forEach(meal => {
        const div = document.createElement('div');

        div.className = 'col-md-4';
        console.log(meal);

        const mealInfo = ` <h3>${meal.strMeal}</h3>
         <img onclick="displayMealDetails('${meal.strMeal}')" src = "${meal.strMealThumb}"> `;
        div.innerHTML = mealInfo;
        mealDiv.appendChild(div);

    });

}
const displayMealDetails = name => {
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals[0]))


};

//meal details
const renderMealInfo = meal => {
    console.log(meal);
    const mealDiv = document.getElementById('mealDetail');
    mealDiv.innerHTML = `<img src="${meal.strMealThumb}">
    <h3>Ingredients :</h3>
    <ul class="list">
    <li>${meal.strIngredient1}</li>
    <li>${meal.strIngredient2}</li>
    <li>${meal.strIngredient3}</li>
    <li>${meal.strIngredient4}</li>
    <li>${meal.strIngredient5}</li>
    <li>${meal.strIngredient6}</li>
    <li>${meal.strIngredient7}</li>
    <li>${meal.strIngredient8}</li>
    <li>${meal.strIngredient9}</li>
    </ul>
    
     `;

}
