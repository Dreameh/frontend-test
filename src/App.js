import React, { useEffect, useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './App.css';
import { CardGroup } from "react-bootstrap";
import ProjectCard from './components/ProjectCard';
import loadingCards from './components/loadingCards';

const API_URL = window.API_URL;

const List = (props) => {
  const { projects } = props;
  if (!projects || projects.length === 0) return <p>No projects, for some reason.</p>;

  return (
    <CardGroup>
      {projects.map((project) => {
        return (
          <ProjectCard title={project.title} text={project.text} created={project.created_at} />
        );
      })}
    </CardGroup>
  );
};

const App = () => {
  const ListLoading = loadingCards(List);
  const [ appState, setAppState ] = useState({
    loading: true,
    projects: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = API_URL || "http://localhost:8080/projects";
    fetch (apiUrl)
      .then(res => res.json())
      .then(projects => {
        setAppState({ loading: false, projects: projects });
      })
  }, [setAppState]);

  return (
    <Container className="p-3 bg-dark">
      <Jumbotron className="bg-dark">
        <h1 className={"header text-white"}>Example React Website for Thesis Project</h1>
      </Jumbotron>
      <h2 color="#a9a9b3">Proof of Concept Technologies</h2>
      <ListLoading isLoading={appState.loading} projects={appState.projects} />
    </Container>
  );
}

export default App;
