// import { createTheme } from "@mui/system";
import React, { Component } from "react";
import SectionTabs from "./components/Sections";
// import { ThemeProvider } from "@mui/private-theming";

// const theme = createTheme({
//   typography: {
//     fontFamily: "Red Hat Display",
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverides: `
//       @font-face {
//         font-family: 'Red Hat Display';
//         font-style: normal;
//         font-display: swap;
//         font-weight: 400;
//         src: url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300&display=swap');
//         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//       }`,
//     },
//   },
// });
class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="heroImage">
          <img src="../public/download.jpeg" alt="stock life coach" />
        </div>
        <SectionTabs></SectionTabs>
      </div>
    );
  }
}

export default App;
