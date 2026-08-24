import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="app-layout">

            <aside className="sidebar">
                <h2>Business Ops</h2>

                <nav>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/tickets">Tickets</a>
                    <a href="/employees">Employees</a>
                </nav>
            </aside>

            <main className="main-content">
                <header className="navbar">
                    <span>Business Operations</span>
                    <span>Mario</span>
                </header>

                <section className="page-content">
                    <Outlet />
                </section>
            </main>

        </div>
    );
}

export default Layout;