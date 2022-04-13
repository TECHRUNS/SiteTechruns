let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.toggle('active');
}
