window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 100);
}) 

const faqs = document.querySelectorAll('.faq');


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');


        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-minus'){
            icon.className = 'fa-solid fa-plus';
        }else{
            icon.className = 'fa-solid fa-minus';
        }
    })
})

const menu=document.querySelector(".nav__menu"); 
const menuBtn=document.querySelector("#open-btn");
const closeBtn=document.querySelector("#close-btn");


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none";
})

closeBtn.addEventListener('click',()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";

})