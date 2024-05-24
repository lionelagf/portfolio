// Ajout de la propriété active au clique

const navlinks = document.querySelectorAll('.nav-link')

function activeNav() {
  navlinks.forEach((l) => l.classList.remove('active'))
  this.classList.add('active')
}

navlinks.forEach((l) => l.addEventListener('click', activeNav))

// Ajout de la propriété active au scroll
function activateSection() {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.nav-link')

  let index = sections.length

  while (--index && window.scrollY + 0 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove('active'))
  if (navLinks[index]) {
    navLinks[index].classList.add('active')
  }
}

window.addEventListener('scroll', activateSection)
