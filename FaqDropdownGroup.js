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
            updateItem(detail) {
            
            console.log("Inside update and showing detail : " + detail);
            console.log(this.itemList[detail[1]]);
            this.itemList[detail[1]].isvisible
            if (this.itemList[detail[1]].isvisible === 'false'){
              this.itemList[detail[1]].isvisible = 'true';
            } else {
              this.itemList[detail[1]].isvisible === 'false';
            }
            console.log("Inside update after update: " + JSON.stringify(this.itemList));
          },
          itemList: []
        };
        // This Parent requires an account of all the child faqs and their visibility property values. 
        
      }
    // Add event listener that will catch an event bubbling up with it's id number, 
    // then make sure all the faqs that don't have that id are turned off
//
      connectedCallback() {
    
      this.addEventListener("onclick", function (e) {
        console.log('listend to click event');
        console.log("The event detail index: " + e.detail[1]);
        console.log("The event detail visibility: " + e.detail[0]);
        console.log(this.items.itemList);
        
        // 1. Get the item from the list that needs to be changed.
        this.items.updateItem(e.detail);
        // 2. Reverse the value
        // 2. Reversing the value in this state will trigger an observedAttribute change triggering event dispatch
        // 3. Broadcast the reversed value and the index back to the children
        // emit an event to the child by index which has come through in the e.detail
        // 
      });
      const faqs = Array.from(this.querySelectorAll('faq-dropdown'));
      console.log("The Length" + faqs.length);
      console.log("Itemlist length: " +  this.items.itemList.length); 
      for (let i = 0; i < faqs.length; i++) {
            faqs[i].setAttribute('index', i);
            console.log("The Index for this one: " + faqs[i].getAttribute('index'));

            this.items.currentItems = { index: faqs[i].getAttribute('index'), isvisible: faqs[i].getAttribute('isvisible') };
            //console.log("The index" + this.items);
            console.log("This should be the element being iterated" + faqs[i].getAttribute('isvisible'));
            console.log(faqs[i].getAttributeNames());
          }; 
        console.log("Current items on the dropdown object: " +  JSON.stringify(this.items)); 
        console.log("Itemlist length: " +  this.items.itemList.length); 
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