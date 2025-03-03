# NeuraLearn

**There are three folders:**<br>
EmpowerEd: is the previous project ideally dont change anything in it.<br>
neura-learn: is the React App project which is our main project directory.<br>
backend: This is where nodejs related things will be done.

**CSS rules:**<br>
dont apply direct css to elements that are supposed to be different on different pages use id's or classes instead to isolate that element.<br>
Since React is a Single Page Application common css classnames and elements will overlap and cause inconsistencies.

**Project Paths:**<br>
React components are in: neura-learn/src/Components<br>
There are multiple subfolders inside the Components folder to basically group similar or related Components and there required css and js files<br>
CSS and other related files are grouped with Components in the Components folder<br>
Images are in: neura-learn/public/Images, to reference images in jsx you just need to use path : /Images/img-name

**File explanations:**<br>
neura-learn/src/App.js is the main file where every react component is arranged and also where static routing is done.<br>
neura-learn/public index.html is the main html file generally you dont need to change it other than for like adding bootstrap CDN.

# How to work on this:

**MAKE SURE NPM IS UPDATED TO THE LATEST VERSION USING "npm install -g npm@latest", the latest version rn is 11.1.0**<br>
**Use Node version above or= 22**

First you need to clone this repo using "git clone "repo-link""<br>
If you already have this project use Pull instead to get to the latest commit.<br>
Next go to the neura-learn directory and do "npm install" same on the "backend" this basically installs packages like node_modules

To run the nodejs server you need to run the file server.js by using "node server.js" inside the backend folder.<br>
To run the react app you need to do "npm start" inside neura-learn directory.
