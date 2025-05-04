import { MantineProvider, Slider, Text } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <MantineProvider>
        <HomePage />
      </MantineProvider>
    </>
  );
}

export default App;
