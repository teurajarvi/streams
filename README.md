# streams

Twitch like React/Redux application

# Clone the project using Git

> git clone https://github.com/teurajarvi/streams.git

# Install and run the project

> cd streams/api

> npm install

> npm start

> cd streams/client

> npm install

> npm start

# Stop the React app

from console:
Control + C

# Use the React app

from browser: localhost:3000

# Browser extension used

https://github.com/zalmoxisus/redux-devtools-extension

# JSON Server used

https://www.npmjs.com/package/json-server

# Node-Media-Server (RTMP Server) used

https://github.com/illuspas/Node-Media-Server

# How the React-Redux project was initially created

> mkdir streams

> cd streams

> npx create-react-app client

# Create the client for the app UI

> cd client

> npm install --save react-router-dom redux react-redux redux-form axios redux-thunk lodash

# Create the API for JSON Server to mimic DB

> cd ..

> mkdir api

> cd api

> npm init

> npm install --save json-server

> npm start (in separate console)

# Create the RTMP Server for the actual Streams

> cd ..

> mkdir rtmpserver

> cd rtmpserver

> npm init

> npm install --save node-media-server

> npm start (in separate console)
