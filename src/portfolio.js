/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arjav Barya",
  title: "Hey there , I'm Arjav !" ,
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 experienced in crafting web applications with the MERN stack and other cool libraries and frameworks. I also love solving problems in C++. Ready to code and conquer? Let's dive in!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Arjav1971",
  linkedin: "https://www.linkedin.com/in/arjav-barya-569584235/",
  gmail: "2021ume0205@iitjammu.ac.in",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram:"https://www.instagram.com/oyearjav/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do ?",
  subTitle: "Versatile Full Stack Developer Passionate About Crafting Seamless Digital Experiences",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end / user interfaces for your web and mobile applications"
    ),
    emoji("⚡ Create and integrate robust APIs for seamless communication between different parts of your application"),
    emoji(
      "⚡ Integrate third-party services such as Firebase, AWS, and more"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "express",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "mongodb",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "tailwind",
    fontAwesomeClassname: "fab fa-css3-alt" // Using CSS icon as an alternative
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "cpp",
    fontAwesomeClassname: "fas fa-code" // Using a generic code icon as an alternative
  },
  {
    skillName: "github",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "redux",
    fontAwesomeClassname: "fab fa-redux"
  },
  {
    skillName: "vue",
    fontAwesomeClassname: "fab fa-vuejs"
  }
],
display: true // Set false to hide this section, defaults to true
}
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology (IIT) Jammu",
      logo: require("./assets/images/IITj.jpg"),
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "November 2021 - May 2025",
      // desc: "Served as Deputy Contingent Leader for Inter IIT Tech Meet 12.0, held at IIT Madras.",
      descBullets: [
        "Led IIT Jammu's elite contingent to the prestigious Inter IIT Tech Meet 12.0 at IIT Madras.",
        "Co-Head of Competitive Coding Department at the Coding Club, IIT Jammu, fostering a culture of excellence in coding.",
        "Led and headed various coding events, fostering collaboration and innovation.",
        "Participated in cultural events, showcasing versatility and a well-rounded skill set."

      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Intern",
      company: "MapIt.ai",
      companylogo: require("./assets/images/mapit_ai_logo.jpeg"),
      date: "June 2024 – July 2024",
      desc: "Developed a Comprehensive Data Processing and Visualization System.",
      descBullets: [
        "Built an ETL pipeline on AWS using services like S3, SQS, Lambda, and Glue.Built an ETL pipeline on AWSusing services like S3, SQS, Lambda, and Glue.",
        "Created front-end UI for a chatbot with interactable charts as responses."
      ]
    },
    {
      role: "Founding Engineer",
      company: "BotMast",
      companylogo: require("./assets/images/Botmast.jpeg"),
      date: "March 2024 – May 2024",
      desc: "Developed the Front End for Real Estate CRM.",
      descBullets: [
        "Built the product from scratch using modern web technologies.",
        "Used React JS, Ant Design, and Material-UI for a rich user interface.",
        " Implemented Redux for effective state management."
      ]
    },
    {
      role: "Intern",
      company: "Diagonal Matrix",
      companylogo: require("./assets/images/DiagonalMatrix.jpeg"),
      date: "May 2023 – July 2023",
      desc: "Developed the Front End for a Financial Crime Detection Firm.",
      descBullets: [
        "Collaborated with business teams to gather requirements and suggest improvements.",
        "Built rich user interfaces and developed server-side logic.",
        "Explored the use of Low-Code/No-Code Platforms in modern technology."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/food.png"),
      projectName: "Food App - Food Ordering Platform",
      projectDesc: "Developed a comprehensive food ordering platform using the MERN stack. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://food-app-inky-alpha.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Devhub.png"),
      projectName: "DevHub - E-commerce Platform ",
      projectDesc: "Engineered an e-commerce platform from scratch using React, Node.js, MongoDB, and Redux.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://itsdevhub.netlify.app/"
        }
      ]
    },
    {    
      image: require("./assets/images/Admin.png"),
      projectName: "DevHub - Admin Panel ",
      projectDesc: "Created  an integrated admin panel for managing products, user roles, orders, and accounts.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://devhub-admin.netlify.app/"
        }
      ]
    },
    
    
    {
      image: require("./assets/images/passenger-reacco.jpg"),
      projectName: "Passenger Reaccommodation Problem Solver",
      projectDesc: "Optimized Passenger Re-Accommodation Algorithms for Enhanced Travel Experience",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Arjav1971/Passenger-Re-Accommodation-Problem-Mphasis-"
        }
      ]
    },
    {
      image: require("./assets/images/last-mile-delivery-trends.webp"),
      projectName: "Vehicle Routing Solver for ”Last-Mile Delivery” ",
      projectDesc: "– Created a solver to optimize delivery vehicle routes, considering capacity limits and dynamic pickup points.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Arjav1971/Grow_Simplee_backend"
        }
      ]
    },
    {
      image: require("./assets/images/tree-leaves.png"),
      projectName: "Plant Disease Classification Model ",
      projectDesc: "Developed a plant disease classification model using ResNet9, achieving an accuracy of 98.7% on a training dataset of 20,000 plant leaf images categorized into 15 disease classes.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Arjav1971/Plant-Disease-Classification"
        }
      ]
    },
    {
      image: require("./assets/images/BotMast.png"),
      projectName: "BotMast Landing Page",
      projectDesc: "Created the landing page for BotMast , real state CRM company.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://botmast.in/"
        }
      ]
    },
    {
      image: require("./assets/images/To-do-list.png"),
      projectName: "Taskinator-The-to-do-list ",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://its-taskinator.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Secure-Blink.png"),
      projectName: "Landing Page",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://secure-blink-lake.vercel.app/"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Problem Solving At Leetcode",
      subtitle:
        "Solved 700+ leetcode problems with a consistency of 114 days and contest rating of 1700+.",
      image: require("./assets/images/leetcode.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Leetcode",
          url: "https://leetcode.com/u/ArjavBarya0809/"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Stanford Online ",
      subtitle:
        "Advanced Learning Algorithms.",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",

          url: "https://drive.google.com/file/d/13rXTS32i3Z7lnx7rYD7Bim_9X0af5HdC/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Stanford Online ",
      subtitle: "Supervised Machine Learning (Regression and Classification).",
      image: require("./assets/images/stanford.png"),

      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13rXTS32i3Z7lnx7rYD7Bim_9X0af5HdC/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9301763998",
  email_address: "1971arjavbarya@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
