import {
  solving,
  design,
  creater,
  web,
  javascript,
  django,
  html,
  css,
  reactjs,
  angular,
  tailwind,
  mysql,
  mongodb,
  git,
  pandas,
  machine,
  numpy,
 
  udemy,
  ecommerce,
  thunder,
  atm,
  todo,
  blog,
  all

} from "../assets";
import python from "../assets/icons/python.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  { 
    id: "skills",
    title: "Skills" 
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Clean code",
    icon: web,
  },
  {
    title: "Problem solving",
    icon: solving,
  },
  {
    title: "Design",
    icon: design,
  },
  {
    title: "Innovation & Learning",
    icon: creater,
  },
];

const technologies = [
{
    name: "python",
    icon: python,
    level: "Advanced",
    percentage: "85%",
  },
   {
    name: "HTML 5",
    icon: html,
    level: "Advanced",
    percentage: "90%",
  },
  {
    name: "CSS 3",
    icon: css,
    level: "Advanced",
    percentage: "85%",
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: "Advanced",
    percentage: "75%",
  },
  {
    name: "Django",
    icon: django,
    level: "Advanced",
    percentage: "80%",
  },
  {
    name: "React JS",
    icon: reactjs,
    level: "Intermediate",
    percentage: "70%",
  },
  {
    name: "Angular",
    icon: angular,
    level: "Intermediate",
    percentage: "70%",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    level: "Beginner",
    percentage: "60%",
  },
  {
    name: "MySQL",
    icon: mysql,
    level: "Advanced",
    percentage: "90%",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: "Intermediate",
    percentage: "70%",
  },
  {
    name: "Numpy",
    icon: numpy,
    level: "Advanced",
    percentage: "95%",
  },
  {
    name: "git",
    icon: git,
    level: "Intermediate",
    percentage: "70%",
  },
  {
    name: "Pandas",
    icon: pandas,
    level: "Advanced",
    percentage: "95%",
  },
  {
    name: "Machine",
    icon: machine,
    level: "Beginner",
    percentage: "60%",
  },
    

  ];
const projects = [
  {
    name: "Udemy Clone",
    description:
      "A responsive Udemy clone built with HTML, CSS, and Bootstrap. Users can browse courses, view course details, and explore a clean, user-friendly interface that mimics an online learning platform",
    tags: [
      {
        name: "html",
      color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: udemy,
    source_code_link: "https://github.com/pavanipoloju22/udemy1_project",
    live_demo_link: "https://udemy1-project.vercel.app/"
  },
  {
    name: "E-Commerce",
    description:
      "A responsive e-commerce web application built with React, Tailwind CSS, and PostCSS. Users can browse products, search for items, filter by categories, view product details, and manage their shopping cart seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "postcss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:"https://github.com/pavanipolo/ecommerce_swift-cart",
     live_demo_link: "https://ecommerce-project-3t7g.vercel.app/"

  },
  {
    name: "Weather App",
    description:
      "This Angular weather app fetches real-time weather data using secure API keys and displays temperature, humidity, and conditions. Styled with CSS, it provides a responsive and user-friendly interface for instant forecasts.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: thunder,
    source_code_link: "https://github.com/pavanipoloju22/weatherapp_angular",
    live_demo_link: "https://weatherapp-angular-zdaz.vercel.app/"

  },
    {
    name: "To-Do-List App",
    description:
      "A simple and intuitive To-Do List app to add, update, and manage daily tasks.Built with React for a clean UI and LocalStorage to keep tasks persistent.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/pavanipoloju22/to-do-list",
    live_demo_link:"https://to-do-list-sigma-sepia-83.vercel.app/"
  },
  {
    name: "Blog App",
    description:
      "A blog web app is an online platform where users can create, publish, and manage articles or posts. It allows for content sharing, commenting, and personalized user interactions.",
    tags: [
      {
        name:"Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Front End",
        color: "pink-text-gradient",
      },
    ],
     image: blog,
    source_code_link: "https://github.com/pavanipoloju22/Blog-app",
    live_demo_link:"https://blog-app-6o0z.onrender.com/"
  },
  {
    name: "Crop Reccomendation Report",
    description:
      " This crop recommendation report analyzes soil nutrients and weather conditions to suggest suitable crops. It provides farmers with data-driven insights to maximize yield and sustainability.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Numpy",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: all,
    source_code_link: "https://github.com/pavanipoloju22/crop_recom_ml",
    live_demo_link:"https://tkinter-6o0z.onrender.com/"
  },
  {
    name: "ATM Tkinter",
    description:
      " ATM Tkinter is a desktop application that simulates an ATM machine, allowing users to check balance, withdraw cash, and transfer funds securely. It connects to a MySQL database to manage account details and transactions.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: atm,
    source_code_link: "https://github.com/pavanipoloju22/ATM_Tkinter",
    live_demo_link:"https://tkinter-6o0z.onrender.com/"
  },
      
]

export { services, technologies, projects };