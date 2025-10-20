import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Project {
  id: number;
  name: string;
  category: string;
  progress: number;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("assets/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      {projects.map((p) => (
        <Card key={p.id} sx={{ margin: 2 }}>
          <CardContent>
            <Typography variant="h6">{p.name}</Typography>
            <Typography variant="body2">Categoría: {p.category}</Typography>
            <Typography variant="body2">Progreso: {p.progress}%</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
