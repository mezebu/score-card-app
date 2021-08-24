import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import axios from "axios";
import "normalize.css";

import styles from "./App.module.css";

import { Scores, NavBar } from "./component";

const url = "https://5f5dec4e8b224700167c53f1.mockapi.io/api/v1/results";

const App = () => {
  const [scores, setScores] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const getScores = async () => {
      try {
        const { data } = await axios.get(url);
        setScores(data);
      } catch (error) {
        console.log(error);
      }
    };
    getScores();
  }, []);

  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.spacing} />
      <Container>
        <Grid container spacing={2}>
          {scores.map(({ id, home, away, data, image, referee, stadium }) => (
            <Scores
              key={id}
              id={id}
              expanded={expanded === id}
              setExpanded={setExpanded}
              home={home}
              away={away}
              data={data}
              image={image}
              referee={referee}
              stadium={stadium}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
