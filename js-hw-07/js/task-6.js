const inputRef = document.getElementById('validation-input');

const validateInputBlur = function () {
    const maxLengthOfInput = Number(inputRef.dataset.length);
    // console.log(maxLengthOfInput);
    const lengthInputValue = inputRef.value.length;
    // console.log(lengthInputValue);
    if (lengthInputValue === maxLengthOfInput) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    };
};

inputRef.addEventListener('blur', validateInputBlur);