# nested-web-components

`npm i`

If you are making changes to the Sass or JS, make sure you run `gulp runwebpack` to watch all changes and recompile/bundle.

This repository is obviously a mess right now so here are some ways to improve it. 

**TODO:**
- [ ] Push master and merge. 
- [ ] Make sure only the Group component is mutating attributes on the child components. Currently there is a special case where the child FAQ updates itself and then sends an event detail to the parent indicating the exception.  
- [ ] Add proper getters and setters for class properties, e.g. the items list in the Group class.  
