//changing background periodically
function changeBackground() {
    const bgImage = [
        "url('https://source.unsplash.com/random/1920X1080?landscape')",
        "url('https://source.unsplash.com/random/1920X1080?nature')",
        "url('https://source.unsplash.com/random/1920X1080?building')",
        "url('https://source.unsplash.com/random/1920X1080?water')",
        "url('https://source.unsplash.com/random/1920X1080?fruit')",
        "url('https://source.unsplash.com/random/1920X1080?city')",
        "url('https://source.unsplash.com/random/1920X1080?sea')",
        "url('https://source.unsplash.com/random/1920X1080?birds')",
        "url('https://source.unsplash.com/random/1920X1080?animals')",
        "url('https://source.unsplash.com/random/1920X1080?art')",
        "url('https://source.unsplash.com/random/1920X1080?science')",
        "url('https://source.unsplash.com/random/1920X1080?color&patterns')"
    ]
    
    let body = document.querySelector('body');
    let bgImage1 = bgImage[Math.floor(Math.random() * bgImage.length)]
    body.style.backgroundImage = bgImage1
}

setInterval(changeBackground, 500);