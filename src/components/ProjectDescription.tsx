import React from "react";
import { Typography, Box } from "@mui/material";

interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>Descripción del proyecto</Typography>
      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: description }} />
    </Box>
  );
};

export default ProjectDescription;
