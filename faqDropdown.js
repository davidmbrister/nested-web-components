const faqTemplate = document.createElement('template');

faqTemplate.innerHTML = `
  <style>
  .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1;
      background-color: #eee;
      color: #444;
      cursor: pointer;
      padding: 17px;
      width: 100%;
      text-align: left;
      border-top: 1px inset #444;
      outline: none;
      transition: 0.4s;
    }

    /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
    .active, .faq:hover {
      background-color: #ccc;
    }

    /* Style the accordion panel. Note: hidden by default */
    .answer-panel {
      padding: 0 18px;
      background-color: white;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
    }

    .faq:after {
      content: '+';
      font-size: 30px;
      color: #777;
      float: right;
      margin-left: 5px;
    }

    .faq.active:after {
      font-size: 34px;
      content: '-';
    }

    .no-margin {
      margin: 0;
      padding: 0;
    }
  </style>
  <button id="toggle-answer" class="faq"><slot name="question" /></button>
  <div class="answer-panel">
    <p><slot name="answer"></p>
  </div>
`;

class faqDropdown extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(faqTemplate.content.cloneNode(true));
    const toggleBtn = this.shadowRoot.querySelector('#toggle-answer');
    console.log(this.getAttribute('custom-height'));
    if(this.getAttribute('custom-height') === "1") {
      toggleBtn.style.maxHeight = '10px';
    } else if(this.getAttribute('custom-height') === "2") {
      toggleBtn.style.maxHeight = '50px';
    } else if(this.getAttribute('custom-height') === "3") {
      toggleBtn.style.maxHeight = '60px';
    } else if(this.getAttribute('custom-height') === "4") {
      toggleBtn.style.maxHeight = '70px';
    }
    else {
    console.log("equal to null or invalid");
    }
  //this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
  //console.log("HIIIIII" + this.getAttribute('avatar'));
  //this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  toggleAnswer() {
    //this.showAnswer = !this.showAnswer;

    const answerPanel = this.shadowRoot.querySelector('.answer-panel');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-answer');

    if(answerPanel.style.maxHeight) {
    toggleBtn.classList.toggle("active");
    answerPanel.style.maxHeight = null;
    } else {
    toggleBtn.classList.toggle("active");
    answerPanel.style.maxHeight = answerPanel.scrollHeight + "px";
    }
  }

  connectedCallback() {
  this.shadowRoot.querySelector('#toggle-answer').addEventListener('click', () => this.toggleAnswer());
  }

  disconnectedCallback() {
  this.shadowRoot.querySelector('#toggle-answer').removeEventListener();
  }
}
window.customElements.define('faq-dropdown', faqDropdown);