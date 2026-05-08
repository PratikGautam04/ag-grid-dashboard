import { useState } from "react";

import { AgGridReact } from "ag-grid-react";

import {
  ModuleRegistry,
  AllCommunityModule,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([
  AllCommunityModule
]);

const EmployeeGrid = ({ employees }) => {

  const [searchText, setSearchText] = useState("");

  const columnDefs = [

    { field: "id" },

    { field: "firstName" },

    { field: "lastName" },

    { field: "department" },

    { field: "position" },

    { field: "location" },

    {
      field: "salary",

      valueFormatter: (params) =>
        `$${params.value.toLocaleString()}`
    },

    {
      field: "performanceRating"
    },

    {
      field: "projectsCompleted"
    }
  ];

  return (
    <div>

      {/* SEARCH */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search by name, department, location..."
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
        />

      </div>

      {/* GRID */}

      <div
        className="ag-theme-alpine"
        style={{
          height: "600px",
          width: "100%"
        }}
      >

       <AgGridReact

  theme="legacy"

  rowData={employees}

  columnDefs={columnDefs}

  quickFilterText={searchText}

  pagination={true}

  paginationPageSize={8}

  paginationPageSizeSelector={[8, 20, 50]}

  animateRows={true}

  defaultColDef={{
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
  }}

/>

      </div>

    </div>
  );
};

export default EmployeeGrid;