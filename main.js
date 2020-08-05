
// Putting line through dino names on click.

const lineThrough = function(event) {
    const itemClicked = event.target;
    itemClicked.style.textDecoration = 'line-through';
}

const linedItems = document.querySelectorAll('ol');
for(const items of linedItems) {
    items.addEventListener('click', lineThrough);
}

// Fading out dino names

const fadeOut = function(event) {
    const fadedDino = event.target;
    fadedDino.style.transition = '1.5s';
    fadedDino.style.opacity = '0';
}

const fadeList = document.querySelectorAll('ul');
for (const faded of fadeList) {
    faded.addEventListener('click', fadeOut);
}

// Image fade

const imgFade = function(event) {
    const faded = event.target;
    faded.style.transition = '1s';
    faded.style.width = '0px';
}

const imgFadeOut = document.querySelectorAll('#row');
for(imgs of imgFadeOut) {
    imgs.addEventListener('click', imgFade);
}

// Complete wipe out

const abolish = function() {
    for (const lineThrough of linedItems) {
        lineThrough.style.textDecoration = 'line-through'
    }
    for (const fade of fadeList) {
        fade.style.transition = '0.9s';
        fade.style.opacity = '0';
    }
    for (const img of imgFadeOut) {
        img.style.transition = '0.9s';
        img.style.opacity = '0'
    }
}

const button = document.querySelector('#destroy-all');
button.addEventListener('click', abolish)

