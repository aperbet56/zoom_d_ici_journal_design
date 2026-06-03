// Récupération des éléments HTML5
const dateAndTime = document.querySelector("time");
const copyrightYear = document.querySelector(".year");

// Déclaration de la fonction displayDateAndTime() qui va permettre l'affichage de la date et de l'heure
const displayDateAndTime = () => {
  // Déclaration des différentes variables utilisées pour l'affichage de l'heure
  let today = "";
  let year = "";
  let monthsList = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  let month = "";

  //Attention la semaine commence un dimanche en Javascript
  let daysList = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  let dayNumber = "";
  let dayName = "";
  let hours = "";
  let minutes = "";
  let twoNumberDisplay = "";

  // Récupération de la date actuelle
  today = new Date();

  // Récupération de l'année en cours
  year = today.getFullYear();

  // Récupération du mois en cours
  month = monthsList[today.getMonth()];

  // Récupération du noméro  du jour
  dayNumber = today.getDate();

  // Récupération du jour en cours
  dayName = daysList[today.getDay()];

  // affichage d'un zéro devant un nombre/chiffre
  twoNumberDisplay = (item) => {
    if (item < 10) {
      return (item = "0" + item);
    } else {
      return item;
    }
  };

  // Récupéreation de l'heure :
  hours = twoNumberDisplay(today.getHours());

  // Récupéreration des minutes :
  minutes = twoNumberDisplay(today.getMinutes());

  //Affichage dynamique de la date et de l'heure dans le DOM :
  dateAndTime.textContent =
    dayName +
    " " +
    dayNumber +
    " " +
    month +
    " " +
    year +
    " " +
    hours +
    ":" +
    minutes;

  // Lancer la fonction displayDateAndTime toutes les 1000 ms, soit toute les secondes pour afficher l'heure en temps réel:
  setTimeout(displayDateAndTime, 1000);

  // Affichage dynamique de l'année dans le DOM
  copyrightYear.textContent = `${year}`;
};

// Appel de la fonction displayDateAndTime()
displayDateAndTime();
