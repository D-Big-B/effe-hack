const mentorsContainer = document.querySelector(".mentors__container");
import sunidhiImage from "./../assets/mentors/Sunidhi_kashyap.png";
import roshiniImage from "./../assets/mentors/Roshini.png";
import khushiImage from "./../assets/mentors/Khushi.png";
import uttkarshImage from "./../assets/mentors/Uttkarsh.png";
import gokalpImage from "./../assets/mentors/Gokalp.png";
import prashantImage from "./../assets/mentors/Prashant.png";
import sauravImage from "./../assets/mentors/saurav.png";
import manavImage from "./../assets/mentors/manav.png";
import kartikImage from "./../assets/mentors/kartik.png";

const mentors = [
  {
    name: "Sunidhi",
    surname: "Kashyap",
    image: sunidhiImage,
    designation: "SDE-Apple Inc.",
  },
  {
    name: "Roshini",
    surname: "Prajapati",
    image: roshiniImage,
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
    image: khushiImage,

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Utkarsh",
    surname: "K.",
    image: uttkarshImage,

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Gokalp",
    surname: " ",
    image: gokalpImage,

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Prashant",
    surname: "Katiyar",
    image: prashantImage,

    designation: "SDE-Apple Inc.",
  },
  // {
  //   name: "Tushar",
  //   surname: "Kumar",
  //   image: "./../assets/mentors/avaatar.jpg",

  //   designation: "SDE-Apple Inc.",
  // },
  {
    name: "Saurav",
    surname: "Chandawad",
    image: sauravImage,

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Manav",
    surname: "Agarwal",
    image: manavImage,

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Kartik",
    surname: "Gupta",

    image: kartikImage,
    designation: "SDE-Apple Inc.",
  },
];

for (const mentor of mentors) {
  mentorsContainer.innerHTML += `
    <div class="mentors__container__card">
  <img src = ${mentor.image} alt="" />
  <h1 class="name">${mentor.name}</h1>
  <h1 class="surname">${mentor.surname}</h1>
</div>

    `;
}
