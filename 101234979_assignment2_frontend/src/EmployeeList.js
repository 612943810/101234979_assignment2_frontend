import React ,{useState,useEffect}from 'react'
import CreateButton from './CreateButton'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
export default function EmployeeList() {
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        axios.get('/api/v1/employees/')
        .then((employeeOutput)=>{
            setEmployee(employeeOutput.data)
     
        })
    })
   const employeeList=employee.map((employeeView)=>{
         return(<tr>
             <td>{employeeView.firstname}</td>
             <td>{employeeView.lastname}</td>
             <td>{employeeView.emailid}</td>
             </tr>)  
      })
    return (
        <div>   {} 
  <h1 className="text-center">Employee List</h1>  
  <CreateButton/>   
  <Table striped bordered hover>
      <thead>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
          <th> Actions</th>
      </thead>
      <tbody>

   {
       employeeList
   }
   </tbody>
      </Table>     
        </div>
    )
}
