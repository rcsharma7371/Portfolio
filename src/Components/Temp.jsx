import Motion from "./motion";
import './Hero.css'
import displayPicture from '../assets/displayPicture.webp'

const selfIntro = () =>{
    return (
        <div className="text-container"style={{width:'100%'}}>
          <h1>
            Hi,I'm <span style={{ color: "#6cb5a9" }}>Ranjeet</span>
          </h1>
          <p>
            I'm Mern Stack Developer,Capable of handling both frontend and
            backend development, ensuring seamless integration and performance.
          </p>
        </div>
    )
}

const selfPicture = () =>{
    return (
        <div className="profile-conatiner" style={{width:'100%'}}>
        <img src={displayPicture} alt="" />
      </div>
    )
}

export default function Temp() {
  return (
    <>
      <section className="into-container">
            <Motion component={selfIntro} direction={{x:0,y:-200}}/>  
            <Motion component={selfPicture} direction={{x:0,y:-200}}/>  
      </section>
    </>
  );
}