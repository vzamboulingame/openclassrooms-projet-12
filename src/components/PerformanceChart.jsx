import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

/**
 * PerformanceChart component.
 *
 * @param {object} props - Component props.
 * @param {object} props.data - Performance data.
 * @returns {JSX.Element} - Rendered component.
 */
export default function PerformanceChart(props) {
  const performanceData = props.data.data;

  const kindMapping = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const formattedData = performanceData
    .map((dataPoint) => ({
      ...dataPoint,
      kind: kindMapping[dataPoint.kind],
    }))
    .reverse();

  return (
    <ResponsiveContainer width="90%" height="90%">
      <RadarChart data={formattedData} outerRadius="70%">
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: "1.3rem", fontWeight: "500" }}
          stroke="#FFFFFF"
        />
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <Radar dataKey="value" fill="#FF0101" fillOpacity="70%" />
      </RadarChart>
    </ResponsiveContainer>
  );
}
