/**
 * KeyMetrics component.
 *
 * @param {object} props - Component props.
 * @param {string} props.icon - KeyMetrics Icon URL.
 * @param {string} props.value - KeyMetrics Value.
 * @param {string} props.name - KeyMetrics Name.
 * @returns {JSX.Element} - Rendered component.
 */
export default function KeyMetrics(props) {
  return (
    <div className="keymetrics">
      <img className="keymetrics-icon" src={props.icon} alt="Keymetrics icon" />
      <div className="keymetrics-info">
        <p className="keymetrics-value">{props.value}</p>
        <p className="keymetrics-name">{props.name}</p>
      </div>
    </div>
  );
}
