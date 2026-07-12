import "../css/Education.css";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      title: "Bachelor of Technology (Computer Science Engineering)",
      institute: "DCRUST University, Murthal",
      year: "2022 - 2026",
      score: "CGPA : 7.13",
    },
    {
      title: "Diploma in Computer Applications & Accounting (DCAA)",
      institute: "Completed",
      year: "2024",
      score: "1 Year Diploma",
    },
    {
      title: "Senior Secondary (12th)",
      institute: "HBSE",
      year: "2022",
      score: "85%",
    },
    {
      title: "Secondary (10th)",
      institute: "HBSE",
      year: "2020",
      score: "86%",
    },
  ];

  return (
    <section className="education" id="education">
      <h2>Education</h2>

      <div className="education-container">
        {education.map((item, index) => (
          <motion.div
            className="edu-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{item.title}</h3>
            <h4>{item.institute}</h4>
            <p>{item.year}</p>
            <span>{item.score}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;