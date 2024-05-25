const projects = [
  {
    id: '1',
    title: 'Booki',
    logo: './images/logo/booki-logo.webp',
    cover: './images/screenshot/screenshot-booki.webp',
    pictures: [
      './images/screenshot/screenshot-booki2.jpg',
      './images/screenshot/screenshot-booki3.jpg',
    ],
    summary: "Créer la page d'accueil d'une agence de voyage avec HTML & CSS",
    description:
      'Dans ce projet, il a fallu créer la page d’accueil d’une agence de voyage en utilisant HTML et CSS. La mission principale a été d’intégrer l’interface responsive du site. Les maquettes Figma pour mobile, tablette, et desktop, ainsi que les images et une note de synthèse sur les spécificités du projet ont été mises à disposition.',
    techs: ['HTML', 'CSS', 'Figma'],
    abilities: [
      'La capacité à créer des interfaces web responsives,',
      'L’intégration des maquettes en utilisant HTML et CSS,',
      'La configuration d’un environnement de développement efficace.',
    ],
  },
  {
    id: '2',
    title: 'Ohmyfood',
    logo: './images/logo/ohmyfood-logo.webp',
    cover: './images/screenshot/screenshot-ohmyfood.webp',
    pictures: [
      './images/screenshot/screenshot-ohmyfood2.jpg',
      './images/screenshot/screenshot-ohmyfood3.jpg',
    ],
    summary: "Améliorer l'interface d'un site mobile avec des animations CSS",
    description:
      'Dans ce projet, il a fallu travailler sur l’interface mobile-first du site d’une start-up. Sass pour implémenter des animations CSS et Git et GitHub pour versioner le projet ont été au cœur du projet. Cette approche mobile-first m’a permis de comprendre l’importance de concevoir des sites web adaptatifs et réactifs.',
    techs: ['HTML', 'CSS', 'Figma'],
    abilities: [
      'La capacité de créer des interfaces web mobile-first,',
      'L’intégration d’animations CSS,',
      'La maîtrise de Sass pour structurer et optimiser le CSS,',
      'La capacité à utiliser Git et GitHub pour la gestion de version et la collaboration sur des projets.',
    ],
  },
  {
    id: '3',
    title: 'Kasa',
    logo: './images/logo/kasa-logo.webp',
    cover: './images/screenshot/screenshot-kasa.webp',
    pictures: [
      './images/screenshot/screenshot-kasa2.jpg',
      './images/screenshot/screenshot-kasa3.jpg',
    ],
    summary: 'Créer une application web de location immobilière avec React',
    description:
      'Dans ce projet, il a fallu implémenter le front-end d’une application en utilisant React et pour créer une expérience moderne et réactive. React Router a été utilisé pour configurer la navigation entre les différentes pages de l’application.',
    techs: ['HTML', 'CSS', 'Javascript', 'React'],
    abilities: [
      'La maîtrise de React et React Router,',
      'Utilisation de données extraite d’un fichier JSON,',
      'Réutilisation de composants.',
    ],
  },
  {
    id: '4',
    title: 'Nina Carducci',
    logo: './images/logo/nina-carducci-logo.webp',
    cover: './images/screenshot/screenshot-nina-carducci.webp',
    pictures: [
      './images/screenshot/screenshot-nina-carducci2.jpg',
      './images/screenshot/screenshot-nina-carducci3.jpg',
    ],
    summary: "Optimiser le référencement d'un site de photographe",
    description:
      'Dans ce projet, il a fallu travailler sur l’optimisation du référencement d’un site ainsi que l’amélioration de sa performance et de son accessibilité. Cela a commencé par l’identification des problèmes de chargement et la recherche d’amélioration de la structure HTML.',
    techs: ['HTML', 'Lighthouse', 'Wave'],
    abilities: [
      'La réalisation d’audit Lighthouse et Wave,',
      'Une meilleurs compréhension de la structure HTML pour les moteurs de recherche,',
      'L’optimisation du contenu d’un site web.',
    ],
  },
]

function createModal(project) {
  const modal = document.createElement('dialog')
  modal.setAttribute('class', 'modal')
  modal.setAttribute('data-modal', project.id)
  // Création du conteneur modal
  const modalContainer = document.createElement('div')
  modalContainer.className = 'modal-container'

  // Création du bouton de fermeture
  const closeButton = document.createElement('button')
  closeButton.setAttribute('data-close-modal', project.id)
  closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  modalContainer.appendChild(closeButton)

  // Création de l'image
  const projectLogo = document.createElement('img')
  projectLogo.src = project.logo
  projectLogo.alt = `Logo de ${project.title}`
  modalContainer.appendChild(projectLogo)

  // Ajout du titre "Ce que le projet m’a appris"
  const titleLearned = document.createElement('h2')
  titleLearned.textContent = 'Ce que le projet m’a appris'
  modalContainer.appendChild(titleLearned)

  // Ajout de la description du projet
  const projectDescription = document.createElement('p')
  projectDescription.textContent = project.description
  modalContainer.appendChild(projectDescription)

  // Ajout du titre "Les compétences acquises"
  const titleSkills = document.createElement('h2')
  titleSkills.textContent = 'Les compétences acquises'
  modalContainer.appendChild(titleSkills)

  // Création de la liste des compétences
  const abilitiesList = document.createElement('ul')
  project.abilities.forEach((ability) => {
    const listItem = document.createElement('li')
    listItem.textContent = ability
    abilitiesList.appendChild(listItem)
  })
  modalContainer.appendChild(abilitiesList)

  // Ajout du conteneur modal à l'élément modal
  modal.appendChild(modalContainer)
  document.body.appendChild(modal)

  // Ajouter un gestionnaire d'événements pour fermer la modal
  modal
    .querySelector(`[data-close-modal="${project.id}"]`)
    .addEventListener('click', () => {
      modal.close()
    })

  // Ajouter un gestionnaire d'événements pour fermer la modal en cliquant en dehors
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close()
    }
  })
}

// Créer et ajouter une modal pour chaque projet
projects.forEach(createModal)

// Ajouter des gestionnaires d'événements pour ouvrir les modales
projects.forEach((project) => {
  document
    .querySelectorAll(`[data-open-modal="${project.id}"]`)
    .forEach((openButton) => {
      openButton.addEventListener('click', () => {
        const modal = document.querySelector(
          `.modal[data-modal="${project.id}"]`
        )
        modal.showModal()
      })
    })
})
