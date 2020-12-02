import defineFaqDropdownGroup from './FaqDropdownGroup.js';

defineFaqDropdownGroup();

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
    this.clickEvent = new CustomEvent("onclick", {
      bubbles: true,
      detail: [this.getAttribute('isvisible'), this.getAttribute('index')] ,
      cancelable: false,
    });
    const toggleBtn = this.shadowRoot.querySelector('#toggle-answer');
   // console.log(this.getAttribute('custom-height'));
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
    //console.log("equal to null or invalid");
    }
  //this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
  //console.log("HIIIIII" + this.getAttribute('avatar'));
  //this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  connectedCallback() {
      this.shadowRoot.querySelector('#toggle-answer').addEventListener('click', () => this.toggleAnswer());
      // add the visibility prop if it's not there
      if (!this.hasAttribute('isvisible')) {
        //console.log("adding isvisible and setting to false")
        this.setAttribute('isvisible', 'false');
      }
      if (!this.hasAttribute('index')) {
        //console.log("adding index")
        this.setAttribute('index', 'null');
      }
      this.addEventListener('update', function(e) {
        console.log("attribute change detail: " + e.detail);
      })
  }
  toggleAnimation() {
       
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

  toggleAnswer() {
    
    this.toggleAnimation();

    if (this.getAttribute('isvisible') === 'true') {
      this.setAttribute('isvisible', 'false'); 
     // console.log(this.getAttribute('isvisible'));
    } else {
      this.setAttribute('isvisible', 'true'); 
      //console.log(this.getAttribute('isvisible'));
    }

    this.dispatchEvent(this.clickEvent);
    console.log(this.clickEvent);
  }


  disconnectedCallback() {
  this.shadowRoot.querySelector('#toggle-answer').removeEventListener();
  }

  get isvisible() {
    return this.hasAttribute('isvisible');
  }
  
  set isvisible(val) {
        if(val) {
          this.setAttribute('isvisible', val);
        } else {
          this.removeAttribute('isvisible');
        }
    }
  static get observedAttributes() {
    return ['isvisible'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("old: " + oldValue);
    console.log("new: " + newValue);
    console.log("name: "  + name);
    if (oldValue) {
          if (this.getAttribute('isvisible') !== 'true') this.toggleAnimation();
    }
    // if this answer is not of the index in the detail, toggle it
    //this.toggleAnswer();
  }
}
window.customElements.define('faq-dropdown', faqDropdown);