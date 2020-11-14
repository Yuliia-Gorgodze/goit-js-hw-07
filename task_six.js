// validation-input.valid
// validation-input.invalid

const input = document.querySelector("#validation-input");

input.addEventListener("change", () => { 
    if(Number(input.value.length) === Number(input.dataset.length)){
        input.id = "valid"; 
    }else {
        input.id = "invalid";
    }
})

