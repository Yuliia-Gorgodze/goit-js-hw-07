const categoriesUl = document.querySelector('#categories');
const childCategoriesUl = categoriesUl.children

const animalsRef = childCategoriesUl[0].firstElementChild.textContent
const productsRef = childCategoriesUl[1].firstElementChild.textContent
const tehnologyRef = childCategoriesUl[2].firstElementChild.textContent
const animalRefLength = childCategoriesUl[0].lastElementChild.children.length
const productsRefLength = childCategoriesUl[1].lastElementChild.children.length
const tehnologyRefLength = childCategoriesUl[2].lastElementChild.children.length


console.log(` Категория:  ${animalsRef}\n Количество элементов: ${animalRefLength}`);
console.log(` Категория:  ${productsRef}\n Количество элементов: ${productsRefLength}`);
console.log(` Категория:  ${tehnologyRef}\n Количество элементов: ${tehnologyRefLength}`);
