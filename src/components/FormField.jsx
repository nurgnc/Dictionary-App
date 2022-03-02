import { Container, Grid, TextField, MenuItem } from "@material-ui/core";
import languages from "../data/languages";

function FormField({ language, setLanguage, word, setWord }) {
  console.log(word);
  return (
    <div className="form-field">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField
            id="standard-basic"
            label="Search a word"
            className="search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="select"
          >
            {languages.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Container>
    </div>
  );
}

export default FormField;
