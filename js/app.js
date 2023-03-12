const cockLoad = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
        .then(res => res.json())
        .then(data => cockDisplay(data.drinks))
};

const cockDisplay = drinks => {
    drinks.forEach(drink => {
        console.log(drink)
    });
}
cockLoad()