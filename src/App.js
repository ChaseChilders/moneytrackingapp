import "./App.css";
import Moneyform from "./components/Moneyform.jsx";
// import Piechart from "./components/Piechart.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Money Tracking App</h1>
        <Moneyform />
        {/* <Piechart /> */}
      </header>
    </div>
  );
}

export default App;
