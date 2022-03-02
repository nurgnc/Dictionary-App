import { Container, Grid, TextField } from "@material-ui/core";

function FormField() {
  return (
    <div className="form-field">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="theme-button">
            <TextField id="standard-basic" label="Standard" />
          </div>
          <div>
            <TextField
              select
              label="Language"
              value={category}
              onChange={(e) => handleChange(e)}
              className="select"
            >
              {countries.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default FormField;
