/* eslint-env es6 */
/* eslint-disable no-console */
console.log("START");
const container = document.querySelector('.container');
const bLinks = document.querySelector('.links');
const bRechts = document.querySelector('.rechts');

var index = 0;

// console.log(bLinks);
// console.log(bRechts);

bLinks.addEventListener('click', klikLinks);
bRechts.addEventListener('click', klikRechts);


function klikLinks() {
    console.log('links geklikt');
    index = (index > 0) ? index - 1 : 0;
    container.style.transform = 'translateX(' + (index) * -25 + '%)';
}

function klikRechts() {
    console.log('rechts geklikt');
    index = (index < 4 - 1) ? index + 1 : 3;
    container.style.transform = 'translateX(' + (index) * -25 + '%)';
}