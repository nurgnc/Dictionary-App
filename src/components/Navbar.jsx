import { Container, Grid, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

function Navbar() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <div className="navbar">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <ThemeProvider theme={darkTheme}>
            <div>Dict</div>
          </ThemeProvider>
        </Grid>
      </Container>
    </div>
  );
}

export default Navbar;
