import { FaRocketchat } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <FaRocketchat style={{ transform: "scale(7)" }} />
      </div>
      <h1>Welcome to Rocket.chat</h1>
      <div className="card">
        <p>
          This is a template for creating a custom Rocket.chat app using Vite
          and React.
        </p>
      </div>
      <p className="read-the-docs">
        Read the{" "}
        <a
          href="https://rocket.chat/docs/developer-guides/developing-apps/getting-started"
          target="_blank"
          rel="noreferrer"
        >
          Rocket.chat documentation
        </a>{" "}
        to learn more about creating
      </p>
      <div className="rocketchat-iframe">
        <iframe
          src="http://100.26.241.223:3000"
          width="1600"
          height="1000"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
}

export default App;
