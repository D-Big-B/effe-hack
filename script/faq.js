const accordionContainer = document.querySelector(".accordion__content");

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
  <header class="item__header">
    <i class="bx bx-chevron-down item__icon" ></i>
    <h4 class="item__question">${faq.question}</h4>
  </header>
  <div class="item__content">
    <p class="item__answer">
      ${faq.answer}
    </p>
  </div>
</div>

    `;
}
