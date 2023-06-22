import Header from "./Header";
import Sidebar from "./Sidebar";

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
