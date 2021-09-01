# streams

Twitch like React/Redux application (User browser, port 3000) using JSON Server (DB mimic, port 3001), RTMP Server (streams, port 8000, browser request to get the video feed), Open Broadcaster Software (OBS, streamers computer for incoming streams, port 1935).

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

# OBS

https://obsproject.com

> Download and install to your OS: [Windows, Linux, MacOS]

> Open the OBS app

> Create Scene: Name it as you wish

> Set up Sources:

- Display Capture
- Audio Input Capture

> Settings -> Stream -> Custom Streaming Server:

- URL: rtmp://localhost/live
- Stream key: stream as the number the stream get as created first. localhost:3000/streams/1 the stream number is 1.

> Test by starting the Streamy app (client), JSON server (api), RTMP server (rtmpserver) and click Start Streaming button in Controls of OBS.

# flv.js used as Video Player

https://www.npmjs.com/package/flv.js

# How the React-Redux project was initially created

> mkdir streams

> cd streams

# Create the client for the app UI

> npx create-react-app client

> cd client

> npm install --save react-router-dom redux react-redux redux-form axios redux-thunk lodash flv.js final-form react-final-form

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
