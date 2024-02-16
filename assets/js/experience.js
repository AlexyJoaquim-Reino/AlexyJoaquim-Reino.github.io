AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Stage de Référencement de sites WordPress et de vidéos",
    cardImage: "assets/images/logo-rc2i.png",
    place: "Etouy",
    time: "(11 Avril 2023 - 16 Juin 2023)",
    desp: "<li>Je devais supprimer les liens verbeux et inutiles dans les sites WordPress de mon tuteur. J'étais également chargé d'optimiser le référencement des pages des sites WordPress pour augmenter leur visibilité.</li> <li>Je devais optimiser non seulement des sites WordPress en terme de référencement mais aussi des vidéos. Sauf que pour ce cas-là, je devais réaliser un montage vidéo représentatif d'une page d'un des sites WordPress de mon tuteur et ensuite de le référencer sur Youtube.</li>"
  },
  // {
  //   title: "Stage de Référencement de sites WordPress et de vidéos",
  //   cardImage: "assets/images/logo-rc2i.png",
  //   place: "Etouy",
  //   time: "(April, 11th 2023 - June, 16th 2023)",
  //   desp: "<li>Je devais supprimer les liens verbeux et inutiles dans les sites WordPress de mon tuteur. J'étais également chargé d'optimiser le référencement des pages des sites WordPress pour augmenter leur visibilité.</li> <li>Je devais optimiser non seulement des sites WordPress en terme de référencement mais aussi des vidéos. Sauf que pour ce cas-là, je devais réaliser un montage vidéo représentatif d'une page d'un des sites WordPress de mon tuteur et ensuite de le référencer sur Youtube.</li>"
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Unity",
    cardImage: "assets/images/adobe-photoshop-logo-0 copie.png",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "Blender",
    cardImage: "assets/images/adobe-photoshop-logo-0 copie.png",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "Adobe Première Pro",
    cardImage: "assets/images/adobe-premiere-pro-logo-1-1.png",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Adobe After Effects",
    cardImage: "assets/images/adobe-after-effects-logo.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "Photoshop",
    cardImage: "assets/images/adobe-photoshop-logo-0 copie.png",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "Illustrator",
    cardImage: "assets/images/Adobe_Illustrator_CC_icon.svg.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "InDesign",
    cardImage: "assets/images/IndESIGN-LOGO.png",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "Adobe Audition",
    cardImage: "assets/images/Adobe_Audition_CC_icon_(2020).svg.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "Figma",
    cardImage: "assets/images/FIGMA.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "WordPress",
    cardImage: "assets/images/Wordpress_Blue_logo.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 350px;width:400px">
      
      <img src="${cardImage}" height="230" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy"></p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

document.addEventListener("DOMContentLoaded", showCards3);
