# Velle

#### _Front-End Development, Independent Capstone Project, 5.3.19_

#### By _**Randee Layosa**_

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This application is an Independent Capstone project, culminating my knowledge and experience gained during my 27 weeks time at [Epicodus](https://www.epicodus.com/) in the Front-End Development track. It demonstrates a knowledge of React.js and an aptitude for planning, designing, and developing a functional application that meets the UX/UI industry standards of today.

_<p align="center">"Velle" - Latin: to wish, want, be willing</p>_

_Velle is a pseudo company/organization that operates as a middle man between various public outreach supporters, and individuals who want to help their fellow neighbors by donating their clothes. Recently, I have found myself in a predicament that I am sure others share as well. Many of us have unwanted or unneeded clothes that are trendy brand named or were bought at a modest but higher price. People may not want to hand these items to a store as they offer extremely low buying prices in return. And, knowing how much they had originally bought these items for, these people may also not want to hand the clothes over to Goodwill for free just to be resold for 100% profit to someone else. I and others, I'm sure, would much rather place our donations in the hands of reputable outreach organizations and programs who will in turn place the items directly in the hands of the individual in need. Velle stands as the organizer, liaison, and middle man that would make an operation like this possible. Benevolence._

## Preview
<p align="center">
<img src="src/assets/img/###.png" width="500" height="381" title="Preview screenshot of the application">
</p>

## Technologies Used

  * _React_
  * _Redux_
  * _Firebase_
  * _Firestore_
  * _Webpack_
  * _eslint_
  * _SASS_
  * _JSX_

## Setup/Installation Requirements

#### To open and view this project file:
1. Clone this GitHub repository https://github.com/randeelayosa/velle.git to your Desktop.
  * Install git onto your computer if it isn't already.
  * Open your Terminal, and enter the following commands:
  ```
  cd desktop
  git clone https://github.com/randeelayosa/velle.git
  cd velle
  atom .
  npm install
  npm run start
  ```
  * _You can use another text editor if Atom is not your preferred program._
  * _Make sure a "node_modules" folder is created in your project file. If it hasn't, run `npm install` again._
  * _You can then go to the link in step 1 above, or continue on to the following instructions to run the server._
2. Go to http://localhost:8080/ in the browser of your choice. _Note: The app will automatically reload if you edit any of the code in the source files._


## Planning

  | **Configuration/Dependencies** | **Use** |
| :-------------     | :------------- |
| Babel | JS transpiler |
| CSS-Loader, Style-Loader, Sass-Loader, Node-Sass | styling |
| ESLint | JS linter, checks code for errors |
| File-Loader, URL-Loader | image loader |
| HTML-Webpack-Plugin | loads HTML file |
| Jasmine, Karma | for testing code |
| React | JS Library |
| Webpack | bundles/compiles code |


### User Stories
**_Target Users_**
* General public
* Charitable organizations
* Outreach programs

**_User Stories_**
* As a community member, I want the guarantee that my clothes are being handed directly to a person in need.
* As a community member, I want to be able to see a list of items in need.
* As a charity/outreach, I want to be able to have and maintain a list of people in need, but have the names anonymous to the public.
* As a charity/outreach, I want to be able to upload details about the person in need, their personal information.
* As a charity/outreach, I want to be able to upload photos of items in our possession that we received but do not have a need for, yet can be handed off to another organization to use.

### User Personas
* **Jill**
  * **Purpose**: Has unwanted clothes and does not want to donate it to Goodwill, or go the resell route.
  * **Pain Points**: Unsure of where to look or how to go about giving away her clothes.
  * **How we can serve**: Velle's main function serves the very basis of Jill's needs. It will make her search and eventual donation a smooth and easy process.
* **YMCA**
  * **Purpose**: Has a number of club members that need clothing and cannot afford to do so.
  * **Pain Points**: There's no infrastructure in place to constantly take in donations or campaign for them in a way that follows guidelines and keeps the club members' anonymity.
  * **How we can serve**: Velle allows organizations to create and keep a private login account to upload details of member information. The information will then show on the main site page without names shown, keeping client anonymity.
* **Boys & Girls Club**
  * **Purpose**: Has a particular item or size in need that hasn't been donated to them yet.
  * **Pain Points**: Has no control over the items they will receive in donations from the community.
  * **How we can serve**: With the private logins for organizations, they can also pass along items amongst themselves, much like a library book share system.

### Components and Routes Layout

<p align="center">
  <img src="src/assets/img/diagram.jpg" width="500" height="385" title="Velle Component and Route Structure">
</p>

### Sketches
<p align="center">
  <img src="src/assets/img/sketch.jpeg" width="600" height="463" title="Sketch of page design layout">
</p>

### Wireframes
<p align="center">Home</p>
<p align="center">
  <img src="src/assets/img/wireframe-home.jpg" width="300" height="240" title="Wireframe of home page design mockup">
  <img src="src/assets/img/wireframe-home-2.jpg" width="300" height="240" title="Wireframe of home page design mockup">
</p>
<p align="center">About</p>
<p align="center">
  <img src="src/assets/img/wireframe-about.jpg" width="300" height="240" title="Wireframe of home page design mockup">
</p>

### Prototyping
<p align="center">
  <img src="####" title="Prototype example of user navigating through the app">
</p>


### Features Built and To Be Completed
- [x] Navigation bar.
- [ ] List of support agencies.
- [x] Login feature to access private information.
- [ ] Agencies can maintain their Wish List.
- [ ] Search feature to find drop off locations nearby.
- [ ] Agencies can upload images and information of items that they received but have not given away and are willing to share/send to other agencies.
- [ ] Sharing feature that allows agencies to view item lists of other agencies to see if they have a specific requested item.
- [ ] Address label generator feature.
- [ ] About Page
- [ ] Contact Page
- [x] Page routing
- [x] Styling

### Commit History/Work Activity Log
_Friday, May 3 - Planning_
* 8:00 - Clone down template repo and begin readme
* 9:00 - Start planning out and creating sketches
* 10:00 - Begin wireframing
* 1:00 - Update/change out readme to reflect appropriate information.
* 2:00 - Add component tree image to readme.
* 3:00 - Research more about outreach programs in Portland, and if businesses that offer similar services to my app the exist.
* 4:00 - Done for the day.

_Friday, May 10 - Wireframing and Static Build_
* 8:00 - Wireframing
* 9:00 - Wireframing
* 10:00 - Prototyping
* 11:00 - User Stories
* 12:00 - Change file structure, create Nav component
* 1:00 - Install redux-logger, convert things over to redux, troubleshoot
* 4:30 - Done for the day.

### Legal

*This software is licensed under MIT license.*

Copyright (c) 2019 **_Randee Layosa_**
