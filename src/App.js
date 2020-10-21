import { Button, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import MyCard from "./components/MyCard";
import Navbar from "./components/Navbar";
import { getMatches } from "./api/Api";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
      })
      .catch((error) => alert("could not load data"));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Typography variant="h3" style={{ marginTop: 20 }}>
        Welcome to my Live Score APP
      </Typography>

      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {matches.map((match) => (
            <Fragment key={match.unique_id}>
              {match.type == "Twenty20" ? <MyCard match={match} /> : ""}
            </Fragment>
          ))}
        </Grid>
        <Grid></Grid>
      </Grid>
      <div
        style={{
          backgroundColor: "#2a3eb1",
          width: "100vw",
          marginTop: "10px",
        }}
      >
        <h2>DevelopBy : DJ</h2>
      </div>
      {/* <Button variant="outlined" color="primary">Click here</Button> */}
    </div>
  );
}

export default App;
