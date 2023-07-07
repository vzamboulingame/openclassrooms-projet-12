import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * AvgSessionsChart component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */

export default function AvgSessionsChart(props) {
  const avgSessionsData = props.data.sessions;
  const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];

  const renderTooltip = ({ active, payload }) => {
    if (active && payload.length) {
      return (
        <div
          style={{
            background: "#FFFFFF",
            color: "#000000",
            padding: "1em 1em",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          <p>{payload[0].value} min</p>
        </div>
      );
    }
  };

  return (
    <ResponsiveContainer width="90%" height="90%">
      <LineChart
        data={avgSessionsData}
        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
      >
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
          </linearGradient>
        </defs>
        <text
          x={10}
          y={30}
          textAnchor="left"
          style={{
            fontSize: "1.8rem",
            fontWeight: 500,
            fill: "#FFFFFF",
            fillOpacity: "50%",
          }}
        >
          Durée moyenne des sessions
        </text>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF", fillOpacity: "50%" }}
          stroke="#FFFFFF"
          tickMargin={10}
          tickFormatter={(day) => dayLetters[day - 1]}
        />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={["dataMin -20", "dataMax + 50"]}
        />
        <Line
          dataKey="sessionLength"
          type="natural"
          stroke="url(#lineGradient)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{
            stroke: "#FFFFFF",
            strokeOpacity: "50%",
            strokeWidth: 10,
          }}
        />
        <Tooltip
          content={renderTooltip}
          cursor={{
            stroke: "#000000",
            strokeOpacity: "10%",
            strokeWidth: "20%",
            height: "100%",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
