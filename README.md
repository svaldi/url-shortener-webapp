# URL Shortener Webapp Challenge!
 
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#Writing test : Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

Files with .js suffix in __tests__ folders.
Files with .test.js suffix.
Files with .spec.js suffix.
The .test.js / .spec.js files (or the __tests__ folders) can be located at any depth under the src top level folder.

We recommend to put the test files (or __tests__ folders) next to the code they are testing so that relative imports appear shorter. For example, if App.test.js and App.js are in the same folder, the test just needs to import App from './App' instead of a long relative path. Colocation also helps find tests more quickly in larger projects.