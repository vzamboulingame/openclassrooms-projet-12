import { PieChart, Pie, ResponsiveContainer } from "recharts";

/**
 * ObjectiveChart component.
 *
 * @param {object} props - Component props.
 * @param {object} props.data - User data.
 * @returns {JSX.Element} - Rendered component.
 */
export default function ObjectiveChart(props) {
  const score = props.data.score || props.data.todayScore;
  const data = [
    {
      value: parseFloat(score) * 100,
      fill: "#E60000",
    },
    {
      value: 100 - parseFloat(score) * 100,
      fill: "#FFFFFF",
    },
  ];
  const scorePercentage = data[0].value;

  return (
    <ResponsiveContainer width="90%" height="90%">
      <PieChart>
        <text
          x={20}
          y={30}
          textAnchor="left"
          style={{
            fontSize: "1.8rem",
            fontWeight: 500,
            fill: "#000000",
          }}
        >
          Score
        </text>
        <Pie
          data={data}
          dataKey="value"
          nameKey="score"
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="70%"
          cornerRadius="50%"
          startAngle={-270}
          endAngle={90}
        />
        <text
          x="50%"
          y="42%"
          textAnchor="middle"
          style={{ fill: "#282D30", fontSize: "2.6rem", fontWeight: "700" }}
        >
          {scorePercentage} %
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          style={{ fill: "#74798C", fontSize: "1.6rem", fontWeight: "500" }}
        >
          de votre
        </text>
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          style={{ fill: "#74798C", fontSize: "1.6rem", fontWeight: "500" }}
        >
          objectif
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}
