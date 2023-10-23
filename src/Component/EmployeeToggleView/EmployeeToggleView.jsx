import React from "react";
import { useState } from "react";

const EmployeeToggleView = (props) => {
  const { coworkers } = props;
  const initialState = coworkers.reduce((acc, curr) => {
    const fullName = curr.first_name + curr.last_name;
    acc[fullName] = true;
    return acc
  }, {});

  const [coworkersStatus, setCoworkersStatus] = useState(initialState);

  const toggleStatus = (fullName) => {
    setCoworkersStatus({
      ...coworkersStatus,
      [fullName]: !coworkersStatus[fullName],
    });
  };

  const renderTable = (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Name</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {coworkers?.map((val, index) => {
          const fullName = val.first_name + val.last_name;
          return (
            <tr key={index}>
              <td colSpan={2} onClick={() => toggleStatus(fullName)}>
                {val.first_name + " " + val.last_name}
              </td>
              <td>
                <b>{coworkersStatus[fullName] ? "Online" : "Offline"}</b>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div style={{ margin: "20px auto", width: "300px" }}>{renderTable}</div>
  );
};

EmployeeToggleView.defaultProps = {
  coworkers: [
    { first_name: "Naruto", last_name: "Uzumaki" },
    { first_name: "Sasuke", last_name: "Uchiha" },
    { first_name: "Sakura", last_name: "Haruno" },
  ],
};
export default EmployeeToggleView;
