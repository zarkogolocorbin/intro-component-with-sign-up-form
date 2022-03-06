import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div>
          <button className="purpleBtn">
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </button>
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default App;
