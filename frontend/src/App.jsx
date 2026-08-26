import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketDetails from "./pages/TicketDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Employees from "./pages/Employees";
import Layout from "./components/Layout";
import CreateTicket from "./pages/CreateTicket";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route element={<Layout />}>


                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/tickets" element={<Tickets />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/tickets/:id" element={<TicketDetails />} />
                    <Route path="/tickets/new" element={<CreateTicket />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;