import About from "./About";
import Hero from "./Hero";
import NavBar from "./NavBar";
import "./ParentComponent.css";
import { Container } from "@mui/material";
import backgroundPic from '../assets/background.png'

export default function ParentComponent() {
  return (
    <>
      <Container maxWidth="xl" sx={{
        background: "url('../assets/background.png')",
        backgroundSize: "cover", // Adjusts the size of the background image
        backgroundPosition: "center", // Centers the image
        // height: "95vh", // Set height as needed
        // backgroundColor:'red'
      }}>
        <div className="container">
          <NavBar />
          <Hero />
          <About />
        </div>
      </Container>
    </>
  );
}
