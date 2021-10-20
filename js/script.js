'use strict';
//Slider swiper
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});



const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector(".hamburger"),
      menuBtnClose = document.querySelector('.close'),
      menuItem = document.querySelectorAll('.menu_link');

      menuBtn.addEventListener('click', ()=>{
        menuBtn.style.display= 'none';
        menu.classList.toggle('active');
        menuBtnClose.style.display = 'block';
      });
      menuBtnClose.addEventListener('click', ()=>{
        menuBtn.style.display= 'none';
        menu.classList.toggle('active');
        menuBtnClose.style.display = 'none';
        menuBtn.style.display= 'block';

      });
      menuItem.forEach(function(item){
        item.addEventListener('click', ()=>{
          menu.classList.remove('active');
          menuBtnClose.style.display = 'none';
          menuBtn.style.display= 'block';
        });
      });

const headerBtn = document.querySelector('.header_link');
const contactForm = document.querySelector('.header_form');
      headerBtn.addEventListener('click',()=>{
        contactForm.classList.toggle('active');
      });

let inputBorder = document.querySelector('.input_border');
let range = document.querySelector('.line');
let plansTitle = document.querySelectorAll('.plans_subtitle')
range.addEventListener('click', ()=>{  
  inputBorder.innerHTML = range.value;
})


// plansTitle.forEach(function(item,index){
//     range.addEventListener('click', ()=>{
//     inputBorder.value = index;
//     inputBorder.innerText = item.textContent;
//   });
// })
// range.addEventListener('click', ()=>{
//   inputBorder.innerHTML = range.value;
// });

     