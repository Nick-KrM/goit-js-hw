const itemLinks = document.querySelectorAll('.item');
// console.log(itemLinks);
console.log(`В списке ${itemLinks.length} категории.`);

// Более короткий вариант финальной записи (С этого начал рассуждать и экспериментировать)
// itemLinks.forEach(elem => console.log(`Категории: ${elem.textContent} = ${elem.lastElementChild.children.length}`));


// Изначальный вариант (без дополнений)
// itemLinks.forEach(elem => console.log(`Категория - ${elem.firstElementChild.textContent}:\nКоличество элементов: ${elem.lastElementChild.children.length}`));


itemLinks.forEach(elem => console.log(`Категория - ${elem.firstElementChild.textContent}:\nКоличество элементов: ${elem.lastElementChild.children.length}\nА именно:${elem.lastElementChild.textContent}`));