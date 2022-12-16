const containerPizza = document.querySelector('.container-pizza');

const containerMain = document.querySelector('.main');

function displayAlternate() {
    containerPizza.style.display = 'none';
    
};

window.addEventListener('load', () => {
    setTimeout(displayAlternate, 3000);
    containerMain.style.display = 'flex';
});

