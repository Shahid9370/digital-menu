import React from 'react';
import Header from '../components/Header.jsx';
import styles from '../styles/AboutPage.module.css';

const skills = [
  {
    title: "Programming Languages",
    items: [
      "JavaScript (ES6+)",
      "Java",
      "Python",
      "C++",
      "Data Structures & Algorithms"
    ]
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "RESTful APIs",
      "Authentication (JWT, OAuth)"
    ]
  },
  {
    title: "Databases",
    items: [
      "MongoDB",
      "MySQL"
    ]
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "PyCharm",
      "XAMPP",
      "Google Colab"
    ]
  }
];

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "Uptoskills Org, Delhi (Remote)",
    period: "Feb 2025 – Apr 2025",
    points: [
      "Developed & deployed AI-powered Interview Q&A System using React.js and Tailwind CSS.",
      "Integrated Gemini API for real-time AI-generated interview questions.",
      "Reduced integration bugs by 30% by collaborating with backend team.",
      "Improved frontend load speed by 25% with mobile-first design."
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Aroma Brand Solutions, Pune",
    period: "Nov 2024 – Jan 2025",
    points: [
      "Built a Movie Recommendation Web App using React.js.",
      "Boosted SEO and Google Lighthouse performance by 20%."
    ]
  }
];

const projects = [
  {
    title: "AI Powered Interview Q&A System",
    period: "Feb 2025 – Apr 2025",
    tech: "React.js, Tailwind CSS, WebSocket, REST APIs",
    desc: "Built real-time interview simulation with dynamic AI-generated questions."
  },
  {
    title: "AI-Based Job Recommendation Portal",
    period: "Apr 2025 – May 2025",
    tech: "React.js, Resume Parsing, AI Models",
    desc: "Implemented skill-based filtering and job compatibility scoring for personalized matches."
  },
  {
    title: "Restaurant Website with QR Menu",
    period: "Oct 2024 – Nov 2024",
    tech: "HTML, CSS, JavaScript",
    desc: "Created digital menu system accessible via QR codes for improved hygiene and convenience."
  }
];

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img
            src="https://avatars.githubusercontent.com/u/128445549?v=4"
            alt="SHAHID SHAIKH"
            className={styles.avatar}
          />
          <h1 className={styles.heroTitle}>SHAHID SHAIKH</h1>
          <p className={styles.heroSubtitle}>
            Frontend Developer | AI Project Enthusiast | MERN Stack Intern
          </p>
          <p className={styles.heroIntro}>
            I love building things that help people—whether it’s a smart job portal, a movie app, or a restaurant QR menu. I’m always learning and strive for simple, fast, and user-friendly web experiences. Let's connect!
          </p>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.experienceCard}>
              <h3>{exp.title} <span className={styles.expCompany}>@ {exp.company}</span></h3>
              <div className={styles.expPeriod}>{exp.period}</div>
              <ul>
                {exp.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsList}>
          {projects.map((proj, idx) => (
            <div key={idx} className={styles.projectCard}>
              <h3>{proj.title}</h3>
              <div className={styles.projectMeta}>{proj.period} | <span>{proj.tech}</span></div>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          {skills.map(skill => (
            <div key={skill.title} className={styles.skillBlock}>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <ul className={styles.skillList}>
                {skill.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <a href="https://portfolio-shahid-shaikh.netlify.app/" className={styles.ctaButton}>
          🚀 View My Portfolio
        </a>
      </section>
    </div>
  );
};

export default AboutPage;