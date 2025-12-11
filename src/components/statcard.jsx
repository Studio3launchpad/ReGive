import "./../styles/stats.css";

export default function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}
