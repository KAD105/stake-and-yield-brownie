import { ChainId, DAppProvider } from "@usedapp/core";
import { Header } from "./components/Header";

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Kovan],
      }}
    >
      <Header />
    </DAppProvider>
  );
}

export default App;
