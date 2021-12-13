const mentorsContainer = document.querySelector(".mentors__container");

const mentors = [
  {
    name: "Sunidhi",
    surname: "Kashyap",
    image: "./../assets/mentors/Sunidhi_kashyap.png",
    designation: "SDE-Apple Inc.",
  },
  {
    name: "Roshini",
    surname: "Prajapati",
    image: "./../assets/mentors/Roshini.png",
    designation: "SDE-Apple Inc.",
  },
  // {
  //   name: "Achint",
  //   surname: "Agarwal",
  //   image: "./../assets/mentors/avaatar.jpg",

  //   designation: "SDE-Apple Inc.",
  // },
  {
    name: "Khushi",
    surname: "Gupta",
    image: "./../assets/mentors/Khushi.png",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Utkarsh",
    surname: "K.",
    image: "./../assets/mentors/Uttkarsh.png",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Gokalp",
    surname: " ",
    image: "./../assets/mentors/Gokalp.png",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Prashant",
    surname: "Katiyar",
    image: "./../assets/mentors/Prashant.png",

    designation: "SDE-Apple Inc.",
  },
  // {
  //   name: "Tushar",
  //   surname: "Kumar",
  //   image: "./../assets/mentors/avaatar.jpg",

  //   designation: "SDE-Apple Inc.",
  // },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/saurav.png",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Manav",
    surname: "Agarwal",
    image: "./../assets/mentors/manav.png",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Kartik",
    surname: "Gupta",

    image: "./../assets/mentors/kartik.png",
    designation: "SDE-Apple Inc.",
  },
];

for (const mentor of mentors) {
  mentorsContainer.innerHTML += `
    <div class="mentors__container__card">
  <img src = '${mentor.image}' alt="" />
  <h1 class="name">${mentor.name}</h1>
  <h1 class="surname">${mentor.surname}</h1>
</div>

    `;
}
