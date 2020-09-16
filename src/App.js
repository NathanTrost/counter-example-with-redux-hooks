import React from "react";
import CounterWithHooks from "./components/Counter";
import SetTimeWithLegacyRedux from "./components/SetTimeWithLegacyRedux";

function App() {
  return (
    <div className="App" style={{ margin: "30px" }}>
      <CounterWithHooks />
      <SetTimeWithLegacyRedux />
    </div>
  );
}

export default App;
