# Digital_Divide React

### Front-End - React + Redux

### Back-End - Node.js, Express.js & MongoDB

To run it locally -

### Steps to run in development mode:-

1. Fork the repo and clone it.
2. Make sure you have `npm` Node.js & MongoDB installed in your system.
3. [Only once] Run (from the root) `npm install` and `cd client && npm install`.
4. Open two terminal windows (one for running Server and other for the UI).
5. Run `npm start` to start the server. By default it will run on `port 5000`.
6. For UI build `npm run build`.
7. You can see your project on `port 5000` by default.

### config mongoDB and server.
```
module.exports = {
    jwtSecret: JWTSECRET||'123456',
    mongodburi: '' //your mongodb uri
};
```
You can config mongoDB in config.js file.

and you have to config server url on /client/src/Config.js file.
```
module.exports={
    BASE_URL:'' //server url
}
```

#### If you tried all the above you can just "npm install" from the root directory ###
cd client "yarn". Once done,
Inside the client folder do "yarn build"
Once done cd .. to go to the root directory
Inside the root directory "npm start" and you should Server started on port 5000 and Connected to MongoDB' like this; 

> digital-divide@1.0.0 start
> node app.js

>(node:43115) Warning: Accessing non-existent property 'MongoError' of module exports inside circular dependency(Use `node --trace-warnings ...` to show where the warning was created)(IGNORE THIS ERRROR ITS MONGODB BUGS)Server started on port 5000Connected to MongoDB(node:43115) DeprecationWarning: Listening to events on the Db class has been deprecated and will be removed in the next major version.
GO to http://localhost:5000 and you are done.


Visit production URL for this project https://appdigitaldivide.herokuapp.com/
