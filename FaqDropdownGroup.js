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
            
            if (this.itemList[detail[1]].isvisible === 'false'){
              this.itemList[parseInt(detail[1])].isvisible = 'true';
           /*    this.itemList = this.itemList.map((elem, i) => {
                // do some console.logging in here
                console.log("visibility of this element:" + elem.isvisible)
                if (elem.isvisible === 'true' && elem.index != detail[1]) {
                  return elem.isvisible = 'false';
                } 
              }) */ 
              this.itemList.forEach((elem,i) => {
                console.log("visibility of this element:" + elem.isvisible)
                  if (elem.isvisible === 'true' && elem.index != detail[1]) {
                     elem.isvisible = 'false';
                  } 
              })           
            } 
            console.log("Inside update after update: " + JSON.stringify(this.itemList));
          },
          itemList: []
        };
        
      }
    // Add event listener that will catch an event bubbling up with it's id number, 
    // then make sure all the faqs that don't have that id are turned off
//
      connectedCallback() {
        this.dispatchGlobalUpdateEvent = new CustomEvent("update", {
          bubbles: true,
          detail: JSON.stringify(this.items),
          cancelable: false,
        });


        this.addEventListener("onclick", function (e) {
          console.log('listend to click event');
          console.log("The event detail index: " + e.detail[1]);
          console.log("The event detail visibility: " + e.detail[0]);
          
          console.log("The item in the Group list reflecting the elemtent that emitted the event: " + this.items.itemList[e.detail[1]]);
          //console.log("An item index from the itemList called by literal numeric index: " + JSON.stringify(this.items.itemList[parseInt(e.detail[1])].index));
          // 1. Get the item from the list that needs to be changed.
          this.items.updateItem(e.detail);
          //this.dispatchEvent(this.dispatchGlobalUpdateEvent);






          // After the first update, the element has to change it's visibility property, which requires a callback and detail message
          // 2. Reverse the value
          //(see this.items.upDate)
          // 2. Reversing the value in this state will trigger an observedAttribute change triggering event dispatch
              // This requires using a proxy?
          const faqs = Array.from(this.querySelectorAll('faq-dropdown'));
          console.log(this.items);
          if(this.items.itemList[parseInt(e.detail[1])].isvisible === 'true') {
            console.log("The itemms visibility: " + (this.items.itemList[e.detail[1]].isvisible))
            //console.log("The itemms index: " + (this.items.itemList[e.detail[0]].index))
            // if the newly changed value is true, map all other visible faqs to have visibility set to false
            console.log(JSON.stringify(this.items.itemList[parseInt(e.detail[1])].index));
            faqs.forEach((faq, i) => {
              console.log("For loop - in it - the index attribute from the tag: " + faq.getAttribute('index'));
              if((faq.getAttribute('index') !== (this.items.itemList[parseInt(e.detail[1])].index))){
                faq.setAttribute('isvisible', 'false')
              }
              else {
                faq.setAttribute('isvisible', 'true')
              }             
            })       
          } else {
            // set the true to false
            console.log("The attribute on the tag if the visibility is false: " + faqs[(this.items.itemList[parseInt(e.detail[1])].index)].getAttribute('isvisible'));
            faqs[(this.items.itemList[parseInt(e.detail[1])].index)].setAttribute('isvisible', 'false');
          }
          // 3. Broadcast the reversed value (in e.detail) and the index back to the children
          // 4. set the 
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
    
    }
    window.customElements.define('faq-dropdown-group', FaqDropdownGroup);
}


/* 

         const data = { name: "addTodo", action: "create", todoText: "" };

                    let el = document.getElementById("addTodo");

                    el.setAttribute("data-request", JSON.stringify(data)); */