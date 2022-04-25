import React, { FC, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { SomeConvenientWidget } from "./components/SomeConvenientWidget";

import "./App.css";

const App: FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <SomeConvenientWidget />
    </div>
  );
};

export default App;
