import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
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
    setCharts(chartsJson.data); // Si tienes varios, filtra por proyecto si es necesario
  }, []);

  if (!project) return <div>Cargando...</div>;

  return (
    <div style={{ padding: 20 }}>
      <Header name={project.name} mainImage={project.mainImage} price={project.price} />
      <ProjectDescription description={project.descriptions.es} />
      <ProjectMap latitude={project.latitude} longitude={project.longitude} name={project.name} />
      <PerformanceChart data={charts} />
      <PromoterList promoters={project.promoters} />
    </div>
  );
};

export default App;
