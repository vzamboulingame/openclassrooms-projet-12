import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "./fetchData";
import { apiUrl } from "./apiUrl";

/**
 * Data context to hold data related to the user.
 * @typedef {Object} DataContextValue
 * @property {Object} userData - The user data.
 * @property {Object} activityData - The activity data.
 * @property {Object} avgSessionsData - The average sessions data.
 * @property {Object} performanceData - The performance data.
 */

/**
 * Data context creation.
 * @type {React.Context<DataContextValue>}
 */
export const DataContext = createContext();

/**
 * Custom hook to access the data context.
 * @returns {DataContextValue} The data context value.
 */
export function useDataContext() {
  return useContext(DataContext);
}

/**
 * Provider component for the data context.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements.
 * @returns {JSX.Element} The data context provider component.
 */
export function DataContextProvider(props) {
  const { userId } = useParams();

  const userUrl = `${apiUrl}/user/${userId}`;
  const activityUrl = `${apiUrl}/user/${userId}/activity`;
  const avgSessionsUrl = `${apiUrl}/user/${userId}/average-sessions`;
  const performanceURl = `${apiUrl}/user/${userId}/performance`;

  const [userData, setUserData] = useState();
  const [activityData, setActivityData] = useState();
  const [avgSessionsData, setAvgSessionsData] = useState();
  const [performanceData, setPerformanceData] = useState();

  useEffect(() => {
    fetchData(userUrl).then((data) => setUserData(data));
    fetchData(activityUrl).then((data) => setActivityData(data));
    fetchData(avgSessionsUrl).then((data) => setAvgSessionsData(data));
    fetchData(performanceURl).then((data) => setPerformanceData(data));
  }, [userUrl, activityUrl, avgSessionsUrl, performanceURl]);

  return (
    <DataContext.Provider
      value={{
        userData,
        activityData,
        avgSessionsData,
        performanceData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
