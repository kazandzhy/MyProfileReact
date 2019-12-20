import React from "react";
import Layout from "../components/Layout/Layout";
import MainContent from "../components/MainContent/MainContent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <MainContent />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
