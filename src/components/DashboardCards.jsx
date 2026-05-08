const DashboardCards = ({ employees }) => {

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    emp => emp.isActive
  ).length;

  const avgSalary =
    employees.reduce((acc, emp) => acc + emp.salary, 0)
    / employees.length;

  const topRating = Math.max(
    ...employees.map(emp => emp.performanceRating)
  );

  return (
    <div className="cards">

      <div className="card">
        <h3>Total Employees</h3>
        <p>{totalEmployees}</p>
      </div>

      <div className="card">
        <h3>Active Employees</h3>
        <p>{activeEmployees}</p>
      </div>

      <div className="card">
        <h3>Average Salary</h3>
        <p>${avgSalary.toFixed(0)}</p>
      </div>

      <div className="card">
        <h3>Top Performance</h3>
        <p>{topRating}</p>
      </div>

    </div>
  );
};

export default DashboardCards;