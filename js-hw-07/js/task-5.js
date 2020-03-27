const inputRef = document.getElementById('name-input');
const spanOutputRef = document.getElementById('name-output');

inputRef.addEventListener('input', event => {
    if (event.target.value === '' || event.target.value.length > 35) {
        spanOutputRef.textContent = 'Незнакомец';
    } else {
        spanOutputRef.textContent = event.target.value;
    };
});