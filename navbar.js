// Ajout de la propriété active au clique

// const navlinks = document.querySelectorAll('.nav-link')

// function activeNav() {
//   navlinks.forEach((l) => l.classList.remove('active'))
//   this.classList.add('active')
// }

// navlinks.forEach((l) => l.addEventListener('click', activeNav))

// Ajout de la propriété active au scroll
function activateSection() {
  const sections = document.querySelectorAll('.scroll')
  const navLinks = document.querySelectorAll('.nav-link')
  const firstSection = document.querySelector('.first-section') // Assurez-vous que cette classe correspond à votre première section

  let index = sections.length

  // Ajoutez une valeur de décalage de 300 pixels
  const offset = 300 // Ajustez cette valeur à la hauteur désirée

  while (--index && window.scrollY + offset < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove('active'))

  // Vérifiez si le défilement est au-dessus de la première section 'scroll'
  if (window.scrollY < sections[0].offsetTop - offset) {
    // Ajoutez la classe 'active' à la première section si c'est le cas
    if (firstSection) {
      navLinks[0].classList.remove('active')
    }
  } else if (navLinks[index]) {
    // Sinon, ajoutez la classe 'active' à l'élément correspondant
    navLinks[index].classList.add('active')
  }
}

window.addEventListener('scroll', activateSection)
