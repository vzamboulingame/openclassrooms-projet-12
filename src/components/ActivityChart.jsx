/**
 * ActivityChart component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function ActivityChart(props) {
  const activityData = props.data;

  return (
    <div>
      <p>{activityData.userId}</p>
    </div>
  );
}
