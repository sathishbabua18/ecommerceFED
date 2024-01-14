const nav=document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    nav.classList.toggle('sticky',window.scrollY>120)
})

const menuBar=document.querySelector('.menuBar')
const navUl=document.querySelector('.navUl')

menuBar.addEventListener('click',()=>{
    navUl.classList.toggle('showBar')
})