import React from "react";

import "./App.css";
import Colors from "./Colors";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <Colors hue={212} sat={100} light={27} />
      </div>
      <div style={{ flex: 1 }}>
        <Colors hue={218} sat={48} light={70} />
      </div>
      <div style={{ flex: 1 }}>
        <Colors hue={188} sat={96} light={46} />
      </div>
      <div style={{ flex: 1 }}>
        <Colors hue={82} sat={36} light={39} />
      </div>
      <div style={{ flex: 1 }}>
        <Colors hue={62} sat={16} light={58} />
      </div>
      <div style={{ flex: 1 }}>
        <Colors hue={346} sat={83} light={38} />
      </div>
      <div style={{ flex: 1 }}>
        <Colors hue={352} sat={97} light={45} />
      </div>
    </div>
  );
}

export default App;
