'use strict';

const greetingElement = document.getElementsByClassName('greeting')[0];

greetingElement.addEventListener('mouseover', () => {
    console.log('mouse over');
    greetingElement.style.opacity = '0';
});

greetingElement.addEventListener('mouseleave', () => {
    console.log('mouse leave');
    greetingElement.style.opacity = '1';
});