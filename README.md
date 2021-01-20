# nested-web-components

`npm i`

open index.html in browser. 

If you are making changes to the Sass or JS, make sure you run `gulp runwebpack` to watch all changes and recompile/bundle.

The custom parent element is responsible for making sure only one FAQ is unfolded at a time. 
The individual FAQS have custom height settings (kinda like style utility classes).

This repository is obviously a mess right now so here are some ways to improve it. 

**TODO:**
- [ ] Remove the slot change and UserCard and any other files which are not part of this project. Put components in the components folder and pluggable sass into the Sass folder. 
- [ ] Push master and merge. 
- [ ] Make sure only the Group component is mutating attributes on the child components. Currently there is a special case where the child FAQ updates itself and then sends an event detail to the parent indicating the exception.  
- [ ] Add proper getters and setters for class properties, e.g. the items list in the Group class.  
- [ ] set initial visibility to false by default so the user doesn't have to type it in the html.
