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
    const shouldMutateChild = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(faqTemplate.content.cloneNode(true));
    this.clickEvent = new CustomEvent("onclick", {
      bubbles: true,
      detail: [this.getAttribute('isvisible'), this.getAttribute('index'), shouldMutateChild] ,
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
  }

  connectedCallback() {
      //this.shadowRoot.querySelector('#toggle-answer').addEventListener('click', () => this.toggleAnswer());
      this.shadowRoot.querySelector('#toggle-answer').addEventListener('click', () => {
        if (this.getAttribute('isvisible') === 'true') {
          this.setAttribute('isvisible', 'false'); 
          shouldMutateChild = false;
          this.dispatchEvent(this.clickEvent);
        } else {
          this.dispatchEvent(this.clickEvent);
          console.log("clicked");
        }
      });
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
  }

  disconnectedCallback() {
  this.shadowRoot.querySelector('#toggle-answer').removeEventListener();
  }

  static get observedAttributes() {
    return ['isvisible'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("old: " + oldValue);
    console.log("new: " + newValue);
    console.log("name: "  + name);
    if (oldValue) {
      console.log(this.hasAttribute('data-current'));
      console.log("data set: "+ this.dataset.current);
      const currentState = this.getAttribute('data-current');
      console.log("current state: " + this.getAttribute('data-current'))
      if(newValue === 'true' && oldValue === 'true') {
        this.toggleAnswer();
        console.log("old and new are equal to true, do nothing")
      }  //if (this.getAttribute('isvisible') !== 'true') this.toggleAnimation();
      else if (newValue === 'true' && oldValue === 'false') {
        this.setAttribute('data-current', 'true');
        this.toggleAnswer();
      }
      else if (newValue === 'false' && oldValue === 'true' && currentState == 'true') {
        console.log("remove data-current and send to parent");
        this.removeAttribute('data-current');
        this.toggleAnswer();
      }
      else if (newValue === 'false' && oldValue === 'true') {
        this.toggleAnswer();
      }
      else if (newValue === 'false' && oldValue === 'false' && currentState == 'true') {
        console.log("remove data-current and send to parent");
        this.removeAttribute('data-current');
      }
    }
  }
}

window.customElements.define('faq-dropdown', faqDropdown);