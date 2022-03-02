import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
// components
import Navbar from "../components/Navbar";
import FormField from "../components/FormField";

function Home() {
  const [word, setWord] = useState("live");
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
      }}
    >
      <Navbar />
      <FormField />
      <Container maxWidth="lg">dict</Container>
    </div>
  );
}

export default Home;
