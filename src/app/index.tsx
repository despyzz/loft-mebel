import React from 'react';
import './styles/index.scss';
import AppRouter from "./providers/AppRouter/ui/AppRouter";
import Header from "widgets/Header";
import Footer from "widgets/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter/>
      <Footer className="Footer" />
    </div>
  );
}

export default App;