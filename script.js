const dropdownButton = document.querySelector('.dropdown-button');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownItem = document.querySelectorAll('.dropdown-item');

dropdownButton.addEventListener('click', () => {
    dropdownList.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdownList.classList.remove('show');
    }
});

dropdownItem.forEach((item) => {
    item.addEventListener('click', () => {
        dropdownButton.textContent = item.textContent + ' ' ;
        dropdownList.classList.remove('show');

    dropdownItem.forEach((item) => item.classList.remove('selected'));
        item.classList.add('selected');

    });   
}); 
