import * as React from "react";
import { Box, Typography } from "@mui/material";
import { project_list } from "./project_list";
import ProjectCard from "./ProjectCard";
// import Stack from "./Stack";

export default function Projects () {
  return (
    <Box id='projects' sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="experience">
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >
        Here are some of the projects I've {" "}
        <span style={{ color: "rgba(0,199,255,255)" }}>built</span> so far
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
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
      </Box>

      {/* <Stack /> */}
    </Box>
  );
};
