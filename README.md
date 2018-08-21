# DEV-Network
Social network for software developers, FullStack project built with MERN stack.

## Features
- User can Sign Up
- User can Sign In and Out
    - **User can create portfolio or profile:**
       - add avatar to portfolio by providing github user during signup
       - add a unique handle for your portfolio e.g. "https://www.yoursite.com/profile/ **yourname** " 
       - add social media links like facebook, twitter ,instagram ,youtube channal ,linkedin
       - add website and location
       - add Bio to portfolio
       - add skills
       - add education to portfolio from dashboard
       - add experience to portfolio from dashboard
       - display Latest Github Repos by providing github user through create profile form
  - User can see a dashboard summary
  - User can delete experience and education from dashboard
  - User can delete account completely
  - User can add post edit post view post and delete post
  - User can like and unlike posts
  - User can add a comment to post and delete a comment
  - User can see other users profiles from developers page

## PWA

<strong><p align="center">100% Progressive Web App</p></strong>
<p align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/ezgif.com-crop.gif">
</p>

## Tech/frameworks used in the project
<table>
  <tr>
    <th>BackEnd</th>
    <th>FrontEnd</th>
  </tr>
  <tr>
    <td>NodeJs</td>
    <td>React</td>
  </tr>
  <tr>
    <td>MongoDB/Mongoose</td>
    <td>React-Dom</td>
  </tr>
    <tr>
    <td>ExpressJs</td>
    <td>React-Router-Dom</td>
  </tr>
    <tr>
    <td>JsonWebToken</td>
    <td>React-Moment</td>
  </tr>
    <tr>
    <td>Passport</td>
    <td>React-Redux</td>
  </tr>
    <tr>
    <td>Passport-JWT</td>
    <td>React-Scripts</td>
  </tr>
    <tr>
    <td>bcryptjs</td>
    <td>Redux</td>
  </tr>
    <tr>
    <td>body-parser</td>
    <td>Redux-Thunk</td>
  </tr>
    <tr>
    <td>concurrently</td>
    <td>Axios</td>
  </tr>
    <tr>
    <td>Validator</td>
    <td>Moment</td>
  </tr>
    <tr>
     <td>heroku-ssl-redirect</td>
     <td>JWT-Decode</td>
    </tr>
    <tr>
     <td>-</td>
     <td>classnames</td>
    </tr>
     <tr>
     <td>-</td>
     <td>Bootstrap</td>
    </tr>
     <tr>
     <td>-</td>
     <td>GitHub API</td>
    </tr>
</table>

## Screenshots
<strong><p align="center">Landing page</p></strong>
<kbd align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/landing.png">
</kbd>

<strong><p align="center">Sign In page</p></strong>
<kbd align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/sign-in.png">
</kbd>

<strong><p align="center">Sign Up page</p></strong>
<kbd align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/sign-up.png">
</kbd>

<strong><p align="center">User Dashboard</p></strong>
<kbd align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/dashboard.png">
</kbd>

<strong><p align="center">Portfolios/Profiles page</p></strong>
<kbd align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/profiles.png">
</kbd>

<strong><p align="center">View Portfolio/Profile page</p></strong>
<p align="center"><kbd>
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/profile.png">
</kbd></p>

<strong><p align="center">Post Feed</p></strong>
<kbd align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/post-feed.png">
</kbd>

<strong><p align="center">View Post and comments</p></strong>
<kbd align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/post-and-comments.png">
</kbd>

<strong><p align="center">Modal</p></strong>
<kbd align="center">
  <img src="https://github.com/Ihab-alazzawi/exit-modal/blob/master/folder/modal.png">
</kbd>

## [Live Demo](https://dnetwork.herokuapp.com)
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development.
See deployment for notes on how to deploy the project on a live system.

## Prerequisites
- Install NodeJs.
- get MongoDB URI through mlab, this is an excellent source well explained [here](http://fredrik.anderzon.se/2017/01/17/setting-up-a-free-mongodb-database-on-mlab-and-connecting-to-it-with-node-js/)
  
## Installation

Clone the repo then cd into the folder and install dependencies
**Note:** you need to install the dependencies for front end and backend as follows:
```
cd devnetwork
npm install
cd client
npm install
```
- once you got the MongoDB URI it will look like this "mongodb://dbuser:dbpassword@ds119930.mlab.com:19930/devnetwork".
- don't forget to replace dbuser and dbpassword with yours then create new file inside config folder as follows:

```
cd config
touch keys_dev.js
```

**then add the following code to keys_dev.js**

```
module.exports = {
  mongoURI: "your-Mongo-URI-gose-here-inside-the-quotes",
  secretOrKey: "put-any-secret-key-you-want-here-also-inside-the-quotes"
};
```
**If you need to use Redux dev tools in the project**
- add the redux dev tools extension from [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).
- then inside store.js file replace compose() and its content with the following:

```
compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  ```
**Note:** before deployment you need to revert what you just did with compose() otherwise the app will not work on Mobile devices.
* Finaly run:
```
npm run dev
```
- the backend server will run on PORT 5000 and the client will run on PORT 3000 since i'm using nodemon and concurrently it will watch for changes simultaneously
## Deployment
* Deploy to heroku:
- make sure you have heroku CLI installed on your machine
- after making changes to the app make sure to add and commit before deploying:
```
git add .
git commit -m 'ready for deployment'
heroku create YourAppName
heroku config:set MONGO_URI=YourMongoDbURI
heroku config:set SECRET_OR_KEY=YourSecretKey
heroku git:remote -a YourAppName
git push heroku master
```
## Authors
#### Ihab Alazzawi

## License
This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE) file for details.
