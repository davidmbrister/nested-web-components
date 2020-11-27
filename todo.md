# todo 

- [x]Add some webpack settings per the set up in ~/Desktop/Dev/sassShadowComponent/ 
  - Could a pattern be used with this set up that would be sensible and efficient and not just neat?
- [x] A task runner like gulp (is gulp the best one to use right now?) to watch the files, and run webpack when the relevant files change.
  - There is an answer in here https://stackoverflow.com/questions/36619472/run-a-npm-script-from-gulp-task which is very easy
- According to the webpack file, components/main.js is the entry point for the module bundle, which means I should try using import statements to bring in other files/components?
- How is data fetching accomplished? An async data fetch to an api would have to happen when the main component mounts (lifecycle mount method) and re-render when an observed attribute changes?(observedAttribute)(similar concept to dependency arrays in functional React)