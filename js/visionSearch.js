const searchButton = document.querySelector('.search__button');
const searchInput = document.querySelector('.menu__search');

searchButton.addEventListener("click", function() {
    searchButton.style.display = 'none';
    searchInput.style.display = 'block';
    searchInput.focus();
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchInput.style.display = 'none';
        searchButton.style.display = 'block';
    }
});

document.addEventListener("click", function(event) {
    if (!searchInput.contains(event.target) && !searchButton.contains(event.target)) {
        if (searchInput.style.display === 'block') {
            searchInput.style.display = 'none';
            searchButton.style.display = 'block';
        }
    }
});
