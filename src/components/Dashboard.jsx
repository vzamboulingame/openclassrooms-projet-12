/**
 * Dashboard component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-header-greeting">
          Bonjour <span className="dashboard-header-name">Thomas</span>
        </h1>
        <p className="dashboard-header-message">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      <div className="dashboard-charts">
        <div className="dashboard-charts-activity dashboard-charts-all">
          Activity
        </div>
        <div className="dashboard-charts-sessions dashboard-charts-all">
          Average Sessions
        </div>
        <div className="dashboard-charts-performance dashboard-charts-all">
          Performance
        </div>
        <div className="dashboard-charts-objective dashboard-charts-all">
          Objective
        </div>
        <div className="dashboard-charts-calories dashboard-charts-all">
          Calories
        </div>
        <div className="dashboard-charts-proteines dashboard-charts-all">
          Proteines
        </div>
        <div className="dashboard-charts-glucides dashboard-charts-all">
          Glucides
        </div>
        <div className="dashboard-charts-lipides dashboard-charts-all">
          Lipides
        </div>
      </div>
    </section>
  );
}
