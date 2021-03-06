const overlay = document.getElementById('overlay')

// Fade in transition on load after slight delay
setTimeout(function() {
  // only fade in if at top of page
  if (window.pageYOffset < 10) {
    overlay.style.background = 'rgba(255,255,255,0.95)'
  }
}, 100)

// Fade in other items on load after slight delay
setTimeout(function() {
  // only fade in if at top of page and not mobile
  if (window.pageYOffset < 10 && window.innerWidth > 1024) {
    document.querySelector('.learn-more').style.opacity = 1
    document.querySelector('.nav-inner').style.opacity = 1
  }
}, 800)


// Fade out background image and .learn-more on scroll past top
document.addEventListener('scroll', function () {

  // fade in animation no longer needed so remove it
  if (window.pageYOffset > 10) {
    overlay.classList.remove('bg-animated')
    document.querySelector('.learn-more').classList.remove('learn-more-animated')
  }

  overlay.style.background = `rgba(255,255,255,${0.95 + window.pageYOffset / 9000})`

  document.querySelector('.learn-more').style.opacity = 1 - (window.pageYOffset / 200)
});

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