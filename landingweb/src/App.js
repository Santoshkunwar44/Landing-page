import React from "react";
import "./App.css"
import Body from "./components/Body/Body";
import InfoContainer from "./components/Detailcontainer/InfoContainer";
import Header from "./components/Header/Header"
function App() {
  return (
    <div className="root" >
      <Header />
      <Body/>
      <InfoContainer/>
    </div>
  );
}

export default App;
