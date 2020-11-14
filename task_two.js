const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  
  const ulProductsRef = document.querySelector('#ingredients');
  const creatProduct = products => {
  const productRef = document.createElement("li");
  productRef.textContent = products;
  return productRef;
    }
  const productLi =  ingredients.map(product => creatProduct(product));
  ulProductsRef.append(...productLi);
  console.log(ulProductsRef)
