const fontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const changeFontSize = () => {
    const defPosition = Number(fontSizeControl.value);
    console.log(defPosition);
    text.style.fontSize = `${16 * (defPosition / 50)}px`;
};

fontSizeControl.addEventListener('input', changeFontSize);