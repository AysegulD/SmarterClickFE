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
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
</Table>
     </div>
   )

 }

export default Dashboard;