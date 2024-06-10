AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Animation de personnage 3D dans un univers simple",
    cardImage: "assets/images/projet/Animation_Robot_3D.png",
    description:
      "",
    tagimg: "",
    Previewlink: "assets/images/projet/AnimationRobot.mp4",
    Githublink: "assets/images/projet/AnimationRobot.mp4",
    
  },

  {
    title: "Modélisation 3D + Animation 3D assiette de donuts",
    cardImage: "assets/images/projet/Animation3DDonuts.png",
    description:
      "https://www.youtube.com/watch?v=1iQk_N1Fb5Y",
    tagimg: "https://www.youtube.com/watch?v=1iQk_N1Fb5Y",
    Previewlink: "https://www.youtube.com/watch?v=1iQk_N1Fb5Y",
    Githublink: "https://www.youtube.com/watch?v=1iQk_N1Fb5Y",
    
  },

  {
    title: "Création d'un jeu-vidéo de parcours et de survie sur Unity : Survival Mechanics",
    cardImage: "assets/images/projet/Unity.png",
    description:
      "Jeu-vidéo de survie et de parcours dont le but est d'atteindre la ligne d'arrivée sans mourir en esquivant les pièges.",
    tagimg: "https://drive.google.com/file/d/1iJx1BrqwF0Xukf-41jjUKVyzA1v1bRQJ/view?usp=drive_link",
    Previewlink: "https://drive.google.com/file/d/1iJx1BrqwF0Xukf-41jjUKVyzA1v1bRQJ/view?usp=drive_link",
    Githublink: "https://drive.google.com/file/d/1iJx1BrqwF0Xukf-41jjUKVyzA1v1bRQJ/view?usp=drive_link",
    
  },

  {
    title: "Modélisation 3D d'un robot, d'une route, d'un piège, d'une orange et d'une banane",
    cardImage: "assets/images/projet/compilation_3D.gif",
    description:
      "Modélisation 3D d'un robot, d'une route, d'un piège, d'une orange et d'une banane, qui seront utilisés pour créer un jeu-vidéo sur Unity",
    tagimg: "assets/images/projet/compilation_montage_modeles_3D.mp4",
    Previewlink: "assets/images/projet/compilation_montage_modeles_3D.mp4",
    Githublink: "assets/images/projet/compilation_montage_modeles_3D.mp4",
  },

  {
    title: "Classeur Virtuel de cartes créées sur Photoshop avec ajout de CSS",
    cardImage: "assets/images/projet/classeur_carte.png",
    description: "Un classeur web montrant mes meilleures créations de cartes avec une brillance ajoutée à l'aide du CSS",
    tagimg: "https://classeur-virtuel.vercel.app/",
    Previewlink: "https://classeur-virtuel.vercel.app/",
    Githublink: "https://classeur-virtuel.vercel.app/",
  },

  {
    title: "Raconter une histoire à travers le motion design",
    cardImage: "assets/images/projet/Raconter_Histoire.png",
    description:
      "Motion design puis montage de la vidéo. Certains pixel art ont été réalisés par moi-même. Tout a été animé grâce à mes compétences en motion design.",
    tagimg: "https://www.youtube.com/watch?v=2h-jHrQTX9c&t=122s",
    Previewlink: "https://www.youtube.com/watch?v=2h-jHrQTX9c&t=122s",
    Githublink: "https://www.youtube.com/watch?v=2h-jHrQTX9c&t=122s",
  },

  {
    title: "Refonte du site vitrine de MMI Champs-sur-Marne",
    cardImage: "assets/images/projet/refonte_du_site.png",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tagimg:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX33x4AAAD/5h+OgBH64h7/6B94bA5dVAv64R7NuRnXwhr23h5mXAzeyBt7bw9fVgtJQgnp0xy5pxZyZw6/rBfEsRiWhxJRSQqpmBTw2R2FeBDo0RyhkROcjRPUvxqThRI6NAcdGgOyoRWLfhE0LwYSEAJMRQlWTgo/OQgwKwYYFgNrYQ0hHgQ4MwcxLQYsJwUKCQA6yu78AAAG50lEQVR4nO2caVvbOhBGbUWiymIg+x6I2xAoofD/f921gZQknrElx45E73u+9cFxdWyto5GDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwaCmE2iOElK4LRPBVwAOMCqqFktHgrj/+s16vd6+P26tGvAoSzbqLbIdYbn9k2E6KSylVtNiGWR6WLSH0BUpuirgiShn+FEU/a0/uqR++sxl1lT+OtGEj31C071i9D67n6kIChZQwlGJZ4Jcym3rSHu0NRfTLQDCh6cdrtDZUEzO/9C5eKNoa0tczdKQHHY6lobixEAzDsXavaGcoOlaCiWLRsFM/Vobq2lIwqajO26KNoYitBZPJg2tFC0M9LyEYhgPHFdXCUN2WMgy7bnsbc0PZKycYjt3WUwvDdUnDMHZaT40NS7/ChKkDsb8YG6rH0oKzb2GoI97gqT+7+9nn5uO/Wt+jHYoRI7CZdJVIUdMe1dkuXUc1jA2ZoeI6+ApZSJVpqw9z59M2U8MpLbg8roFievwgYg+iGYaGskkKPp82MS0fvv7amTp/gYG5Ib3unWZekW6v938cePACA2NDMaMuuyZ6yX2nex18rziN6FOXDSgJsUj+svMkSBMYGyoq+BtGZDVM5gYNj8L7poY/qMvmpKFurbx5gYG5IRm+oA0DD4IzB5i2w2fqsqFXKgymhmSEZuHDeFfEWaPFo0/tjcPUkN6qaPrTZbKYzmkGpOEu8L8lGhpyy8OxRwMfg/EanzYMX9wvjwowNVRjRjHsme36O8N4Bczvio5XXjtWEacJOy2PHc1jbU85iuF46K2jsaEo2Pt9igOvkkz+Yh7zZiI1h7/q+vgizQ1FUYZJQqfpOnaYxWb/sNgwGR9j4dkAaWFouEG6WbS9crR5h8o0TaHhRRjxE6t9/PbGUDEcBd44WhnKvGH/hNiXscMy22RornjvSTzKNmPIQjHst30YOqyzvugNDJrN0IPXaJ25J6LfFo7X7jPb7LMvddsmt+3WeZppmRxhiwTMpKZ2v8ke8PGP5uyKnyByq1jKMNBqYNEameD/hShnmAz+0iTZ+4NNdiP1gpQ1TBP2ufSMDLcup3DlDZPf6sXOTNFlCuY5hsmvZc8sVarlrrc5zzDNoWmRG28nPLqrp+capo7dRrEiueV/Ec43TA+x6UlurDHh3llLrMIwvY0YFmQQO9uIq8gwrayr3KMKfVcvsTLD9xOJeXPyduVlN6NCw3Qyt+JPfbmqppUapif32H619D3PpGLDZGnFxTm2jhpi5YaBWDGK/4whGxt3lM9egyG3I75y09XUYSjppugoR8zaUOriga1NGsb1vkPu+dGpsXecoVbN16vCLoNO7Df4jEF5pODCQXRa5YgxVPP08sKxm96k4m5aBWp1HzIvUTxQhaEftwg+hvO3ov+PztWsz1C009TJO7puCaosYY8wlKq3j68VHX2lc6aXNRnK/fBEJmXrLmlI1EPVOohXjPIV9Zt5xTgbFe1bPXnQkTlzl3kaYnrc58Z5iprevRnWYSjaB5mvE6JUdEcTnlwl5eL0ijxF5jhtq/rxUKrj+VM24MUcXn49ulCr4Wv2mgWrqJhZW+V+BxV0T2YfiHmFRz2JmtPr2r6ma51idhjXVc+8ZZBNzV6fJINym0iHGer6J31Ncjcql02yG1NX1XalWvXIvInDZFCpuK2HwzkyPbZ9sG2qo3wELVVEHj15/68r7Wh0xG1/PQyCzyOf7ZiNOBw+bZ2bz7ZeRvr9G19SCiW6cc6uW7WLJ8FWrYTb2WjU6OdE44/rE3s+9pPfD7PlJI4njZuXvMtuKm6GxYmEOZyM98Lwm0L5VD0aiswAZs7upCyyVYHgrvIpmzDc9yLInPU553HtqbafSWEO7pqQvZlxyh5LHXtPijypZAB1XEv/OdOwlv1Dkdu1sbxSZdFd46xEknq++sUsjIpYkfNjWe7rO5/UtY9fqg9kFsqJ4rq04K62XAyrRMIP+G9zyWnpj5vUmBVlrXif87A1HZYr5KnWzDZ2D4HmsZ1bnazy2faMaz6iKLsWdeumKFVSzMkQUx5cu64OTZ/gpVgWF0Z/xduMeLnI13eyS326MJFRYWzy2cLJhU7QSDUsHPzfYuPCCB0XpZZ83HJ5wZMlUjTZpXfKS6xtCiPFqvADip2hvOyutlbdCVNZH+8i6yNnUojmjF02bjqTqYNTbFqq6XD0fLSo2mxnva4qd/RDCtUdLvunj+3HLG5pd4f03j+gPm2tmoNer9maJ/8QZ+XS6/R+QbRqDpMbDpI7qnPvWA1avlPZF0iS++lq7wgAAAAAAAAA4P/Ff/0ZVyq/bZRoAAAAAElFTkSuQmCC",
    Previewlink: "https://reino-joaquim-alexy.leaderdelivery-togo.com/",
    Githublink: "",
  },

  {
    title: "Présentation sous forme de Motion Design des meilleures oeuvres de l'Impressionnisme",
    cardImage: "assets/images/projet/teaser.png",
    description: "",
    tagimg:
      "data:image/png;base64,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",
    Previewlink: "https://www.youtube.com/watch?v=fzEhkdpvWTc",
    Githublink: "https://www.youtube.com/watch?v=fzEhkdpvWTc",
  },

  {
    title: "Mon propre CV Vidéo avec petite équipe de tournage",
    cardImage: "assets/images/projet/cv_video.jpg",
    description: "Un CV vidéo qui me représente en terme de personnalité, de goût et de centres d'intérêts.",
    tagimg: "https://youtu.be/kibhaDzDUrU",
    Previewlink: "https://youtu.be/kibhaDzDUrU",
    Githublink: "",
  },

  {
    title: "Motion Design African School Way réalisé par groupe de 5 personnes",
    cardImage: "assets/images/projet/African_School_Way.png",
    description: "",
    tagimg: "https://www.youtube.com/watch?v=hwdh-X1KJek&t=1s",
    Previewlink: "https://www.youtube.com/watch?v=hwdh-X1KJek&t=1s",
    Githublink: "https://www.youtube.com/watch?v=hwdh-X1KJek&t=1s",
  },

  {
    title: "Concept de Redesign d'un site web de jeu-vidéo",
    cardImage: "assets/images/projet/RedesignSite.png",
    description: "L'idée était de choisir un site web d'un jeu-vidéo et d'imaginer un redesign du site en question afin d'en proposer une meilleure version. On avait la possibilité d'ajouter des nouvelles fonctionalités sur le site.",
    tagimg: "assets/docs/Site_Pokémon_GO_Concept_Redesign_Alexy.pdf",
    Previewlink: "assets/docs/Site_Pokémon_GO_Concept_Redesign_Alexy.pdf",
    Githublink: "assets/docs/Site_Pokémon_GO_Concept_Redesign_Alexy.pdf",
  },

  {
    title: "Montage vidéo d'une interview d'un gérant de livres numériques",
    cardImage: "assets/images/projet/trace_portfolio.gif",
    description: "Mise en place des plateaux de tournages puis montage de l'interview filmée",
    tagimg:"https://www.youtube.com/watch?v=t0aek8LdQek",
    Previewlink: "https://www.youtube.com/watch?v=t0aek8LdQek",
    Githublink: "https://www.youtube.com/watch?v=t0aek8LdQek",
  },

  {
    title: "Portrait Chinois : Choisir 7 analogies qui nous représente",
    cardImage: "assets/images/projet/portrait_chinois_alexy.png",
    description: "Un portrait chinois qui montre 7 de mes analogies qui me caractérisent le mieux selon ma personalité, mes goûts et mes centres d'intérêts.",
    tagimg: "https://portrait-chinois.vercel.app/",
    Previewlink: "https://portrait-chinois.vercel.app/",
    Githublink: "",
  },

  {
    title: "Leporello + Écrit",
    cardImage: "assets/images/projet/Leporello.jpg",
    description: "",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "assets/images/projet/Leporello.jpg",
    Githublink: "document/Justificatif_Leporello_Alexy.pdf",
  },

  {
    title: "Le livre des 7 Mots",
    cardImage: "assets/images/projet/Livre_des_7_mots.jpg",
    description: "",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "assets/images/projet/Livre_des_7_mots.jpg",
    Githublink: "document/Texte_justificatif_livre_des_7_mots.pdf",
  },

  {
    title: "Création d'un gif d'une publicité pour un service sur Photoshop",
    cardImage: "assets/images/projet/ToysRus.gif",
    description: "Une animation pour un placement de produit chez Toys'R Us",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "assets/images/projet/ToysRus.gif",
    Githublink: "assets/images/projet/ToysRus.gif",
  },
];

 // Récupérez les éléments HTML où vous souhaitez ajouter les liens de téléchargement
 const tagimgLinks = document.getElementsByClassName('data');
 const previewLinks = document.getElementsByClassName('data');
 const githubLinks = document.getElementsByClassName('data');

 // Ajoutez des gestionnaires d'événements de clic pour déclencher le téléchargement
 Array.from(tagimgLinks).forEach(function(element) {
   element.addEventListener('click', function() {
     window.location.href = projet.tagimg;
   });
 });

 Array.from(previewLinks).forEach(function(element) {
   element.addEventListener('click', function() {
     window.location.href = projet.Previewlink;
   });
 });

 Array.from(githubLinks).forEach(function(element) {
   element.addEventListener('click', function() {
     window.location.href = projet.Githublink;
   });
 });

    
// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
