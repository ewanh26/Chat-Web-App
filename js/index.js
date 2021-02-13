let pageCounter = 0;
let maxPages = 5

const $prevButton = document.getElementById('prev')
const $nextButton = document.getElementById('next');
const $div = document.getElementById('maindiv')

$prevButton.addEventListener('click', function () {
    if (pageCounter > 0) {
        pageCounter--;
        console.log(pageCounter);
    }
});
$nextButton.addEventListener('click', function () {
    if (pageCounter < maxPages) {
        pageCounter++;
        console.log(pageCounter);
    }
});

setInterval(function () {
    switch (pageCounter) {
        case 0:
            $div.className = 'slide1Header';
            $div.innerHTML = '<h1>THE WORLD OF TOMORROW. WHAT\'S NEXT FOR US?</h1>'
            break;
        case 1:
            $div.className = 'slide2';
            $div.innerHTML = '<img src="Images/starry.jpg" alt="stars" id="starimg">';
            break;
    }
}, 1);
