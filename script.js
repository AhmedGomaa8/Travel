let menu = document.querySelector('.menu');
let closex = document.querySelector('.close');


let links = document.getElementById('links');


menu.onclick = function () {
    links.classList.add('show')
    menu.style.display = 'none'
}

closex.onclick = function () {
    links.classList.remove('show')
    menu.style.display = 'block'
}

let scrollToTop = document.querySelector('.up');

window.onscroll = function () {
    if (scrollY >= 600) {
        scrollToTop.classList.add('show');
    }else {
        scrollToTop.classList.remove('show');
    }
}
scrollToTop.onclick = function () {
    scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

let fadeElements = document.querySelectorAll('.fade');
let slideTopElements = document.querySelectorAll('.slide-top');
let slideBottomElements = document.querySelectorAll('.slide-bottom');
let slideRightElements = document.querySelectorAll('.slide-right');
let slideLeftElements = document.querySelectorAll('.slide-left');

let options = {
    threshold: 0,
    rootMargin: '0px 0px -190px 0px'
}

let scrollObserve = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            scrollObserve.unobserve(entry.target)
        }else {
            entry.target.classList.remove('fade-in')
        }
    })
},options)

fadeElements.forEach((el) => {
    scrollObserve.observe(el)
})
slideTopElements.forEach((el) => {
    scrollObserve.observe(el)
})
slideBottomElements.forEach((el) => {
    scrollObserve.observe(el)
})
slideRightElements.forEach((el) => {
    scrollObserve.observe(el)
})
slideLeftElements.forEach((el) => {
    scrollObserve.observe(el)
})