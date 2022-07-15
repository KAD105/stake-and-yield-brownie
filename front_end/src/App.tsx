import "./App.css";
import { ChainId, DAppProvider } from "@usedapp/core";

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Kovan],
      }}
    ></DAppProvider>
  );
}

export default App;
