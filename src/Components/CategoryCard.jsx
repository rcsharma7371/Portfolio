import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import "./CategoryCard.css";

export default function CategoryCard({ data }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 5,
        background: "radial-gradient(circle, rgb(0 3 255), transparent 65%)",
        backgroundSize: "1% 145%",
        backgroundPosition: "center",
        height: "auto",
        width: "100%",
        flexWrap:'wrap',
        gap:'10px'
      }}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          sx={{
            minWidth:230,
            maxWidth:270,
            minHeight: 250,
            backgroundColor:'#151030',
            borderRadius: "3%",
            color:'white'
          }}
        >
          <CardMedia
            sx={{ height: 130, backgroundSize: "contain" }}
            image={item.imgLink}
            title={item.imgLink}
          />
          <CardContent
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom variant="h5">{item.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
