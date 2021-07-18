import React from 'react';
import Table from 'react-bootstrap/Table';
import "./style.css";



function Dashboard() {
  return(
    <div className="dashboard">
        <Table>
  <thead>
    <tr>
      <th>Dashboard</th>
      <th>User Impressions</th>
      <th>Overlays shown</th>
      <th>Overlays clicked</th>
      <th>Revenue(in £GBP)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>User Click</td>
      <td>View</td>
      <td>Advertisement</td>
      <td>Visit</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bounce Rate</td>
      <td>Time Spent on Website</td>
      <td>Demographics</td>
      <td>Data</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Click Time</td>
      <td>Cost Per Click</td>
      <td>CTR</td>
      <td>Analytics</td>
    </tr>
    <tr>
      <td>4</td>
      <td>500</td>
      <td>400</td>
      <td>450</td>
      <td>350</td>
    </tr>
    
  </tbody>
</Table>
     </div>
   )

 }

export default Dashboard;