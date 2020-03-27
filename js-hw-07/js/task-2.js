const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const setIngredients = (arrayElements, tagName) => {
    const ingredientsItemList = document.getElementById('ingredients');

    const itemsRef = arrayElements.map(elem => {
        const liTags = document.createElement(tagName);
        liTags.textContent = elem;
        return liTags;
    });

    ingredientsItemList.prepend(...itemsRef);
    console.log(ingredientsItemList);
};

setIngredients(ingredients, 'li');