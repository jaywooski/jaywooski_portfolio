import * as React from "react";
import { Box, Typography } from "@mui/material";
import { project_list } from "./project_list";
import ProjectCard from "./ProjectCard";
import { styled } from "@mui/material";
// import Stack from "./Stack";

export default function Projects () {


  // var myIndex = 0;
  // carousel();

  // function carousel() {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";  
  //   }
  //   myIndex++;
  //   if (myIndex > x.length) {myIndex = 1}    
  //   x[myIndex-1].style.display = "block";  
  //   setTimeout(carousel, 2000); // Change image every 2 seconds
  // }


  const CustomBox = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    background: 'radial-gradient(#021a3d, #0a5acf)',
    maxHeight: 548,
    overflow: 'scroll',
    overflowX: 'hidden',
    mx: 'auto',
    borderRadius: 8,
    [theme.breakpoints.down("sm")]: {
      height: '570px',
      mx: 'auto',
    },
}));

  return (
    <Box id='projects' sx={{ maxWidth: "1300px", mx: "auto", my: 12, }} >
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >
        Here are some of the projects I've {" "}
        <span style={{ color: "rgba(0,199,255,255)" }}>built</span> so far
      </Typography>
      <CustomBox
        sx={{
          
        }}
      >
        {project_list.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            img={project.image}
          />
        ))}
      </CustomBox>

      {/* <Stack /> */}
    </Box>
  );
};
