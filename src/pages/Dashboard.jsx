import { useDataContext } from "../utils/DataContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import KeyMetrics from "../components/KeyMetrics";
import Empty from "./Empty";
import ActivityChart from "../components/ActivityChart";
import ObjectiveChart from "../components/ObjectiveChart";
import PerformanceChart from "../components/PerformanceChart";
import AvgSessionsChart from "../components/AvgSessionsChart";
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
              <ActivityChart data={activityData} />
            </div>
            <div className="dashboard-charts-sessions dashboard-charts-all">
              <AvgSessionsChart data={avgSessionsData} />
            </div>
            <div className="dashboard-charts-performance dashboard-charts-all">
              <PerformanceChart data={performanceData} />
            </div>
            <div className="dashboard-charts-objective dashboard-charts-all">
              <ObjectiveChart data={userData} />
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
