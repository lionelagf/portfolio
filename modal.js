const projects = [
  {
    id: '1',
    title: 'Booki',
    logo: './assets/logo/booki-logo.png',
    cover: './assets/screenshot/screenshot-booki.jpg',
    pictures: [
      './assets/screenshot/screenshot-booki2.jpg',
      './assets/screenshot/screenshot-booki3.jpg',
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
    logo: './assets/logo/ohmyfood-logo.png',
    cover: './assets/screenshot/screenshot-ohmyfood.jpg',
    pictures: [
      './assets/screenshot/screenshot-ohmyfood2.jpg',
      './assets/screenshot/screenshot-ohmyfood3.jpg',
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
    logo: './assets/logo/kasa-logo.png',
    cover: './assets/screenshot/screenshot-kasa.jpg',
    pictures: [
      './assets/screenshot/screenshot-kasa2.jpg',
      './assets/screenshot/screenshot-kasa3.jpg',
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
    logo: './assets/logo/nina-carducci-logo.png',
    cover: './assets/screenshot/screenshot-nina-carducci.jpg',
    pictures: [
      './assets/screenshot/screenshot-nina-carducci2.jpg',
      './assets/screenshot/screenshot-nina-carducci3.jpg',
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
  modal.innerHTML = `
        <div class="modal-container">
        <button data-close-modal="${
          project.id
        }"><i class="fa-solid fa-xmark"></i></button>
        
        <img src="${project.logo}" alt="Logo de ${project.title}"/>
        <h2>Ce que le projet m’a appris</h2>
            <p>${project.description}</p>
            <h2>Les compétences acquises</h2>
            <ul>
             ${project.abilities
               .map((ability) => `<li>${ability}</li>`)
               .join('')}
            </ul>
            </div>
    `
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