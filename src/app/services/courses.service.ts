import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  // courses = ["course1","course2","course3","course4"];
  //   courses = [
  //     {
  //         "id": 6368,
  //         "title": "JavaScript",
  //         "display_name": "JavaScript",
  //         "doc_count": 566
  //     },
  //     {
  //         "id": 8452,
  //         "title": "WordPress",
  //         "display_name": "WordPress",
  //         "doc_count": 521
  //     },
  //     {
  //         "id": 7176,
  //         "title": "PHP",
  //         "display_name": "PHP",
  //         "doc_count": 483
  //     },
  //     {
  //         "id": 8322,
  //         "title": "Web Development",
  //         "display_name": "Web Development",
  //         "doc_count": 426
  //     },
  //     {
  //         "id": 6148,
  //         "title": "HTML",
  //         "display_name": "HTML",
  //         "doc_count": 325
  //     },
  //     {
  //         "id": 5306,
  //         "title": "CSS",
  //         "display_name": "CSS",
  //         "doc_count": 312
  //     },
  //     {
  //         "id": 7450,
  //         "title": "React",
  //         "display_name": "React",
  //         "doc_count": 257
  //     },
  //     {
  //         "id": 4820,
  //         "title": "Bootstrap",
  //         "display_name": "Bootstrap",
  //         "doc_count": 231
  //     },
  //     {
  //         "id": 28016,
  //         "title": "Angular",
  //         "display_name": "Angular",
  //         "doc_count": 230
  //     },
  //     {
  //         "id": 6928,
  //         "title": "Node.Js",
  //         "display_name": "Node.Js",
  //         "doc_count": 200
  //     },
  //     {
  //         "id": 6490,
  //         "title": "Laravel",
  //         "display_name": "Laravel",
  //         "doc_count": 196
  //     },
  //     {
  //         "id": 9286,
  //         "title": "HTML5",
  //         "display_name": "HTML5",
  //         "doc_count": 193
  //     },
  //     {
  //         "id": 6404,
  //         "title": "jQuery",
  //         "display_name": "jQuery",
  //         "doc_count": 147
  //     },
  //     {
  //         "id": 4308,
  //         "title": "Vue JS",
  //         "display_name": "Vue JS",
  //         "doc_count": 137
  //     },
  //     {
  //         "id": 5464,
  //         "title": "Django",
  //         "display_name": "Django",
  //         "doc_count": 132
  //     },
  //     {
  //         "id": 5884,
  //         "title": "Front End Web Development",
  //         "display_name": "Front End Web Development",
  //         "doc_count": 116
  //     },
  //     {
  //         "id": 7380,
  //         "title": "Python",
  //         "display_name": "Python",
  //         "doc_count": 114
  //     },
  //     {
  //         "id": 8320,
  //         "title": "Web Design",
  //         "display_name": "Web Design",
  //         "doc_count": 112
  //     },
  //     {
  //         "id": 4476,
  //         "title": "AngularJS",
  //         "display_name": "AngularJS",
  //         "doc_count": 95
  //     },
  //     {
  //         "id": 7546,
  //         "title": "Ruby on Rails",
  //         "display_name": "Ruby on Rails",
  //         "doc_count": 89
  //     },
  //     {
  //         "id": 6336,
  //         "title": "Java",
  //         "display_name": "Java",
  //         "doc_count": 87
  //     },
  //     {
  //         "id": 10230,
  //         "title": "ASP.NET Core",
  //         "display_name": "ASP.NET Core",
  //         "doc_count": 74
  //     },
  //     {
  //         "id": 6866,
  //         "title": "MySQL",
  //         "display_name": "MySQL",
  //         "doc_count": 68
  //     },
  //     {
  //         "id": 4630,
  //         "title": "ASP.NET",
  //         "display_name": "ASP.NET",
  //         "doc_count": 65
  //     },
  //     {
  //         "id": 8124,
  //         "title": "Typescript",
  //         "display_name": "Typescript",
  //         "doc_count": 60
  //     }
  // ]
  courses = [
    {
      "id": 1565838,
      "title": "The Complete 2020 Web Development Bootcamp",
      "published_title": "the-complete-web-development-bootcamp",
      "headline": "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!",
      "rating": 4.69457,
      "num_reviews": 37617,
      "is_wishlisted": false,
      "created": "2018-02-22T12:02:33Z",
      "published_time": "2018-10-25T21:34:15Z",
      "objectives_summary": [
        "Be able to build ANY website you want.",
        "Craft a portfolio of websites to apply for junior developer jobs.",
        "Build fully-fledged websites and web apps for your startup or business."
      ],
      "tracking_id": "ce0e48e496894a7588670085a146d021",
      "last_update_date": "2020-02-07",
      "content_info": "53.5 hours"
    },
    {
      "id": 625204,
      "title": "The Web Developer Bootcamp",
      "published_title": "the-web-developer-bootcamp",
      "headline": "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
      "rating": 4.63656,
      "num_reviews": 153435,
      "is_wishlisted": false,
      "created": "2015-09-28T21:32:19Z",
      "published_time": "2015-11-02T21:13:27Z",
      "objectives_summary": [
        "Make REAL web applications using cutting-edge technologies",
        "Continue to learn and grow as a developer, long after the course ends",
        "Create a blog application from scratch using Express, MongoDB, and Semantic UI"
      ],
      "tracking_id": "cedaca9b3cff42b2b9fd21b796b07d05",
      "last_update_date": "2020-02-05",
      "content_info": "47 hours"
    },
    {
      "id": 851712,
      "title": "The Complete JavaScript Course 2020: Build Real Projects!",
      "published_title": "the-complete-javascript-course",
      "headline": "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
      "rating": 4.55917,
      "num_reviews": 62717,
      "is_wishlisted": false,
      "created": "2016-05-17T09:31:26Z",
      "published_time": "2016-10-14T22:52:23Z",
      "objectives_summary": [
        "Go from a total beginner to an advanced JavaScript developer",
        "Code 3 beautiful real-world apps with both ES5 and ES6+ (no boring toy apps here)",
        "JavaScript and programming fundamentals: variables, boolean logic, if/else, loops, functions, arrays, etc."
      ],
      "tracking_id": "fc38ff5044a143289dbb38de49c51fce",
      "last_update_date": "2019-12-04",
      "content_info": "28 hours"
    },
    {
      "id": 756150,
      "title": "Angular 9 - The Complete Guide (2020 Edition)",
      "published_title": "the-complete-guide-to-angular-2",
      "headline": "Master Angular (formerly \"Angular 2\") and build awesome, reactive web apps with the successor of Angular.js",
      "rating": 4.56199,
      "num_reviews": 106200,
      "is_wishlisted": false,
      "created": "2016-02-08T17:02:55Z",
      "published_time": "2016-02-11T07:29:29Z",
      "objectives_summary": [
        "Develop modern, complex, responsive and scalable web applications with Angular 9",
        "Fully understand the architecture behind an Angular 8 application and how to use it",
        "Use the gained, deep understanding of the Angular 8 fundamentals to quickly establish yourself as a frontend developer"
      ],
      "tracking_id": "04e9260fdaed45eab9e658c5afae0013",
      "last_update_date": "2020-02-07",
      "content_info": "37 hours"
    },
    {
      "id": 1430746,
      "title": "The Complete Web Developer in 2020: Zero to Mastery",
      "url": "/course/the-complete-web-developer-zero-to-mastery/",
      "published_title": "the-complete-web-developer-zero-to-mastery",
      "headline": "Learn to code and become a Web Developer in 2020 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!",
      "rating": 4.70468,
      "num_reviews": 29964,
      "is_wishlisted": false,
      "published_time": "2017-12-21T22:54:04Z",
      "objectives_summary": [
        "Skills that will allow you to apply for jobs like: Web Developer, Software Developer, Front End Developer, Javascript Developer, and Full Stack Developer",
        "Learn modern technologies that are ACTUALLY being used behind tech companies in 2020",
        "Build 10+ real world Web Development projects you can show off"
      ],
      "tracking_id": "a0378dee0c4d4cf4bd91951d2465659c",
      "last_update_date": "2020-02-01",
      "content_info": "35 hours"
    },
    {
      "id": 2365628,
      "title": "Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)",
      "published_title": "complete-react-developer-zero-to-mastery",
      "headline": "Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase",
      "rating": 4.64517,
      "num_reviews": 5039,
      "is_wishlisted": false,
      "created": "2019-05-13T14:44:19Z",
      "published_time": "2019-07-01T16:50:14Z",
      "objectives_summary": [
        "Build enterprise level React applications and deploy to production",
        "Learn to build reactive, performant, large scale applications like a senior developer",
        "Learn the latest features in React including Hooks, Context API, Suspense, React Lazy  + more"
      ],
      "tracking_id": "6779bfe732e54563b6b9747952dc1712",
      "content_info": "40 hours"
    },
    {
      "id": 437398,
      "title": "Build Responsive Real World Websites with HTML5 and CSS3",
      "published_title": "design-and-develop-a-killer-website-with-html5-and-css3",
      "headline": "The easiest way to learn modern web design, HTML5 and CSS3 step-by-step from scratch. Design AND code a huge project.",
      "rating": 4.57058,
      "num_reviews": 33784,
      "is_wishlisted": false,
      "created": "2015-03-03T10:16:03Z",
      "objectives_summary": [
        "Real-world skills to build real-world websites: professional, beautiful and truly responsive websites",
        "A huge project that will teach you everything you need to know to get started with HTML5 and CSS3",
        "The proven 7 real-world steps from complete scratch to a fully functional and optimized website"
      ],
      "tracking_id": "cf7f7f2b5ccf42a6962a81ed653355d7",
      "last_update_date": "2019-12-02",
      "content_info": "12 hours"
    },
    {
      "id": 1026604,
      "title": "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      "published_title": "advanced-css-and-sass",
      "headline": "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
      "rating": 4.76948,
      "num_reviews": 18419,
      "is_wishlisted": false,
      "created": "2016-11-29T12:31:57Z",
      "published_time": "2017-10-25T03:48:39Z",
      "objectives_summary": [
        "Tons of modern CSS techniques to create stunning designs and effects",
        "Advanced CSS animations with @keyframes, animation and transition",
        "How CSS works behind the scenes: the cascade, specificity, inheritance, etc."
      ],
      "tracking_id": "82c3b01edc374dd8bfae2a2a7edcede5",
      "last_update_date": "2019-12-02"
    },
    {
      "id": 764164,
      "title": "The Complete Web Developer Course 2.0",
      "published_title": "the-complete-web-developer-course-2",
      "headline": "Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!",
      "rating": 4.5105,
      "num_reviews": 55068,
      "is_wishlisted": true,
      "created": "2016-02-16T09:09:40Z",
      "published_time": "2016-03-08T22:28:36Z",
      "objectives_summary": [
        "Build websites and webapps",
        "Build HTML-based mobile apps",
        "Get a job as a junior web developer"
      ],
      "tracking_id": "ee2a2f5cacbe4eee80136b5be2847aa4",
      "last_update_date": "2020-01-29",
      "content_info": "30.5 hours"
    },
    {
      "id": 995016,
      "title": "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
      "published_title": "vuejs-2-the-complete-guide",
      "headline": "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
      "rating": 4.67708,
      "num_reviews": 33813,
      "created": "2016-10-26T14:35:25Z",
      "published_time": "2016-11-08T18:55:21Z",
      "objectives_summary": [
        "Build amazing Vue.js Applications - all the Way from Small and Simple Ones up to Large Enterprise-level Ones",
        "Understand the Theory behind Vue.js and use it in Real Projects",
        "Leverage Vue.js in both Multi- and Single-Page-Applications (MPAs and SPAs)"
      ],
      "tracking_id": "f4f8d9f9601d4c70ada73dbe9237f5ea",
      "last_update_date": "2019-12-17",
      "content_info": "22 hours"
    },
    {
      "id": 822444,
      "title": "Python and Django Full Stack Web Developer Bootcamp",
      "published_title": "python-and-django-full-stack-web-developer-bootcamp",
      "headline": "Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!",
      "rating": 4.51144,
      "num_reviews": 24682,
      "is_wishlisted": false,
      "created": "2016-04-15T03:19:00Z",
      "published_time": "2017-02-24T18:40:55Z",
      "objectives_summary": [
        "Create a fully functional web site using the Full-Stack with Django 1.11",
        "Learn how to use HTML to create website content",
        "Use CSS to create beautifully styled sites"
      ],
      "tracking_id": "7226e19e3b174600bef4e466b0b4b542",
      "last_update_date": "2019-09-04",
      "content_info": "32 hours"
    },
    {
      "id": 705264,
      "title": "Modern React with Redux [2020 Update]",
      "published_title": "react-redux",
      "headline": "Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App.  Includes Hooks!",
      "rating": 4.63844,
      "num_reviews": 52772,
      "is_wishlisted": false,
      "created": "2015-12-23T21:40:24Z",
      "published_time": "2015-12-28T19:20:21Z",
      "objectives_summary": [
        "Build amazing single page applications with React JS and Redux",
        "Master fundamental concepts behind structuring Redux applications",
        "Realize the power of building composable components"
      ],
      "tracking_id": "3d86d779a67e4a68bb2fc07f16262148",
      "last_update_date": "2020-01-31",
      "content_info": "47.5 hours"
    },
    {
      "id": 947098,
      "title": "Understanding TypeScript - 2020 Edition",
      "published_title": "understanding-typescript",
      "headline": "Don't limit the Usage of TypeScript to Angular! Learn the Basics, its Features, Workflows and how to use it!",
      "rating": 4.66838,
      "num_reviews": 11502,
      "is_wishlisted": false,
      "created": "2016-09-01T08:51:16Z",
      "published_time": "2016-09-12T17:33:38Z",
      "objectives_summary": [
        "Use TypeScript and its Features like Types, ES6 Support, Classes, Modules, Interfaces and much more in any of their Projects",
        "Understand what TypeScript really is about and how it works",
        "Why TypeScript offers a real advantage over vanilla JavaScript"
      ],
      "tracking_id": "b16d5a90852a406f9593e93727a2863a",
      "last_update_date": "2020-01-24",
      "content_info": "22.5 hours"
    },
    {
      "id": 2640372,
      "title": "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      "published_title": "react-nodejs-express-mongodb-the-mern-fullstack-guide",
      "headline": "Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.",
      "rating": 4.69481,
      "num_reviews": 924,
      "created": "2019-11-04T23:01:59Z",
      "published_time": "2019-11-19T21:43:17Z",
      "objectives_summary": [
        "Learn how to connect ReactJS with NodeJS, Express & MongoDB",
        "Build an entire project from scratch!",
        "Refresh the basics about ReactJS, NodeJS, Express and MongoDB"
      ],
      "tracking_id": "824a3aa46639415db462212cd105fbae",
      "last_update_date": "2019-11-25",
      "content_info": "19 hours"
    },
    {
      "id": 2153774,
      "title": "Modern HTML & CSS From The Beginning (Including Sass)",
      "published_title": "modern-html-css-from-the-beginning",
      "headline": "Build modern responsive websites & UIs with HTML5, CSS3 & Sass! Learn Flex & CSS Grid",
      "rating": 4.73506,
      "num_reviews": 6946,
      "is_wishlisted": false,
      "created": "2019-01-15T22:45:09Z",
      "published_time": "2019-01-17T23:22:55Z",
      "objectives_summary": [
        "Build Multiple High Quality Website & UI Projects",
        "HTML5 Semantic Layout & CSS Fundamentals",
        "Flexbox & CSS Grid Projects"
      ],
      "tracking_id": "21bc218261df475cb7c87ba103ca7137",
      "last_update_date": "2019-03-03",
      "content_info": "21 hours"
    },
    {
      "id": 1463348,
      "title": "Modern JavaScript From The Beginning",
      "published_title": "modern-javascript-from-the-beginning",
      "headline": "Learn and build projects with pure JavaScript (No frameworks or libraries)",
      "rating": 4.69747,
      "num_reviews": 15421,
      "created": "2017-12-08T20:33:44Z",
      "published_time": "2017-12-10T03:55:37Z",
      "objectives_summary": [
        "Modular learning sections & 10 real world projects with pure JavaScript",
        "Master the DOM (document object model) WITHOUT jQuery",
        "Asynchronous programming with Ajax, Fetch API, Promises & Async / Await"
      ],
      "tracking_id": "2876d5b8e0c84756ac7ece4d2048fab9",
      "last_update_date": "2019-12-09",
      "content_info": "21.5 hours"
    }
  ];

  constructor() { }

  getCourses(){
    return this.courses;
  }

  getCourse(id){
    let courseDetails = this.courses.find((course)=>course.id==id);
    if(courseDetails) return courseDetails;
    return null;
  }
}
