import todolistImg from "../assets/projects/todolist.jpg";
import portfolio from "../assets/projects/portfolio.png";
import sofaWebImg from "../assets/projects/sofa-website.jpg";
import noteApp from "../assets/projects/note-app.png";
interface projectsType {
  image: string;
  project_name: string;
  description: string;
  technologies: string[];
}

export const projects: projectsType[] = [
  {
    image: todolistImg,
    project_name: "To Do List",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim numquam illum accusantium reiciendis nulla molestias nam, rem optio error?",
    technologies: ["react js", "html", "css", "tailwind", "javascript"],
  },
  {
    image: portfolio,
    project_name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim numquam illum accusantium reiciendis nulla molestias nam, rem optio error?",
    technologies: ["react js", "html", "css", "tailwind", "javascript"],
  },
  {
    image: sofaWebImg,
    project_name: "Sofa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim numquam illum accusantium reiciendis nulla molestias nam, rem optio error?",
    technologies: ["react js", "html", "css", "tailwind", "javascript"],
  },
  {
    image: noteApp,
    project_name: "Note app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim numquam illum accusantium reiciendis nulla molestias nam, rem optio error?",
    technologies: ["php", "laravel", "html", "css", "tailwind", "javascript"],
  },
];
