<div id="top"></div>

# **Junction**

![Imgur](https://i.imgur.com/Xfbh80G.png)

# **Description**

The challenge of finding community is continuous. During a global pandemic it is an even greater challenge. We felt there is a need for a place to help connect people of various interest groups in a way that builds community. There are other Apps available that easily fill the 'social media' market. We are aware of that, we are also aware of the ever growing problem of selling user information and allowing targeted marketing for profit.

Junction is **NOT** about sharing user information, or allowing marketers to lure users with bait click offers. No our vision and goal is to build community and bring people together in a positiv, enriching way. With the user and their interest in mind. It is a place to find groups based around common interests and share interesting events, resources, and ideas.

In order to keep the focus on each users individual value and to help protect emotional wellness we intentially will not add a 'Like' button.

### Deployment Link

[Visit the Junction App online](https://community-junction.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

# **the 404's**

| ![Imgur](https://i.imgur.com/q63VjZEt.png) | ![Imgur](https://i.imgur.com/6IoCNRFt.png) | ![Imgur](https://i.imgur.com/YQmO7P3t.png) |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| **Matt Gefen**                             | **Chris Jeffreys**                         | **Jan Horak**                              |
| Boulder, CO                                | Frisco, TX                                 | Harlem, GA                                 |
| Github Commander                           | Scrum Master                               | Document Lord                              |
| API Wizard                                 | Design General                             | Database Manager                           |

<p align="right">(<a href="#top">back to top</a>)</p>

# Tech Stack

### **MERN Stack:**

- MongoDB / Mongoose
- Express.js
- React
- Node.js

<p align="right">(<a href="#top">back to top</a>)</p>

# Screenshots

![Imgur](https://i.imgur.com/wpupisal.png)
![Imgur](https://i.imgur.com/igWThr3l.png)
![Imgur](https://i.imgur.com/ok9m8dQl.png)

<p align="center">
<img src="https://i.imgur.com/dcwEN51m.png" alt=" Junction Mobile Screen Shot"/>
<img src="https://i.imgur.com/1NhuUQJm.png" alt=" Junction Mobile Screen Shot"/>
</P>

<p align="right">(<a href="#top">back to top</a>)</p>
  
# MVP Features

- Users should be able to create groups
- Users should be able to dynamically assign a location to a group
- Users should be able to post to a group
- Users should be able to use posts to create / register events
- Users should be able to use posts to create forums / threads
- Users should be able to comment on relevant posts
- Users should be able to favorite posts
- Users should be able to filter to favorite posts
- Users should be able to Discover groups that meet their preferences
- Users should be able to join groups

<p align="right">(<a href="#top">back to top</a>)</p>

# ICE Box

- [ ] updated user profile sign up process, so a user can add preferences for discovering new groups, using maps, and displaying my profile information
- [ ] a Profile details view page
- [ ] geo-location based groups search/filtering
- [ ] an update Profile view, so users can amend profile information
- [ ] Add Avatar customization
- [ ] Select Avatar Style in Avatar customization
- [ ] Drag and Drop Post elements

<p align="right">(<a href="#top">back to top</a>)</p>

# Models:

- User
- Profile
- Group
- Post
- Comment

<p align="right">(<a href="#top">back to top</a>)</p>

# Planning essential links:

[**Planning on Notion**](https://matt-gefen.notion.site/Unit-4-Project-Junction-6c0f845aaa6e4f40a9ade16d831a6c5b) Track our progress on Notion

[**ERD**](https://whimsical.com/erd-7zztpkUDuzGPjv42gMDqrU) Examine our datamodels

[**Wireframes**](https://whimsical.com/junction-wireframes-A15Sz3kQ3TYeSm2UktXhN8) Take a glance of how we encvision the app

<p align="right">(<a href="#top">back to top</a>)</p>

# External API's and Libraries Used

[**Mapbox API**](https://www.mapbox.com/) Used for event/location maps

[**Dicebear Avatar API**](https://avatars.dicebear.com/) Used for user profile Avatar generating

[**MaterialUI**](https://mui.com/) The React component library you have always wanted. Used for UI and component design.

[**React-Beautiful-DnD**](https://github.com/atlassian/react-beautiful-dnd) A library specifically designed for drag and drop in lists.

<p align="right">(<a href="#top">back to top</a>)</p>

# users-groups-mern-jwt

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/users-groups-mern-jwt

https://users-groups-mern-jwt.herokuapp.com

by Abhishek Kalavadiya https://github.com/AbhishekKalavadiya

https://github.com/AbhishekKalavadiya/maper

## About the Website: Maper

- A location-based website using React as Frontend and NodeJs, ExpressJS as backend, and MongoDB as Database. On this website, I had use MapBox for the world map and React-Mapbox-gl for configuration. We can select the place where we had visited and added the photo URL, so the entry will be seen on the map and in the visited place area. We can delete or modify the changes in the Entry we had created. It is a responsive website with live location of a point on the map. The Backend is deployed on Heroku and the frontend is deployed on Netlify.

#### The Password for the Entry: maper01

## Technology Stack

- React js
- Node js
- Express js
- MongoDB
- MapBox, React Mapbox-gl
- Heroku
- Netlify
- Flexbox
- Material-ui

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/users-groups-mern-jwt.git
git push -u origin main
```

## Heroku

```java
heroku create users-groups-mern-jwt
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/users-groups-mern-jwt?retryWrites=true&w=majority"
heroku config:set JWT_SECRET="something-secret"

heroku config:set PUBLIC_URL="https://users-groups-mern-jwt.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== users-groups-mern-jwt Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on users-groups-mern-jwt will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== users-groups-mern-jwt Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/users-groups-mern-jwt/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/users-groups-mern-jwt/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
