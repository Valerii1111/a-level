let onePortion = 0.3; // необходимое количество муки для одного батона
let totalQuantity; // объявляем итоговую переменную
do {
    let quantityOfPortion = prompt("Сколько нужно испечь батонов?", " "); // вводим необходимое для выпечки количество батонов
    let totalQuantity = onePortion * quantityOfPortion; // считаем необходимое количество муки для заданного количества батонов
    alert("Необходимо подготовить " + totalQuantity + " кг муки") // выводим результат
} while(quantityOfPortion !== null) 