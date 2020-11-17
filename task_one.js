const categoriesUl = document.querySelector('#categories');
const childCategoriesUl = categoriesUl.children;
const arrayChildCategoriesUl = Array.from(childCategoriesUl);

 function info (card) {
     const category = card.firstElementChild.textContent;
     const lengthCategoryArray = card.lastElementChild.children.length;
    return ` Категория:${category}\n  Количество элементов:${lengthCategoryArray}\n`
}

const cardCategory = arrayChildCategoriesUl.map(card => info(card));
console.log(...cardCategory);
