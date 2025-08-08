import { Analytics } from "@vercel/analytics/react"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./App.css";
import Dropdown from './Dropdown';


function App() {
  const linkedin = "https://www.linkedin.com/in/kent-lim-8542a6344/";
  const github = "https://github.com/kentlim1";

  return (
    <>
      <div className="header">
        <h1>Kent Lim</h1>
        <div className="icons">
          <a
            href={linkedin}
            className="linkedin-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={github}
            className="github-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      
      <h2>About</h2>
      <p>Hello! I am a second year Computer Science major at UC Santa Barbara interested in software and web development. I was born and raised in the Philippines (kamusta po!) and
        moved to the United States in 2015.
      </p>
      <p>When I'm not coding, I love traveling the world, watching Formula 1 (go Charles Leclerc!), and taking care of my dog Milo.</p>

      <h2>Education</h2>
      <div>
        <strong>University of California, Santa Barbara</strong><br />
        B.S. in Computer Science &nbsp; | &nbsp; Sep. 2024 - June 2028
      </div>
      <br />
      <div>
        <strong>Newport Harbor High School</strong><br />
        Aug. 2020 - June 2024
      </div>

      <h2>Experience</h2>
      <Dropdown
        title="AI Data Trainer @ DataAnnotation"
        desc="May 2025 -- Present"
        bullets={[
          "Completed 100+ tasks related to data labeling and model evaluation to train machine learning models and natural language processing (NLP) systems.",
          "Annotated various outputs of machine learning models, ensuring that model outputs are accurate and adhere to certain criteria.",
          "Utilized various programming languages (Python, C++, JavaScript) to validesc data and improve machine learning model outputs.",
          "Gained hands-on exposure to the process of machine learning, such as data cleaning, supervised learning, and prompt engineering."
      ]}
      />
      <br />
      <Dropdown
        title="Robotics Club Team Captain @ Newport Harbor High School"
        desc="Sep. 2023 -- May 2024"
        bullets={[
          "Worked on a VEX V5 robot throughout the year, adhering to 2024 competition rules.",
          "Participated in the 2024 NMUSD VEX Robotics Over Under Competition, representing our high school.",
          "Achieved 2nd place out of 14 participating teams, taking home a runner-up trophy.",
          "Designed and programmed the robot’s tri-ball collector mechanism using Python."
      ]}
      />
      <br />
      <Dropdown
        title="Link Crew Leader @ Newport Harbor High School"
        desc="Aug. 2022 -- June 2024"
        bullets={[
          "Introduced a group of 10 new students to the high school, giving them a tour of the school on orientation day.",
          "Mentored the group throughout the school year, acting as a point of contact for school-related questions.",
          "Achieved 2nd place out of 14 participating teams, taking home a runner-up trophy.",
          "Fostered a sense of belonging in my group, creating several handwritten letters to each student every month to check in on them."
      ]}
      />
      <br />
      <Dropdown
        title="Code It, Make It, Build It Club Member @ Newport Harbor High School"
        desc="Aug. 2022 -- June 2024"
        bullets={[
          "Maintained the school’s culinary website with 100+ website visitors every year.",
          "Published 2 new website pages to enhance site functionality and user experience.",
          "Partnered with the school’s Culinary Department Chair to understand requirements and ensure delivery met expectations.",
      ]}
      />

      <h2>Projects</h2>
      <Dropdown
        title="Personal Website (this website!)"
        desc="React.js, HTML/CSS, Git"
        bullets={[
          "Created a personal website displaying my information, contact, resume, and activities.",
          "Gained experience in developing and managing a codebase, working with React.js, and deploying successful progress onto GitHub."
      ]}
      />
      <br />
      <Dropdown
        title="Alzheimer's Disease Predictor Model"
        desc="Python, Git"
        bullets={[
          "Developed a model to predict Alzheimer’s disease based on lifestyle decisions for the 2025 UCSB Datathon.",
          "Collaborated with a group to perform data cleaning, exploratory data analysis, and model training.",
          "Utilized a random forest model to predict Alzheimer’s disease from a public dataset, resulting in 80% accuracy after training."
      ]}
      />

      <h2>Skills</h2>
      <p>
      <strong>Languages</strong>: C++, Java, Python, JavaScript, HTML/CSS<br />
      <strong>Developer Tools</strong>: Git, Bash, Visual Studio, Robot Mesh Studio<br />
      <strong>Frameworks</strong>: React.js, Node.js, Pandas, Matplotlib, Scikit-learn
      </p>

      <Analytics />
    </>
  );
}

export default App;
