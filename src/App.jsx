import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "./utils/DataContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/user/:userId"
          element={
            <DataContextProvider>
              <Dashboard />
            </DataContextProvider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
