/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Calvin",
  logo_name: "Calvin.Tai()",
  nickname: "Calvin",
  full_name: "Calvin Tai",
  subTitle:
    "An aspiring software engineer & deep learning enthusiast 🔥. I am also a motivator, leader and a table tennis athlete",
  resumeLink:
    "https://drive.google.com/file/d/160UclJjPXfTcYF16EEVgX0UJk8nq_h6-/view?usp=sharing",
  mail: "mailto:jfctai@rams.colostate.edu",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/CalvinTai0402",
  linkedin: "https://www.linkedin.com/in/calvintjf/",
  gmail: "jfctai@rams.colostate.edu",
  facebook: "https://www.facebook.com/calvin.tai.79656/",
  instagram: "https://www.instagram.com/cclvntjf/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build mobile and web user interfaces using ReactJS",
        "⚡ Create backend APIs in Node, Express, Laravel, SQL & MongoDB",
        "⚡ Integrate third party services such as Firebase/ Digital Ocean/ Pusher",
        "⚡ Deploy applications using Docker and Kubernetes",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Deep Learning Practitioner",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Train, tune, and save models for supervised and unsupervised regression, classification tasks on multiple datasets.",
        "⚡ Avoid overfitting via hyperparametertuning and cross-validation.",
        "⚡ Implement open-source technologies such as YOLO for real-time object detection.",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bachelors of Science in Computer Engineering & Computer Science",
      subtitle: "Colorado State University | GPA 4.0/4.0",
      logo_path: "csu.png",
      alt_name: "CSU",
      duration: "2018 - Present",
      descriptions: [
        "I have studied core subjects like data structures & algorithms, computer architecture, electronics, circuit logic and analysis.",
        "I have also completed specializations in web development, machine learning & deep learning and implemented several models on datasets.",
        "I have completed several technical projects including two CRUD RESTful web application, a Google search engine clone, a facial recognition IoT system with Raspberry Pi4 and an app-controlled bluetooth toycar.",
      ],
      website_link: "https://www.engr.colostate.edu/ece/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Docker & Kubernetes",
      subtitle: "Udemy",
      logo_path: "docker.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6ac8ec4a-1c68-44c5-bcf8-fab0f2a86cf1/",
      alt_name: "Udemy",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Data Structures & Algorithms",
      subtitle: "Algoexpert",
      logo_path: "algoexpert.png",
      certificate_link:
        "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-e928ee9902",
      alt_name: "Algoexpert",
      color_code: "#E2405F",
    },
    {
      title: "Neural Network and Deep Learning",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ZC99YG533KC8",
      alt_name: "Coursera",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BTP648GD7B75",
      alt_name: "Coursera",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/C7KYPZFTZVBT",
      alt_name: "Coursera",
      color_code: "#fe0037",
    },
    {
      title: "Sequence Models",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/CEZ6N93KFH32",
      alt_name: "Coursera",
      color_code: "#2AAFED",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/L6BPJBMKZXYL",
      alt_name: "Coursera",
      // color_code: "#f36c3d",
      color_code: "#7A7A7A",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internship and took two part-time techinal jobs during the semester. I've also done numerous technical projects in my own time.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Developer (volunteer)",
          company: "Ebackoffice",
          company_url: "https://ebackofficeco.com/",
          logo_path: "Ebackoffice.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home | Fort Collins",
          description:
            "I wrote a GUI program that automates the bookkeeping process by generating IIF and PDF files via webscraping using Python3 Selenium. This saves Ebackoffice 80 percent of their cost every month.",
          color: "#0071C5",
        },
        {
          title: "Software Engineer (contractor)",
          company: "ClearCorp Inc",
          // company_url: "http://nightowls.company/",
          logo_path: "clearcorp.png",
          duration: "Aug 2020 - Jan 2021",
          location: "Work From Home | Fort Collins",
          description:
            "I worked on USB Encryption and imaged uSD cards for an embedded system. I also dual booted Linux/Windows on a PC and created a GUI for Arduino.",
          color: "#ee3c26",
        },
        {
          title: " Software Development Engineer (intern)",
          company: "Hewlett-Packard Enterprise",
          company_url: "https://www.hpe.com/us/en/home.html",
          logo_path: "HPE.png",
          duration: "May 2020 - Aug 2020",
          location: "Work From Home | Fort Collins",
          description:
            "I deployed apps using Docker and Kubernetes through VMs on VMWare. I wrote SKILL scripts for Cadence’s Allegro PCB editor to  identify and prioritize critical segment-over-void violations. I wrote Linux Bash scripts to automatically update driver.",
          color: "#ee3c26",
        },
        {
          title: "Electrical Engineer (intern)",
          company: "Engineering Research Center",
          company_url:
            "https://www.engr.colostate.edu/ece/research/engineering_research_centers.php",
          logo_path: "ERC.png",
          duration: "May 2019 - Aug 2019",
          location: "Office | Fort Collins",
          description:
            "I assembled an A/D Faraday’s box(high frequency filtering) to rectify misalignment of lasers via servo positioning. I composed a GUI program connected to Basler pylon cameras in Matlab, C++, Qt creator.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Technical Projects",
  description:
    "I like to work on technical projects to keep myself updated with technology. My main interests are web development and deep learning",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Calvin_profile_pic.jpg",
    description:
      "You can contact me using the media below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Get To Know Me",
    subtitle:
      "I like to post about interesting things that I do with friends and family on Instagram. If you want to get to know me better, click the link below!",
    link: "https://www.instagram.com/cclvntjf/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "FULL STACK TOUR-MAP APP",
      url: "https://github.com/CalvinTai0402",
      description:
        "⚡ Agile (Scrum) based team development. Developed multiple RESTful CRUD protocols (Java Spark microservices). Developed a mobile-friendly and responsive UI (ReactJS).",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      demoLink: "https://drive.google.com/file/d/1uixi-KPdELRavpQCxd20zsfo4pOmgWKQ/view?usp=sharing"
    },
    {
      id: "1",
      name: "REAL TIME CHATROOM APP",
      url: "https://github.com/CalvinTai0402/gca-ChatRoomFrontEnd",
      description:
        "⚡ RESTful API using NodeJS, Express, MongoDB; Real time response using Pusher; Authentication using Firebase. ReactJS for real time data retrieval and injection.",
      languages: [
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
      demoLink: "https://whatsapp-6a677.web.app/"
    },
    {
      id: "2",
      name: "GOOGLE SEARCH ENGINE CLONE",
      url: "https://github.com/CalvinTai0402/googleSearchEngineClone",
      description:
        "⚡ Used ReactJS page rendering, creating reusable UI components and data binding. Used Google’s Custom Search API to search the web.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
      demoLink: "https://clone-f7d9a.web.app/"
    },
    {
      id: "3",
      name: "MODELLING ML/DL PIPELINES",
      url: "https://github.com/CalvinTai0402/ML_Projects",
      description:
        "Trained, tuned, and saved models for supervised and unsupervised regression, classification (real time) tasks on multiple datasets using TF, Keras & SKLearn.",
      languages: [
        {
          name: "Keras",
          iconifyClass: "simple-icons:keras",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      demoLink: "https://github.com/CalvinTai0402/ML_Projects"
    },
    {
      id: "4",
      name: "IOT-PI4 FACIAL RECOGNITION",
      url: "https://github.com/CalvinTai0402/IoTFaceRecognition",
      description:
        "Trained a facial detection and recognition model and embedded it in a Pi4. Pi4 alerts a remote PC when faces are recognized (socket programming).",
      languages: [
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      demoLink: "https://drive.google.com/file/d/1ipoup5ZLI0ttUOeMwVu4iGrMkLYHx5mJ/view?usp=sharing"
    },
    {
      id: "5",
      name: "BLUETOOTH-CONTROLLED TOY CAR",
      url: "#/projects",
      description:
        "Built the electronics and mechnanics of the toy car using an Arduino and a 3D printer. Used MIT app inventor to create the app.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
      demoLink: "https://drive.google.com/file/d/1ijTogYzTIWQKPMTu4jehr1gYuAY4BJ-_/view?usp=sharing"
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
