<H1 align ="center" >Tracking and Integrating Management of Visitor Logs (TIMELOG)</h1>
<h5  align ="center"> 
Tracking and Integrating Management of Visitor Logs (TIMELOG) is a system designed to efficiently and accurately manage the visitor logbook process within an organization.<br/> This system automates several tasks related to visitor management, such as registering visitor details, tracking entry and exit times, and maintaining security protocols. By streamlining the process, the system ensures that all visitors are properly identified and recorded, improving both safety and operational efficiency.</h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Meet The Teams](#meet-the-teams)
  * [Author](#author)
  * [License](#license)

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal and the server on the other terminal)

In the first terminal

```
$ cd Fronted
$ npm install (to install Frontend-side dependencies)
$ npm run dev(to start the Frontend)
```

In the second terminal

- Create your MySQL database, which you will use as your database
- Supply the following credentials

```
#  --- .env  ---

APP_PORT =5000
SESS_SECRET =

```

```
# --- Terminal ---

$ cd Backend
$ npm install (to install Backend-side dependencies)
$ npm start (to start the Backend)

```

##  Key Features

- Login Admin
- Add visitors
- Edit visitors
- Remove visitor
- Display data, input attendance, edit attendance
- Print visit reports
- Change admin passwords
- 404 Page and many more
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend

- [React JS ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [Axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Tailwind CSS](https://tailwindcss.com/) - For User Interface
- [React icons](https://react-icons.github.io/react-icons/) - Small library that helps you add icons  to your react apps
- [Redux](https://redux.js.org/) - Managing complex application state
- [Localforage](https://localforage.github.io/localForage/) - Saves data in the web browser asynchronously
- [React Vite](https://vitejs.dev/guide/) - Improved website speed
- [Redux Toolkit](https://redux-toolkit.js.org/) - To facilitate the development of web applications using Redux
- [Apexcharts](https://www.npmjs.com/package/apexcharts) - An open source library used to create interactive graphics on websites or web applications
- [Match Sorter](https://www.npmjs.com/package/match-sorter) - An open source library used to create interactive graphics on websites or web applications
- [Email JS](https://www.emailjs.com/) - For User Interface
- [Framer Motion](https://www.framer.com/motion/) - For User Interface
- [React Redux](https://react-redux.js.org/) - Managing complex application state
- [React to Print](https://www.npmjs.com/package/react-to-print) - Print PDF
- [Sweet Alert2](https://sweetalert2.github.io/) - Create various types of pop-up alerts such as regular alerts, error alerts, success alerts, confirmation alerts, and so on.

####  Backend

- [Node JS](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express JS](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [MySql12](https://www.npmjs.com/package/mysql2) - For authentication
- [Cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Bcrypt JS](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [Nodemon](https://www.npmjs.com/package/nodemon) - To monitor changes to the program code that is being developed
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser) - A middleware for web frameworks
- [Sequelize](https://www.npmjs.com/package/sequelize) - An Object-Relational Mapping (ORM) for Node.js that makes it easy to access relational databases such as MySQL, PostgreSQL, and SQLite using the JavaScript programming language.
- [Argon2](https://www.npmjs.com/package/argon2) - A password-hashing function that summarizes the state of the art in the design of memory-hard functions and can be used to hash passwords for credential storage, key derivation, or other applications.
- [Connect Session Sequelize](https://www.npmjs.com/package/connect-session-sequelize) - Implement authentication for users with site applications.

####  Database

 - [MySQL ](https://www.mysql.com/) - It provides a free cloud service to store MongoDB collections.
 ##  Screenshots

<!-- ![img-1](https://github.com/berthutapea/mern-employee-salary-management/assets/111676859/a3f72509-8ca0-452b-b121-ff4ecf94580d) -->
---- -


## Meet The Teams

<center>
  <table align="center">
    <tr >
      <th >Backend Developer</th>
      <th >Frontend Developer</th>
    </tr>
    <tr >
      <td align="center">
        <a href="https://github.com/eiirikr">
          <img width="200"  src="https://res.cloudinary.com/dqjxedpsl/image/upload/f_auto,q_auto/javierjericm" alt=""><br/>
          <b>Jeric Javier</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/berthutapea">
          <img width="200"  src="https://res.cloudinary.com/dqjxedpsl/image/upload/f_auto,q_auto/javierjericm" alt=""><br/>
          <b>Jeric Javier</b>
        </a>
      </td>
    </tr>
  </table>
</center>

## Author
- Portfolio: [berthutapea](https://berthutapea.vercel.app/)
- Github: [berthutapea](https://github.com/berthutapea)
- Sponsor: [berthutapea](https://saweria.co/berthutapea)
- Linkedin: [gilberthutapea](https://www.linkedin.com/in/gilberthutapea/)
- Email: [berthutapea@gmail.com](mailto:berthutapea@gmail.com)

## License

MIT License

Copyright (c) 2022 Gilbert Hutapea

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
