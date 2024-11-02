import CategoryCard from "./CategoryCard";
import Motion from "./motion";
import frontend from "../assets/tech/frontend.webp";
import backend from "../assets/tech/backend.png";
import api from "../assets/tech/api.png";
import database from "../assets/tech/database.png";
import { Container, Grid2, Box, Typography } from "@mui/material";

export default function About() {
  const data = [
    {
      imgLink: frontend,
      title: "FrontEnd Development",
    },
    {
      imgLink: api,
      title: "API Integration Development",
    },
    {
      imgLink: backend,
      title: "BackEnd Development",
    },
    {
      imgLink: database,
      title: "DataBase Connectivity",
    }
  ];
  const aboutContainer = () => {
    return (
      <Container id="About">
        <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 6 }} >
          <Box sx={{ mt: 5,width:{xs:'100%',sm:'90%',md:'80%',lg:'75%',xl:'70%'} }} >
            <Typography gutterBottom>INTRODUCTION</Typography>

            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
                fontWeight: "700",
              }}
            >
              Overview.
            </Typography>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.3rem" } }}
              >
                I'm a skilled software developer with experience in JavaScript,
                and expertise in frameworks like{" "}
                <b style={{ color: "#6cb5a9" }}>
                  React, Node.js, Express.js and MongoDB
                </b>
                . I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that
                solve real-world problems. Let's work together to bring your
                ideas to life
              </Typography>
          </Box>
        </Grid2>
      </Container>
    );
  };
  return (
    <>
      <Motion component={aboutContainer} direction={{ x: -200, y: 0 }} />
      <CategoryCard data={data} />
    </>
  );
}
