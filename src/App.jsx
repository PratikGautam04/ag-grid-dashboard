import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import EmployeeGrid from "./components/EmployeeGrid";

import { employees } from "./data/employees";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <DashboardCards employees={employees} />

      <EmployeeGrid employees={employees} />

    </div>
  );
}

export default App;