const fadeElements = document.querySelectorAll('.fade-up')

window.addEventListener('scroll', () => {

  fadeElements.forEach(element => {

    const position = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.2

    if(position < screenPosition){
      element.classList.add('active')
    }

  })

})

/* INITIAL LOAD ANIMATION */

window.addEventListener('load', () => {

  fadeElements.forEach(element => {

    element.classList.add('active')

  })

})