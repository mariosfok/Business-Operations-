import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import tickets from "../data/tickets";

function TicketDetails() {

    const { id } = useParams();

    const ticket = tickets.find(
        (ticket) => ticket.id === Number(id)
    );

    const [status, setStatus] = useState(ticket?.status || "");
    const [priority, setPriority] = useState(ticket?.priority || "");
    const [assignedTo, setAssignedTo] = useState(ticket?.assignedTo || "");

    if (!ticket) {
        return (
            <div>
                <h1>Ticket not found</h1>

                <Link to="/tickets">
                    Back to Tickets
                </Link>
            </div>
        );
    }

    return (
        <div className="ticket-details">

            <Link to="/tickets" className="back-link">
                ← Back to Tickets
            </Link>

            <h1>{ticket.title}</h1>

            <p>Ticket #{ticket.id}</p>

            <div className="ticket-info">

                <div>
                    <strong>Department</strong>
                    <p>{ticket.department}</p>
                </div>

                <div>
                    <strong>Status</strong>

                    <select
                        value={status}
                        onChange={(event) =>
                            setStatus(event.target.value)
                        }
                    >
                        <option value="OPEN">Open</option>
                        <option value="IN_PROGRESS">
                            In Progress
                        </option>
                        <option value="COMPLETED">
                            Completed
                        </option>
                    </select>
                </div>

                <div>
                    <strong>Priority</strong>

                    <select
                        value={priority}
                        onChange={(event) =>
                            setPriority(event.target.value)
                        }
                    >
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                    </select>
                </div>

                <div>
                    <strong>Assigned To</strong>

                    <select
                        value={assignedTo}
                        onChange={(event) =>
                            setAssignedTo(event.target.value)
                        }
                    >
                        <option value="George">George</option>
                        <option value="Maria">Maria</option>
                        <option value="Alex">Alex</option>
                    </select>
                </div>

            </div>

        </div>
    );
}

export default TicketDetails;