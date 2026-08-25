import { useParams } from "react-router-dom";
import tickets from "../data/tickets";

function TicketDetails() {

    const { id } = useParams();

    const ticket = tickets.find(
        (ticket) => ticket.id === Number(id)
    );

    if (!ticket) {
        return (
            <div>
                <h1>Ticket not found</h1>
            </div>
        );
    }

    return (
        <div className="ticket-details">

            <h1>{ticket.title}</h1>

            <p>Ticket #{ticket.id}</p>

            <div className="ticket-info">

                <div>
                    <strong>Department</strong>
                    <p>{ticket.department}</p>
                </div>

                <div>
                    <strong>Priority</strong>
                    <p>{ticket.priority}</p>
                </div>

                <div>
                    <strong>Status</strong>
                    <p>{ticket.status}</p>
                </div>

                <div>
                    <strong>Assigned To</strong>
                    <p>{ticket.assignedTo}</p>
                </div>

            </div>

        </div>
    );
}

export default TicketDetails;