import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponen";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent content="Pippo" buttonStyle={{ backgroundColor: "red", marginTop: "2rem" }} />
        <ImageComponent src="https://it.wikifur.com/w/images/thumb/e/e5/Goofy.png/404px-Goofy.png" alt="pippo" />
      </header>
    </div>
  );
}

export default App;
