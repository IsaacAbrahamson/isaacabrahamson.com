// hide navbar on scroll
window.addEventListener('scroll', function(e) {
  if(window.scrollY > 10) {
    if(window.innerWidth <= 1024) document.querySelector('.nav-inner .logo').style.opacity = 0
    else document.querySelector('.nav-inner').style.opacity = 0
  } else {
    if(window.innerWidth <= 1024) document.querySelector('.nav-inner .logo').style.opacity = 1
    else document.querySelector('.nav-inner').style.opacity = 1
  }
});

document.querySelector('button.hamburger').addEventListener('click', (e) => {
  document.querySelector('body').classList.toggle('menu-active')
})

// document.querySelector('.toggle').addEventListener('click', (e) => {
//   let items = document.querySelectorAll('.toggle .item')
//   for (let item of items) {
//     item.classList.toggle('active')
//   }
// })