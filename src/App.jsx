import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Empty from "./components/Empty";
import "./styles/style.scss";

/**
 * Main App component.
 *
 * @param {void}
 * @returns {JSX.Element} Rendered component.
 */

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Empty />} />
          <Route path="/user/:userId" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
