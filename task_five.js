const nameInputRef = document.querySelector("#name-input");
console.dir(nameInputRef);
const nameOutput = document.querySelector('#name-output');
console.dir(nameOutput);

nameInputRef.addEventListener('change', () => {
   console.log( nameInputRef.value);
   nameOutput.textContent = nameInputRef.value;
});

