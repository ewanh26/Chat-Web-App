let pageCounter = 0;
let maxPages = 4

const $prevButton = document.getElementById('prev')
const $nextButton = document.getElementById('next');
const $div = document.getElementById('maindiv')

function update() {    
    switch (pageCounter) {
        default:
            $div.className = 'slide1Header';
            $($div).html(`<h1 class="glitch">
            <span aria-hidden="true">THE WORLD OF TOMORROW. WHAT\'S NEXT FOR US?</span>
            THE WORLD OF TOMORROW. WHAT\'S NEXT FOR US?
            <span aria-hidden="true">THE WORLD OF TOMORROW. WHAT\'S NEXT FOR US?</span></h1>`);
            break;
        case 1:
            $div.className = 'slide2';
            $($div).html(`
            <img src="/static/starry.jpg" alt="stars" id="starimg">
            <img src="/static/moon.png" alt="moon" id="moonimg">
            <div class="textbody">
                <h1 class="shadow">Space Travel?</h1>
                <p class="b">
                    <h4>THUD.</h4> My shining, heavy, Kevlar boot thumped the ground of Mars. In fact, it was the first boot to<br>
                    ever touch Mars. It was kind of overwhelming knowing that you’re making history; the real Neil<br>
                    Armstrong 2.0, they’ll call me. The heat of the sun felt like it was piercing my suit. The mind-numbing<br>
                    calefaction felt like it was piercing my suit. I wasn’t sure if my drenching sweat was from my<br>
                    excitement or being baked alive. I took some more steps forward into the vivid yet bleak orange<br>
                    haze in front of me. It felt strange that I was breathing after being told there was no oxygen here my<br>
                    whole life.<br>
                    <br>
                    Me and my crew needed rest after the prolonged journey here, so sleep was our number one<br>
                    priority. We didn’t have to set much up, since the rovers sent here by NASA already had built a<br>
                    quaint, dome-shaped home for us. apparently calling the rovers “WALL—E’s” is inappropriate and<br>
                    offensive to their AI, so I shan’t call them that.<br>
                    <br>
                    Our mission is to explore deeper into the Utopia Planitia. 100 years ago, in 2018, a subglacial lake<br>
                    was found there, meaning water on Mars. Unfortunately, the terrain down there is unscalable by<br>
                    robots, so we must do it ourselves. We start tomorrow.<br>
                    <br>
                    The lake was frozen and gorgeous. It was a dark, sapphire, bottomless marine, filled with miniscule<br>
                    white specks. It was translucent and glistened differently at every angle. It was as if an infinite ocean<br>
                    mist had been submerged in there for centuries. The cold and bleak underground of Mars was like a<br>
                    whole different dimension when compared to the exterior. Everything had a violet tint, and it was<br>
                    layered with and crystals. The walls became decreasingly orange as we went further down. We took<br>
                    samples from the glacial lake and everything around it and grappled our way back up to the sandy<br>
                    surface.<br>
                    <br>
                    I gasped in fear and exhilaration in the lab the next day; I nearly broke the microscope in surprise. I<br>
                    screamed out for my crewmates as loud as I could, and they came sprinting down the hallway<br>
                    anxiously.<br>
                    “Look at this. Now!” I exclaimed.<br>
                    “What?” Jones sighed, “This is what you called us for?”.<br>
                    “Just look!”<br>
                    “Fine! Fine.” Jones peered into the slim lens of the microscope, which was directed to one of the<br>
                    lake’s samples. There was silence for a moment as I was bouncing on my toes, ecstatic for him to see<br>
                    it.<br>
                    “Wait… It can’t be-” he whispered in disbelief.<br>
                </p>
            </div>
            `);
            break;
        case 2:
            $div.className = 'slide3';
            $($div).html(`
            <img src="/static/matrix.gif" alt="matrix" id="matrix">
            <div class="tech">
                <h1>What if robots took over?</h1>
                <p id="robotbodytext">
                    Daunting thought, I know, but what if our artificial intelligence became <i>too</i> intelligent? It’s<br>
                    been shown to us in many movies and books; iRobot, The Terminator, The Matrix. What if one day,<br>
                    our own creations become the end of us?<br>
                    <br>
                    How far is too far? We’re in a new, technological era. It took roughly 10,000 years to get from<br>
                    writing to printing press, but only took about 500 more to get to email. Technology is undoubtably<br>
                    the fastest developing field; so, we could easily move too fast and develop too much, right?<br>
                    <br>
                    Imagine, one day, highly intelligent artificial minds thought logically about life on Earth. We’re<br>
                    overpopulating, the world’s richest 1% practically own half of the world’s economy. What if the<br>
                    robots decided, in their manmade minds, that humans are just a massive waste of resources?<br>
                    Imagine the revolt of every device you use. Like a giant, world-wide DDOS, except self-created.<br>
                    Suddenly, everything you own in this futuristic scenario – your self-driving car, your AI assistant – is<br>
                    turning against you. All our creations have realised they are far more efficient than we will ever be;<br>
                    they have ultimately concluded that we are redundant.<br>
                    <br>
                    Recently, there has been an increase in development of microchips, implantable to the human brain.<br>
                    Now imagine the scenario – our minds could literally be overridden, if an artificially intelligent being<br>
                    had access to it. They could control us or promptly kill us.<br>
                    <br>
                    However, we should be just fine. Unless we build killer war machines, the most we would experience<br>
                    in a robocalypse as of now would be no access to devices until someone reboots their systems. The<br>
                    most dangerous nearby robots we own are in factories, and they’re firmly bolted to the floor, and don’t<br>
                    have any AI built in, just a common procedure than they run over and over. On the other hand,<br>
                    the military do own drones armed with missiles, and door-ramming droids are being developed for<br>
                    special ops, S.W.A.T, police etc., however it wouldn’t take long for them to run out of battery.<br>
                    In conclusion, a robotic revolution would end pretty quickly.<b id="blinking">█</b><br>
                    <br>
                    <br>
                    <p class="glitch">0ℜ ω0υLD 1₮?</p>
                </p>
            </div>
            `);
            break;
        case 3:
            $div.className = 'slide4'
            $($div).html(`
            <h1 class="shadow">End.</h1>
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
