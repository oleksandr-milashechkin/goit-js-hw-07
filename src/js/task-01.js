const hRef = document.querySelectorAll('.item > h2');

const listRef = document.querySelectorAll('.item > ul');


const headersQuantity = hRef.length;

for (let i = 0; i < headersQuantity; i+= 1) {
    console.log(`Категория: ${hRef[i].textContent}`);
    console.log(`Количество элементов: ${listRef[i].children.length}`);
}