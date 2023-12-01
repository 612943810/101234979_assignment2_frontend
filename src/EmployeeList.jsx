import React from 'react'
import CreateButton from './CreateButton'
import Table from 'react-bootstrap/Table'
import EmployeeRows from './EmployeeRows'

export default function EmployeeList() {
    
    return (
        <div className="m-3">  
  <h1 className="text-center">Employee List</h1>  
  <CreateButton/>   
  <Table striped bordered hover  variant="info">
      <thead bordered>
          <tr>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
          <th> Actions</th>
          </tr>
      </thead>
      <tbody>

   {
      <EmployeeRows/>
   }
   </tbody>
      </Table>     
        </div>
    )
}
