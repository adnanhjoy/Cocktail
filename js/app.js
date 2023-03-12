const cockLoad = (search) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => cockDisplay(data.drinks))
};

const cockDisplay = drinks => {
    const drinkContainer = document.getElementById('drink-container');
    drinkContainer.textContent = '';
    drinks.forEach(drink => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strInstructions.slice(0, 80)}</p>
                    <button onclick="drinkDetail(${drink.idDrink})" class="btn btn-primary">See Detail</button>
                </div>
            </div>
        `;
        drinkContainer.appendChild(div)
        // console.log(drink)
    });
};

const searchDrink = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    cockLoad(searchText);
}

document.getElementById('search-button').addEventListener('click', function () {
    searchDrink();
});

document.getElementById('search-field').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchDrink();
    }
});

const drinkDetail = id => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => drinkDetailDisplay(data.drinks[0]))
};

const drinkDetailDisplay = detail => {
    console.log(detail)
}


cockLoad('margarita')