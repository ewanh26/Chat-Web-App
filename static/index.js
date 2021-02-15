let pageCounter = 0;
let maxPages = 5

const $prevButton = document.getElementById('prev')
const $nextButton = document.getElementById('next');
const $div = document.getElementById('maindiv')

function update() {    
    switch (pageCounter) {
        default:
            $div.className = 'slide1Header';
            $($div).html("<h1>THE WORLD OF TOMORROW. WHAT'S NEXT FOR US?</h1>");
            break;
        case 1:
            $div.className = 'slide2';
            $($div).html(`
            <img src="/static/starry.jpg" alt="stars" id="starimg">
            <img src="/static/moon.png" alt="moon" id="moonimg">
            <div class="textbody">
                <h1>Space Travel?</h1>
                <p>
                    chowcjdhbwdcbwicvwbdcvichdc
                    dchivdwciwdcvwdihcvwdhcwdvcwd
                    dchjwdbciodcgbwdocjwdbcjowdbojc
                    cbihwdcbwichvwdcobwdjhcbjodw
                    bjcjdcbowdcbojdcjobwdcbwdcj
                    njowdcojbwdcojbwdbvojcwdjbucwdojb
                    wobcwodcowbjcwdcowdcoubwddidw
                </p>
            </div>
            `);
            break;
    }
}

update();

$prevButton.addEventListener('click', function () {
    if (pageCounter > 0) {
        pageCounter--;
        console.log(pageCounter);
        update();
    }
});
$nextButton.addEventListener('click', function () {
    if (pageCounter < maxPages) {
        pageCounter++;
        console.log(pageCounter);
        update();
    }
});

window.addEventListener('scroll', function () {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
