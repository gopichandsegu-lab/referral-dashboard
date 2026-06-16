import "./StatsCards.css"

const stats = [
  { title: "Total Balance", value: "$9568.00" },
  { title: "Discount Percentage", value: "5%" },
  { title: "Total Referral", value: "300" },
  { title: "Discount Amount", value: "$300" },
  { title: "Commission Amount", value: "$465.00" },
  { title: "Total Earning", value: "$158.00" },
  { title: "Commission Discount", value: "40%" },
  { title: "Total Bank Transfer", value: "$534.00" }
]

function StatsCards() {
  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div className="stat-card" key={item.title}>
          <div className="stat-icon">?</div>
          <div>
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
