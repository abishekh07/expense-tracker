import "./ChartBar.css";

function ChartBar({ value, maxValue, label }) {
  let barFillLevel = "0%";

  if (maxValue) {
    barFillLevel = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillLevel }}></div>
      </div>

      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
