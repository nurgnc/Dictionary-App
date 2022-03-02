import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@material-ui/core";
// components
import Navbar from "../components/Navbar";
import FormField from "../components/FormField";
import MeaningCard from "../components/MeaningCard";

function Home() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage] = useState("en");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, language]);

  console.log(meanings);
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        backgroundColor: "#282c34",
        color: "white",
        transition: "all 0.5s linear",
        padding: "2rem 0",
      }}
    >
      <Navbar />
      <FormField
        language={language}
        setLanguage={setLanguage}
        word={word}
        setWord={setWord}
      />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {meanings.map((mean, index) => (
            <Grid item xs={3} key={index}>
              <MeaningCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
