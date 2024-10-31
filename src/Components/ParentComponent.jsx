import About from "./About";
import Hero from "./Hero";
import NavBar from "./NavBar";
import "./ParentComponent.css";

export default function ParentComponent() {
  return (
    <>
      <section className="parent-container">
          <div className="container">
            <NavBar />
            <Hero />
            <About />
          </div>
      </section>
    </>
  );
}
