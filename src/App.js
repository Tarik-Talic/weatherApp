import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";

import { useEffect, useState } from "react";

function App() {
  const handleSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="App">
      <Header />
      <Search onSearchChange={handleSearchChange} />
      <Card />
    </div>
  );
}

export default App;
