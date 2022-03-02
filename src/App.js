import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";

function App() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
