import * as React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import { GitHub } from "@mui/icons-material";


const ProjectCard = ({ title, description, tags, img, source, liveVersion }) => {
    return (
        // May do horizontal scroll in future
        <Card sx={{ /* transform: 'rotate(90deg)', transformOrigin: 'right top',*/ maxHeight: 550, maxWidth: 375, margin: "1rem", borderRadius: 8 }}>
            <CardActionArea>
                <CardMedia component="img" image={img} sx={{height: '275px'}} />
                    <CardContent sx={{minHeight: 100}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    mx: "auto",
                    mb: 3,
                }}
                >
                <Button /* Github Link */
                    size="small"
                    style={{ backgroundColor: "rgba(0,199,255,255)" }}
                    variant="contained"
                    href={source}
                    target='_blank'
                    className="nav"
                >
                   <GitHub /> Source Code
                </Button>
                <Button /* Live Deployment Link */
                    size="small"
                    style={{ backgroundColor: "rgba(0,199,255,255)" }}
                    variant="contained"
                    href={liveVersion}
                    target='_blank'
                    className="nav"
                >
                    Live Version
                </Button>
                </Box>

                <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                    mb: 2,
                }}
                >
                {tags.map((tag) => (
                    <Chip label={tag} variant="outlined" key={tag} />
                ))}
                </Box>
            </CardActions>
        </Card>
    );
};
  
  export default ProjectCard;