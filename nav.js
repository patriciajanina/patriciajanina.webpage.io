document.addEventListener('DOMContentLoaded', function () {

    const nav=document.querySelector('.nav-menu');
    const toggle=document.querySelector('.nav-toggle');



    nav.addEventListener('click', function () {
        toggle.classList.toggle('activeNav');
    });

});