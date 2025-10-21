import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import './App.css';
import "leaflet/dist/leaflet.css";
import Header from "./components/Header";
import ProjectDescription from "./components/ProjectDescription";
import ProjectMap from "./components/ProjectMap";
import PerformanceChart from "./components/PerformanceChart";
import PromoterList from "./components/PromoterList";
import projectsJson from "./assets/data/projects.json";
import projectDetailsJson from "./assets/data/projectDetails.json";
import chartsJson from "./assets/data/charts.json";

const App: React.FC = () => {
  const [project, setProject] = useState<any>(null);
  const [charts, setCharts] = useState<any[]>([]);

  useEffect(() => {
    setProject(projectDetailsJson);
    setCharts(chartsJson.data);
  }, []);

  if (!project) return <div>Cargando...</div>;

  return (
    <Card 
      sx={{
        mx: { xs: 1, sm: 3, md: 6, lg: 12 },
        my: 3,
        p: { xs: 1, sm: 3, md: 5 },
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Header name={project.name} mainImage={project.mainImage} price={project.price} />
        <ProjectDescription description={project.descriptions.es} />
        <ProjectMap latitude={project.latitude} longitude={project.longitude} name={project.name} />
        <PerformanceChart data={charts} />
        <PromoterList promoters={project.promoters} />
      </CardContent>
    </Card>
  );
};

export default App;
