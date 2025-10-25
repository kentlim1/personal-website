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
          <Dropdown
            title="University of California, Santa Barbara"
            desc="B.S. in Computer Science | Sep 2024 -- June 2028"
            bullets={[
              "GPA: 3.76/4.0 | Dean’s Honors (2024–2025)",
              "Relevant Coursework: Object Oriented Programming, Data Structures and Algorithms, Linear Algebra, Discrete Math, Probability and Statistics, \
              Differential Equations",
              "Activities: Association for Computing Machinery (ACM) member"
            ]}
          />
          </article>
          <br />
          <article>
            <strong>Newport Harbor High School</strong>
            <br />
            Aug 2020 -- June 2024
          </article>
          <br />
        </section>

        {/* --- Experience --- */}
        <section id="experience">
          <h2>Experience</h2>
          <Dropdown
            title="AI Data Trainer @ DataAnnotation"
            desc="May 2025 -- Aug 2025"
            bullets={[
              "Labeled and validated 100+ datasets to train machine learning models and natural language processing systems.",
              "Evaluated and validated machine learning outputs using C++, Python, and JavaScript to ensure accuracy, consistency, and improved model performance.",
              "Developed practical knowledge in data cleaning, supervised learning, and prompt engineering through hands-on machine learning projects.",
            ]}
          />
          <br />
          <Dropdown
            title="Lead Systems Engineer @ VEX Robotics Team"
            desc="Sep 2023 -- May 2024"
            bullets={[
              "Engineered on a VEX V5 robot throughout the year, engaging in bi-weekly team meetings and participating in practice scrimmages against other teams.",
              "Competed in the 2024 NMUSD VEX Robotics Over Under Competition, achieving 2nd place out of 14 participating teams.",
              "Designed and programmed the robot’s scoring system using Python, scoring 100+ points for our team and played a pivotal role in achieving 2nd place."
            ]}
          />
          <br />
          <Dropdown
            title="Frontend Web Developer @ NHHS Culinary Department"
            desc="Oct 2023 -- May 2024"
            bullets={[
              "Maintained the website frontend using React.js, implementing two new pages and connecting them to the navigation bar.",
              "Integrated and embedded Google Docs into the website and improved user navigation for better accessibility.",
              "Collaborated with the head of culinary to align site design and content with department goals."
            ]}
          />
          <br />
          <Dropdown
            title="Link Crew Leader @ Newport Harbor High School"
            desc="Aug 2022 -- June 2024"
            bullets={[
              "Mentored 10 freshmen annually through orientation and engagement activities, promoting academic and social success.",
              "Fostered a sense of belonging by writing monthly letters of encouragement to each student in my group."
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
              "Developed a dynamic Formula 1 statistics dashboard integrating live API data and interactive visualizations.",
              "Designed and implemented interactive line charts to display driver performance metrics, including race finishes and championship points progression, using Recharts.",
              "Fetched and parsed real-time data from the Jolpica Formula 1 API and styled the interface with Tailwind CSS for a responsive user experience.",
            ]}
            github="https://github.com/kentlim1/f1-driver-profiles"
          />
          <br />
          <Dropdown
            title="Personal Website (this website!)"
            desc="React.js, HTML/CSS, Git"
            bullets={[
              "Built and deployed a personal portfolio site using React.js and Vercel to showcase projects and experience.",
              "Strengthened skills in React.js development, codebase management, and GitHub deployment through iterative project work.",
            ]}
            github="https://github.com/kentlim1/personal-website"
          />
          <br />
          <Dropdown
            title="Alzheimer's Disease Predictor Model"
            desc="Python, Pandas, Matplotlib, Scikit-learn"
            bullets={[
              "Developed a model to predict Alzheimer’s disease based on lifestyle decisions for the 2025 UCSB Datathon.",
              "Collaborated with a team of 4 to preprocess data, perform exploratory data analysis, and train predictive models.",
              "Implemented and fine-tuned a Random Forest classifier, achieving 85% accuracy on Alzheimer’s disease prediction using a Kaggle dataset.",
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
