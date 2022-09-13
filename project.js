const sBtn=document.querySelector('.s-btn');
const newBtn=document.querySelector('.new-btn');
const MianPage=document.querySelector('.main-page');
const signIn=document.querySelector('.sign-in-page');
const signUp=document.querySelector('.sign-up-page');
const cancel=document.querySelector('.cancel');



sBtn.addEventListener('click',function(){
MianPage.classList.toggle('active');
signIn.classList.add('active');
})



newBtn.addEventListener('click',function(){
    MianPage.classList.toggle('active');
    signUp.classList.add('active');
})



cancel.addEventListener('click',function(){
    MianPage.classList.toggle('active');
signIn.classList.remove('active');
signUp.classList.remove('active');
MianPage.style. transition=".5s";
})