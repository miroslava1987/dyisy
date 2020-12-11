import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Header } from "./commons/Header";
import { Navigation } from "./pages/Navigation";
import {
  BackgroundContainer,
  BackgroundOverlay,
} from "./styles/GeneralStyledComponents";
import "./styles/styles.scss";
import { getAllData } from "./store/asyncActions";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const [dataLoad, setDataLoad] = useState(false);
  useEffect(() => {
    dispatch(getAllData()).then(() => setDataLoad(true));
  }, [dispatch]);

  return (
    <BackgroundContainer>
      <BackgroundOverlay>
        <Header />
        <ScrollToTop />
        {dataLoad && <Navigation />}
      </BackgroundOverlay>
    </BackgroundContainer>
  );
}

export default App;
