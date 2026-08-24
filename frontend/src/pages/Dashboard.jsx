import StatCard from "../components/StatCard";

function Dashboard() {

    const stats = [
        {
            title: "Open Tickets",
            value: 24
        },
        {
            title: "Overdue",
            value: 8
        },
        {
            title: "Completed",
            value: 38
        }
    ];

    return (
        <div className="dashboard">

            <h1>Dashboard</h1>
            <p>Overview of your business operations.</p>

            <div className="stats-container">
                {stats.map((stat) => (
                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                    />
                ))}
            </div>

        </div>
    );
}

export default Dashboard;