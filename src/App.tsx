import "./styles.css";

import Nav from "./Components/Nav";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <AllRoutes />
      </header>
    </div>
  );
}

export default App;
