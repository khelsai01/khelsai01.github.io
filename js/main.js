
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('nav-menu')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//! =================== Collapse Button ======================
const navigation_box = document.querySelector('#navigation_box')
const menuToggle = document.querySelector('#menuToggle')
const nav_links = document.querySelectorAll('.nav-link')

menuToggle.addEventListener('click', () => {
    navigation_box.classList.toggle('slidein_active')
    transform_hamburger()
})
nav_links.forEach(el => {
    el.addEventListener('click', () => {
        navigation_box.classList.toggle('slidein_active')
        transform_hamburger()
    })
})

function transform_hamburger() {
    let first = document.querySelector('#first_span')
    let second = document.querySelector('#second_span')
    let third = document.querySelector('#third_span')

    first.classList.toggle('first_span_active')
    second.classList.toggle('second_span_active')
    third.classList.toggle('third_span_active')
}

//! ============= resume button ==========
document.getElementById("resume-link-1").onclick = () => {

    window.open("https://drive.google.com/file/d/1xq3aD19nNfxts4MNooyjRGNA3VSt6UfZ/view?usp=sharing");
}

document.getElementById("resume-link-2").onclick = () => {

    window.open("https://drive.google.com/file/d/1xq3aD19nNfxts4MNooyjRGNA3VSt6UfZ/view?usp=sharing");
}

//! ================= Fixture =================
    window.addEventListener('load',()=>{
        // window.scrollTo(0, 0);
        window.location.href = '#home'
    })
//! ================= SCROLL REVEAL JS =================
