import React from 'react';
import './styles/index.scss';
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ErrorPage} from "pages/ErrorPage";
import {Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/sdfjldsjflds"}>Error</Link>
      </div>
      <Routes>
        <Route path={"/about"} element={<AboutPage />}/>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;