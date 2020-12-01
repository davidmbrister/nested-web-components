export default function defineFaqDropdownGroup() {

    const faqGroupTemplate = document.createElement('template');

    faqGroupTemplate.innerHTML = `
      <div class="faq-group">
        <slot name="single-faq">
      </div>
    `;

    class FaqDropdownGroup extends HTMLElement {
      constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(faqGroupTemplate.content.cloneNode(true));
        
        
        this.items = {
          set currentItems(item) {
            this.itemList.push(item);
          },
          itemList: []
        };
        // This Parent requires an account of all the child faqs and their visibility property values. 
        
      }
    // Add event listener that will catch an event bubbling up with it's id number, 
    // then make sure all the faqs that don't have that id are turned off
//
      connectedCallback() {
    
      this.addEventListener("click", function (e) {
        console.log('listend to click event');
        console.log(e.detail);
      });
      const faqs = Array.from(this.querySelectorAll('faq-dropdown'));
      //console.log("The Length" + faqs.length);
      for (let i = 0; i < faqs.length; i++) {
            const newChild = {};
            newChild["index"] = i;
            newChild["isvisible"] = faqs[i].isvisible;
            let theIndex = faqs[i].setIndex = i;
            this.items.currentItems = { index: faqs[i].getAttribute('index'), active: faqs[i].getAttribute('isvisible') };
            //console.log("The index" + this.items);
            console.log("This should be the element being iterated" + faqs[i].getAttribute('isvisible'));
            console.log(faqs[i].getAttributeNames());
          }; 
        console.log("Current items on the dropdown object" + this.items.length +  JSON.stringify(this.items)); 
      }

 /*      set items(item) {
        this._items = [...this.items, item];
      }
      get items() {
        return this._items;
      } */
    }
    window.customElements.define('faq-dropdown-group', FaqDropdownGroup);
}


/* 

         const data = { name: "addTodo", action: "create", todoText: "" };

                    let el = document.getElementById("addTodo");

                    el.setAttribute("data-request", JSON.stringify(data)); */