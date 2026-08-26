import { useState } from "react";
import { Link } from "react-router-dom";
import tickets from "../data/tickets";

function Tickets() {

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    const filteredTickets = tickets.filter((ticket) => {

        const matchesSearch =
            ticket.title.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "ALL" ||
            ticket.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div>

            <h1>Tickets</h1>

            <p>Manage and monitor internal service requests.</p>
            <Link
                to="/tickets/new"
                className="create-ticket-button"
            >
              + Create Ticket
            </Link>

            <div className="ticket-filters">

                <input
                    type="text"
                    placeholder="Search tickets..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                >
                    <option value="ALL">All Statuses</option>
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                </select>

            </div>

            <div className="tickets-list">

                {filteredTickets.map((ticket) => (

                    <Link
                        to={`/tickets/${ticket.id}`}
                        className="ticket-row"
                        key={ticket.id}
                    >

                        <div>
                            <h3>{ticket.title}</h3>
                            <p>
                                #{ticket.id} · {ticket.department}
                            </p>
                        </div>

                        <span>{ticket.priority}</span>

                        <span>{ticket.status}</span>

                        <span>{ticket.assignedTo}</span>

                    </Link>

                ))}

            </div>

        </div>
    );
}

export default Tickets;