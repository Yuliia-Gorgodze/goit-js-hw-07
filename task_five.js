const nameInputRef = document.querySelector("#name-input");
console.dir(nameInputRef);
const nameOutput = document.querySelector('#name-output');
console.dir(nameOutput);

nameInputRef.addEventListener('input', () => {
   console.log( nameInputRef.value);
   nameOutput.textContent = nameInputRef.value;
   if (nameInputRef.value === ""){
      nameOutput.textContent = "незнакомец"
   }
});

