import easeevent from "../assets/EaseEvent.png";
import weatherapp from "../assets/weatherapp.png";
import recilook from "../assets/ReciLook.png";
import intern from "../assets/InternshipChallenge.png";

const projects = [
    {
      id: 1,
      title: "Recilook",
      description:
        "I created a Recipe finder webapp named ReciLook. It is used to find the recipes of various foods. This is a personal project developed in ReactJS with Tailwind CSS.",
      image: recilook,
      techStack: ["ReactJS", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      link: "https://reci-look.vercel.app/",
    },
    {
      id: 2,
      title: "Challenge",
      description:
        "I created this website as per the design provided by a company as a challenge. This was made through the full use of React JS and SCSS.",
      image: intern,
      techStack: ["ReactJS", "SCSS", "JavaScript", "HTML", "CSS"],
      link: "",
    },
    {
      id: 3,
      title: "EaseEvent",
      description:
        "Created a online venue booking and management system for my Final Year Project. It was created with the purpose of easy venue booking method and to overcome the effort of traditional booking process.",
      image: easeevent,
      techStack: ["Django", "Bootstrap", "HTML", "JavaScript", "MongoDB"] ,
      link: "",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "The weatherapp created shows the weather of different places with their whole description. It is also shows the background as per the weather status.",
      image: weatherapp,
      techStack: ["PHP", "HTML", "JavaScript", "CSS", "MySQL"],
      link: "",
    },
  ];
  
  export default projects;
  