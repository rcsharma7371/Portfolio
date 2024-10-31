import "./Hero.css";
import displayPicture from "../assets/displayPicture.webp";
import Motion from "./motion";
export default function Hero() {
  const heroContainer = () =>{
    return (
      <section className="into-container">
        <div className="text-container">
          <h1>
            Hi,I'm <span style={{color:'#6cb5a9'}}>Ranjeet</span>
          </h1>
          <p>
            I'm Mern Stack Developer,Capable of handling both frontend and
            backend development, ensuring seamless integration and performance.
          </p>
        </div>
        <div className="profile-conatiner">
          <img src={displayPicture} alt="" />
        </div>
      </section>
    )
  }
  // console.log(backgroundPng);
  return (
    <>
      <Motion component={heroContainer} direction={{x:0,y:-200}}/>
    </>
  );
}
