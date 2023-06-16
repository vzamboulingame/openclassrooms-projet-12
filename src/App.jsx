import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/style.scss";

/**
 * Main App component.
 *
 * @param {void}
 * @returns {JSX.Element} Rendered component.
 */
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
