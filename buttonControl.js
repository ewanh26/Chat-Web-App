let pageCounter = 0;
const maxPages = 5;
const $prevButton = document.getElementById('prev')
const $nextButton = document.getElementById('next');
const $leftPage = document.getElementById('left_page');
const $rightPage = document.getElementById('right_page');

$prevButton.addEventListener('click', () => {
    if (pageCounter > 0) {
        pageCounter--;
        console.log(pageCounter);
    }
});
$nextButton.addEventListener('click', () => {
    if (pageCounter < maxPages) {
        pageCounter++;
        console.log(pageCounter);
    }
});
