const mentorsContainer = document.querySelector(".mentors__container");

const mentors = [
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",
    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",
    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",

    image: "./../assets/mentors/avaatar.jpg",
    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
  {
    name: "Sourav",
    surname: "Chandawad",
    image: "./../assets/mentors/avaatar.jpg",

    designation: "SDE-Apple Inc.",
  },
];

for (const mentor of mentors) {
  mentorsContainer.innerHTML += `
    <div class="mentors__container__card">
  <img src = '${mentor.image}' alt="" />
  <h1 class="name">${mentor.name}</h1>
  <h1 class="surname">${mentor.surname}</h1>
  <p class="designation">${mentor.designation}</p>
</div>

    `;
}
