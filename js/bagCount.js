let itemCount = 3; // Начальное количество товаров
const itemCountElement = document.getElementById('item-count');

// Функция для обновления количества товаров
function updateItemCount() {
    itemCountElement.textContent = itemCount;
}



// Инициализация отображения количества товаров при загрузке страницы
updateItemCount();
