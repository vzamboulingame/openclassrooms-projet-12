import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

/**
 * NotFound component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="main">
        <Sidebar />
        <section className="notfound">
          <p className="notfound-code">Erreur 404</p>
          <p className="notfound-message">
            La page que vous demandez n'existe pas.
          </p>
        </section>
      </main>
    </div>
  );
}
