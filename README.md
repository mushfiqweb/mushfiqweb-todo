
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
$ git clone https://github.com/mushfiqweb/mushfiqweb-todo.git
$ cd todo-react-redux
$ npm install
$ npm start
```

## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console. Goto **Authentication** > **Sign-In Method** > **Sign-In Providers** and enable Google, Facebook, Github, & Twitter

####Facebook App
- Goto [Facebook Developers](https://developers.facebook.com/) and Create a New App ID. 
- Then put the app id and secret in **firebase**.

####GitHub App 
- Goto [GitHub Apps](https://github.com/settings/applications/new) and Register a new OAuth application. 
- Then put the client id and secret in **firebase**.

####Twitter App 
- Goto [Twitter Application Management page](https://apps.twitter.com/) and Create an application. 
- Goto **Keys and Access Tokens** and copy `Consumer Key (API Key)` & `Consumer Secret (API Secret)`
- Then put the api key and secret in **firebase**.

####Google
- Google will autometically put the `Public-facing Name` in the field.







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
