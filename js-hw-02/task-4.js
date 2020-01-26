const formatString = function (string) {
    // const arr = string.split('');
    if (string.length > 40) {
        const croppedString = string.slice(0, 40);
        const modifiedCroppedString = croppedString + '...';
        return modifiedCroppedString;
    } else {
        return string;
    }
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка