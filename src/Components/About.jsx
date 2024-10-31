import CategoryCard from "./CategoryCard";
import Motion from "./motion";
import frontend from "../assets/tech/frontend.webp";
import backend from "../assets/tech/backend.png";
import api from "../assets/tech/api.png";

export default function About() {
  const data = [
    {
      imgLink: frontend,
      title: "FrontEnd Development",
    },
    {
      imgLink: backend,
      title: "BackEnd Development",
    },
    {
      imgLink: api,
      title: "API Integration",
    },
  ];
  const aboutContainer = () => {
    return (
      <section id="About">
        <div className="about-section" style={{ width: "60%", color: "gray" }}>
          <p>INTRODUCTION</p>
          <h1 style={{ fontSize: "4rem", color: "#f5f5f5" }}>Overview.</h1>
          <p className="about-description" style={{ fontSize: "1.2rem" }}>
            I'm a skilled software developer with experience in JavaScript, and
            expertise in frameworks like{" "}
            <b style={{ color: "#6cb5a9" }}>
              React, Node.js, Express.js and MongoDB
            </b>
            . I'm a quick learner and collaborate closely with clients to create
            efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life
          </p>
        </div>
        {/* <Motion content={content} /> */}
      </section>
    );
  };
  return (
    <>
      <Motion component={aboutContainer} direction={{ x: -200, y: 0 }} />
      <CategoryCard data={data} />
    </>
  );
}
