import { Route, Routes } from "react-router-dom";
import "./App.css";
import Analytics from "./Components/Analytics";
import Appointment from "./Components/Appointement";
import Appointments from "./Components/Appointments";
import Book from "./Components/Book";
import DocHistory from "./Components/DocHistory";
import Feedback from "./Components/Feedback";
import Navbar from "./Components/Navbar";
import PatientDetailsPage from "./Components/PatientDetailsPage";
import Profile1 from "./Components/Profile1";
import DoctorDashboarad from "./DoctorDashboard";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="m-0 p-0 bg-neutral-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="book" element={<Book />} />
        <Route path="doctor" element={<DoctorDashboarad />}>
          <Route path="" element={<Profile1 />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="history" element={<DocHistory />} />
          <Route
            path="history/patient-details/:id"
            element={<PatientDetailsPage />}
          />
          {/* <Route path="calender" element={<Calender />} /> */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
