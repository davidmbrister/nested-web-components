import coralStyle from '../sass/coral.scss'  

customElements.define('summary-display',
class extends HTMLElement {
    constructor() {
      super();

      // create raw some css from the scss import
      const styleCoralCSS = document.createElement('style');
      styleCoralCSS.appendChild(document.createTextNode(coralStyle));

      const template = document.getElementById('summary-display-template');
      const templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(styleCoralCSS);
      shadowRoot.appendChild(templateContent.cloneNode(true));

      const items = Array.from(this.querySelectorAll('li'));
      const descriptions = Array.from(this.querySelectorAll('p'));

      items.forEach(item => {
        handleClick(item);
      });

      function handleClick(item) {
        item.addEventListener('click', function() {
          items.forEach(item => {
            item.style.backgroundColor = 'white';
          });

          descriptions.forEach(description => {
            updateDisplay(description, item);
          });
        });
      }

      function updateDisplay(description, item) {
        description.removeAttribute('slot');

        if(description.getAttribute('data-name') === item.textContent) {
          description.setAttribute('slot', 'choice');
          item.style.backgroundColor = '#bad0e4';
        }
      }
//
      const slots = this.shadowRoot.querySelectorAll('slot');
      slots[1].addEventListener('slotchange', function(e) {
        const nodes = slots[1].assignedNodes();
        console.log(`Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`);
      });
    }
  }
);