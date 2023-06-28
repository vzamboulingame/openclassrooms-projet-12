import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * ActivityChart component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function ActivityChart(props) {
  const activityData = props.data;
  const activityDayNumbers = () => {
    return activityData.sessions.map((session, index) => index + 1);
  };

  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart data={activityData.sessions} barGap={12} barSize={8}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={activityDayNumbers} />
        <YAxis yAxisId="kilogram" orientation="right" stroke="#282D30" />
        <YAxis
          yAxisId="calories"
          orientation="left"
          stroke="#E60000"
          hide="true"
        />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          wrapperStyle={{
            paddingBottom: "2em",
          }}
        />
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#282D30"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
