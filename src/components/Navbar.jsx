import { Container, Grid } from "@material-ui/core";

function Navbar() {
  return (
    <div className="navbar">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>Dict</div>
        </Grid>
      </Container>
    </div>
  );
}

export default Navbar;
