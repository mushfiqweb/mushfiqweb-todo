
# A Simple Todo app using Create React App, React Redux, and Firebase
A simple Todo app example with **undelete** capability — built with [Create React App](https://github.com/facebookincubator/create-react-app), [React Redux](https://github.com/reactjs/react-redux), and [Firebase](https://firebase.google.com/).

##Try the app @ https://mushfiqweb-todo.firebaseapp.com/ 


## Stack

- Create React App
- React Redux
- React Router
- React Router Redux
- Redux Thunk
- Redux Devtools Extension for Chrome
- Firebase SDK with OAuth authentication
- Immutable
- Reselect
- SASS


Quick Start
-----------

```shell
$ git clone https://github.com/r-park/todo-react-redux.git
$ cd todo-react-redux
$ npm install
$ npm start
```

## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:
```json
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```

```javascript
// src/firebase/config.js

export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

#### Install firebase-tools:
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```


## NPM Commands

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:1900`|
|`npm run build`|Build the application to `./build` directory|
|`npm test`|Test the application; watch for changes and retest|
