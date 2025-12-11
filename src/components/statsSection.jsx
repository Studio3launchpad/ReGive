import "./../styles/stats.css";
import StatCard from "../components/statCard.jsx";

export default function StatsSection() {
  // Array of stats to display
  const statsData = [
    { title: "Users", value: "1,200" },
    { title: "Revenue", value: "$5,000" },
    { title: "Orders", value: "320" },
    { title: "Reviews", value: "150" },
  ];

  return (
    <section className="stats-container">
      {statsData.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </section>
  );
}
