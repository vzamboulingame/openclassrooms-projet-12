import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "./fetchData";

export const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataContextProvider(props) {
  const { userId } = useParams();

  const apiUrl = "http://localhost:3500";
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
