import './App.css';
import Home from "./Home";
import About from "./About";
import Uses from "./Uses";
import Movies from './Movies';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './Globalstyle';
import Projects from './projects';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const theme = {
    colors: {
      body: "rgb(255,255,255)",
      helper: "RGB(147, 112, 219)",
      bg: "rgb(0,0,0)",
      btn: "RGB(147, 112, 219)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/uses" element={<Uses />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Analytics/>
    </ThemeProvider>
  );
};

export default App;