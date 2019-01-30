Chatty App Project


This project is a forked clone on an original Chat application. The project must run with 2 server connections; one for the app's connection to server on localhost:3000 and the Server.js file's connection of localhost:3001. The app has the basic functionality of:
    
    - Allow multiple users to use the chat app in the same session
    - Sending a general message as an anonymous poster
    - Allowing the user to change their name and provide realtime feed back on the user's name update
    - Post new messages under the new name

Screenshots

https://github.com/shellybranch2018/chattyApp/blob/master/docs/Screen%20Shot%202019-01-30%20at%203.18.18%20PM.png

https://github.com/shellybranch2018/chattyApp/blob/master/docs/Screen%20Shot%202019-01-30%20at%203.19.29%20PM.png


React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.



### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
