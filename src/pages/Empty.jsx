import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

/**
 * Empty component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Empty() {
  return (
    <div>
      <Header />
      <main className="main">
        <Sidebar />
        <section className="empty"></section>
      </main>
    </div>
  );
}
