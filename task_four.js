const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const counterValue  = document.querySelector("#value");


 buttonIncrementRef.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
    
 });
 buttonDecrementRef.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
 });

  
 