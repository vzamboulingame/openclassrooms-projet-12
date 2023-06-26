import { useDataContext } from "../utils/DataContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import KeyMetrics from "./KeyMetrics";
import Empty from "./Empty";
import caloriesIcon from "../images/calories-icon.svg";
import glucidesIcon from "../images/glucides-icon.svg";
import lipidesIcon from "../images/lipides-icon.svg";
import proteinesIcon from "../images/proteines-icon.svg";

/**
 * Dashboard component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Dashboard() {
  const { userData, activityData, avgSessionsData, performanceData } =
    useDataContext();

  if (!userData || !activityData || !avgSessionsData || !performanceData)
    return <Empty />;

  return (
    <div>
      <Header />
      <main className="main">
        <Sidebar />
        <section className="dashboard">
          <div className="dashboard-header">
            <h1 className="dashboard-header-greeting">
              Bonjour{" "}
              <span className="dashboard-header-name">
                {userData.userInfos.firstName}
              </span>
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
              <KeyMetrics
                icon={caloriesIcon}
                name="Calories"
                value={userData.keyData.calorieCount}
              />
            </div>
            <div className="dashboard-charts-proteines dashboard-charts-all">
              <KeyMetrics
                icon={proteinesIcon}
                name="Proteines"
                value={userData.keyData.proteinCount}
              />
            </div>
            <div className="dashboard-charts-glucides dashboard-charts-all">
              <KeyMetrics
                icon={glucidesIcon}
                name="Glucides"
                value={userData.keyData.carbohydrateCount}
              />
            </div>
            <div className="dashboard-charts-lipides dashboard-charts-all">
              <KeyMetrics
                icon={lipidesIcon}
                name="Lipides"
                value={userData.keyData.lipidCount}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
