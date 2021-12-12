const accordionContainer = document.querySelector(".accordion__container");

const faqs = [
  {
    question: "mein wada krke bhul jata hun 🤣🤣🤣🤣",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!",
  },

  {
    question: "what is html",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!",
  },
  {
    question: "what is css",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!",
  },
  {
    question: "what is js",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!",
  },
  {
    question: "what is designer",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!",
  },
  {
    question: "what is figma",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!",
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
