import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import PanelRecordAudio from "./Components/AudioComponents/PanelRecordAudio";
import Template from "./Components/CommonComponents/Template";

function App() {
  return (
    <div className="App">
      <Template>
        <PanelRecordAudio></PanelRecordAudio>
      </Template>
    </div>
  );
}

export default App;
