let closee = document.querySelector('.close');
let hamBurger = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');

hamBurger.addEventListener('click' , ()=>{
    navLinks.style.opacity = "100%";
    hamBurger.style.display = 'none';
}
)
closee.addEventListener('click' ,function (){
    navLinks.style.opacity = '0%';
    setTimeout(()=>{
        hamBurger.style.display = 'block';
    } , 200)
})