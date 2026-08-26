import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTicket() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("IT");
    const [priority, setPriority] = useState("MEDIUM");
    const [assignedTo, setAssignedTo] = useState("George");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        const newTicket = {
            title,
            department,
            priority,
            assignedTo,
            description,
            status: "OPEN"
        };

        console.log("New ticket:", newTicket);

        navigate("/tickets");
    };

    return (
        <div>

            <h1>Create New Ticket</h1>

            <p>Create a new internal service request.</p>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Title</label>

                    <input
                        type="text"
                        value={title}
                        onChange={(event) =>
                            setTitle(event.target.value)
                        }
                        placeholder="Enter ticket title"
                        required
                    />
                </div>

                <div>
                    <label>Department</label>

                    <select
                        value={department}
                        onChange={(event) =>
                            setDepartment(event.target.value)
                        }
                    >
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                    </select>
                </div>

                <div>
                    <label>Priority</label>

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
                    <label>Assigned To</label>

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

                <div>
                    <label>Description</label>

                    <textarea
                        value={description}
                        onChange={(event) =>
                            setDescription(event.target.value)
                        }
                        placeholder="Describe the problem..."
                        rows="5"
                    />
                </div>

                <button type="submit">
                    Create Ticket
                </button>

            </form>

        </div>
    );
}

export default CreateTicket;