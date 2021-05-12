const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav-links');

    burger.addEventListener('click', ()=> {
        nav.classlist.toggle('nav-active');
    })
}

const app = ()=> {
    navSlide();
}