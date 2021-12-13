const accordionContainer = document.querySelector(".accordion__container");

const faqs = [
  {
    question: "Why participate in the design hackathon?",
    answer:
      "Hackathons provide a great opportunity to learn problem solving skills in a time restricted environment. Design hackathon would provide a great opportunity to both experienced as well newbie designers to explore and showcase their design skills while learning lot of new things along the way.",
  },

  {
    question: "What is the team-size for the hackathon?",
    answer:
      "The team size can range from 2-4 members. Hackathons also provide a great team building experience.",
  },
  {
    question: "What is the duration of the Hackathon?",
    answer:
      "It is a 36 hour hackathon starting from 00:00 Hours on 23nd December 2021 and ends at 12:00 Hours on 24th December 2021",
  },
  {
    question: "What if I have never been to any hackathon before?",
    answer:
      "Then we're so glad this will be your first ever! It’s helpful to have some prior design experience, but it’s not a requirement. We’ll have talks, mentors and workshops to help you with your project.",
  },
  {
    question: "Are there going to be themes for the hackthon?",
    answer:
      "We will be releasing the theme and the problem statement at the beginning of the hack and the problem has to be solved and designed within the limited time frame",
  },
];

for (const faq of faqs) {
  accordionContainer.innerHTML += `
     <div class="accordion__item">
            <header class="accordion__header">
              <i class="bx bx-plus accordion__icon"></i>
              <h3 class="accordion__title">${faq.question}</h3>
            </header>

            <div class="accordion__content">
              <p class="accordion__description">
                ${faq.answer}
              </p>
            </div>
          </div>

     `;
}
