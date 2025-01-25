const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    overlay.style.display = menuList.classList.contains('active') ? 'block' : 'none';
});

// Закрытие меню при клике на оверлей
overlay.addEventListener('click', () => {
    menuList.classList.remove('active');
    overlay.style.display = 'none';
});
