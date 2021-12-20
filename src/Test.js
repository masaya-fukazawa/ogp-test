import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";


function Test() {
  return (
    <div className="App">
      <Helmet title="Test" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test page.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={`/`}>to App</Link>
      </header>
    </div>
  );
}

export default Test;
