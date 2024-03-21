


const textInput = document.querySelector('#name-input');
const output = document.querySelector("#name-output");



textInput.addEventListener("input", () => {
    
    const trimValue = textInput.value.trim();

    if (trimValue === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = trimValue; 
    }
    
});




