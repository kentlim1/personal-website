import { Analytics } from "@vercel/analytics/react";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import "./App.css";
import Dropdown from "./Dropdown";

function App() {
  const linkedin = "https://www.linkedin.com/in/k3ntlim";
  const github = "https://github.com/kentlim1";

  return (
    <>
      {/* ---- Header ---- */}
      <header className="site-header">
        <div className="header-content">
          <h1 class="typing">Kent Lim</h1>
          <nav aria-label="Social Links" className="social-nav">
          <a 
            href={linkedin} 
            className="linkedin-icon" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <FaLinkedin />
          </a>
          <a 
            href={github} 
            className="github-icon" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
          href="/Kent_Lim_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-icon"
          aria-label="Resume (PDF)"
          >
            <FaFilePdf />
          </a>
          </nav>
        </div>
      </header>

      <main>
        {/* --- About --- */}
        <section id="about">
          <h2>About</h2>
          <p>
            Hello! I am a second-year Computer Science major at UC Santa Barbara
            interested in software and web development. I was born and raised in
            the Philippines (kamusta po!) and moved to the United States in 2015.
          </p>
          <br />
          <p>
            When I'm not coding, I love visiting new places, watching Formula 1
            (go Charles Leclerc!), and taking care of my dog Milo.
          </p>
          <br />
        </section>

        {/* --- Education --- */}
        <section id="education">
          <h2>Education</h2>
          <article>
            <strong>University of California, Santa Barbara</strong>
            <br />
            B.S. in Computer Science &nbsp; | &nbsp; Sep. 2024 - June 2028
          </article>
          <br />
          <article>
            <strong>Newport Harbor High School</strong>
            <br />
            Aug. 2020 - June 2024
          </article>
          <br />
        </section>

        {/* --- Experience --- */}
        <section id="experience">
          <h2>Experience</h2>
          <Dropdown
            title="AI Data Trainer @ DataAnnotation"
            desc="May 2025 - Aug. 2025"
            bullets={[
              "Completed 100+ tasks related to data labeling and model evaluation to train machine learning models and natural language processing (NLP) systems.",
              "Evaluated and validated machine learning outputs using C++, Python, and JavaScript to ensure accuracy, consistency, and improved model performance.",
              "Developed practical knowledge in data cleaning, supervised learning, and prompt engineering through hands-on machine learning projects.",
            ]}
          />
          <br />
          <Dropdown
            title="Robotics Club Team Member @ Newport Harbor High School"
            desc="Sep. 2023 - May 2024"
            bullets={[
              "Worked on a VEX V5 robot throughout the year, adhering to 2024 competition rules.",
              "Participated in the 2024 NMUSD VEX Robotics Over Under Competition, representing our high school.",
              "Achieved 2nd place out of 14 participating teams, taking home a runner-up trophy.",
              "Designed and programmed the robot’s tri-ball collector mechanism using Python.",
            ]}
          />
          <br />
          <Dropdown
            title="Link Crew Leader @ Newport Harbor High School"
            desc="Aug. 2022 - June 2024"
            bullets={[
              "Introduced a group of 10 new students to the high school, giving them a tour of the school on orientation day.",
              "Mentored the group throughout the school year, acting as a point of contact for school-related questions.",
              "Fostered a sense of belonging in my group, creating several handwritten letters to each student every month to check in on them.",
            ]}
          />
          <br />
        </section>

        {/* --- Projects --- */}
        <section id="projects">
          <h2>Projects</h2>
          <Dropdown
            title="Formula 1 Driver Statistics"
            desc="TypeScript, React.js, Recharts, Tailwind CSS, HTML, Git"
            bullets={[
              "Created a website showcasing F1 driver profiles in order of championship standings, styled with Tailwind CSS.",
              "Displayed driver statistics using Recharts.",
              "Queried updated data from the Jolpica F1 API.",
            ]}
            github="https://github.com/kentlim1/f1-driver-profiles"
          />
          <br />
          <Dropdown
            title="Personal Website (this website!)"
            desc="React.js, HTML/CSS, Git"
            bullets={[
              "Created a personal website displaying my information, contact, resume, and activities.",
              "Gained experience in developing and managing a codebase and deploying on GitHub.",
            ]}
            github="https://github.com/kentlim1/personal-website"
          />
          <br />
          <Dropdown
            title="Alzheimer's Disease Predictor Model"
            desc="Python, Pandas, Matplotlib, Scikit-learn"
            bullets={[
              "Developed a model to predict Alzheimer’s disease based on lifestyle decisions for the 2025 UCSB Datathon.",
              "Performed data cleaning, exploratory analysis, and model training.",
              "Utilized a random forest model, achieving 80% accuracy.",
            ]}
          />
          <br />
        </section>

        {/* --- Skills --- */}
        <section id="skills">
          <h2>Skills</h2>
          <p>
            <strong>Languages</strong>: C++, Java, Python, TypeScript, JavaScript,
            SQL, HTML/CSS
            <br />
            <strong>Developer Tools</strong>: Git, Bash, Visual Studio Code, Vercel, Robot
            Mesh Studio
            <br />
            <strong>Frameworks</strong>: React.js, Node.js, Tailwind, Recharts
            <br />
            <strong>Libraries</strong>: Pandas, Matplotlib, Scikit-learn
          </p>
          <br />
        </section>
      </main>

      {/* ---- Footer ---- */}
      <footer className="site-footer">
        <p>Made with React by Kent Lim</p>
      </footer>

      <Analytics />
    </>
  );
}

export default App;
