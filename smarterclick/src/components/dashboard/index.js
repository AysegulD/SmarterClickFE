import React from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';


function Dashboard() {
  return(
    <div className="dashboard">
    <Table id='tableid'>
      <thead className="thead">
        <tr className="table-name">
          <th>Dashboard</th>
          <th>User Impressions</th>
          <th>Overlays shown</th>
          <th>Overlays clicked</th>
          <th>Revenue(in £GBP)</th>
        </tr>
      </thead>
      <tbody className="tbody">
        <tr>
          <td>1</td>
          <td>User Click</td>
          <td>Advertisement</td>
          <td>Click Time</td>
          <td>200</td>
        </tr>
        <tr>
          <td>2</td>
          <td>View</td>
          <td>Demographics</td>
          <td>Time Spent on Website</td>
          <td>300</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Click Time</td>
          <td>Cost Per Click</td>
          <td>Cost Per Click</td>
          <td>450</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Analytics</td>
          <td>User Activities</td>
          <td>CTR</td>
          <td>350</td>
        </tr>
    
      </tbody>
      </Table>
      </div>
   )

 }

export default Dashboard;