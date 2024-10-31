import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./CategoryCard.css";

export default function CategoryCard({ data }) {
  // const cardContainerStyle = {
  //   display: "flex",
  //   alignItems: "center",
  //   gap: "10px",
  //   background: "radial-gradient(circle , rgb(0 3 255), transparent 65%)",
  //   width: "100%",
  //   height: "300px",
  //   justifyContent:'space-evenly',
    
  // };

  return (
    <div className='cardContainer'>
      {data.map((item, index) => (
        <Card className="cardStyles"  key={index} sx={{minWidth:270,maxWidth:480,minHeight:270,}}>
          <CardMedia
            sx={{ height: 130,backgroundSize:'contain' }}
            image={item.imgLink}
            title={item.imgLink}
          />
          <CardContent sx={{display:"flex",textAlign:'center',justifyContent:'center'}}>
            <Typography gutterBottom variant="h5" component="div" >
              {item.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
