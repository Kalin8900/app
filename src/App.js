import React from 'react';
import styled from "styled-components";
import {HeroPage} from "./pages/HeroPage"
import {AboutMePage} from "./pages/AboutMePage";

const elem1 = <HeroPage />
const elem2 = <AboutMePage />

function App() {
  return (
      [
          elem1,
          elem2
      ]
        // AboutMePage()
    );
}

export default App;
