document.getElementById('logo').addEventListener('click',()=>{
   window.location.href = '../../index.html'
})

const menuBar = document.getElementById('menu-bar');
const menu = document.getElementById('menu-nav');

menuBar.addEventListener('click',()=>{
   menu.classList.remove('hidden');
   menu.classList.add('flex');
})

menu.addEventListener('click',()=>{
   menu.classList.remove('flex');
   menu.classList.add('hidden');
})