// import "./Hero.css";
import { transform } from "framer-motion";
import displayPicture from "../assets/displayPicture.webp";
import Motion from "./motion";
import { Box, Grid2, Typography } from "@mui/material";

export default function Hero() {
  const heroContainer = () => {
    return (
      <Grid2
        container
        spacing={2}
        sx={{
          mt: { xs: 5, md: 10 },
          pl: { md: 5 },
          pt: { md: 10 },
          display: "flex",
          justifyContent: "center",
          height:'90vh'
          // backgroundColor:'yellow !important',
        }}
      >
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }} sx={{}}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
              fontWeight: "700",
            }}
          >
            Hi,I'm <span style={{ color: "#6cb5a9" }}>Ranjeet</span>
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" } }}
          >
            I'm Mern Stack Developer, capable of handling both frontend and
            backend development, ensuring seamless integration and performance.
          </Typography>
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 12,
            md: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: "30%",
                maxWidth: "60%",
                borderRadius: "8%",
                overflow:'hidden',
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: '1px 2px 30px #73ffea',
                transition:'0.3s ease'
              },
            }}
          >
            <img
              src={displayPicture}
              alt="Personal Picture"
              style={{
                width:'100%',
                backgroundSize: "contain",
                cursor: "pointer",
              }}
            />
          </Box>
        </Grid2>
      </Grid2>
    );
  };
  // console.log(backgroundPng);
  return (
    <>
      <Motion component={heroContainer} direction={{ x: 0, y: -200 }} />
    </>
  );
}
