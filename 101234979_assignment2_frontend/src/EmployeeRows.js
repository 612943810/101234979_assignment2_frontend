import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
export default function EmployeeRows() {
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        axios.get('/api/v1/employees/')
        .then((employeeOutput)=>{
            setEmployee(employeeOutput.data)
     
        })
    })
   const employeeList=employee.map((employeeView)=>{
         return(<tr className="p-3">
             <td>{employeeView.firstname}</td>
             <td>{employeeView.lastname}</td>
             <td>{employeeView.emailid}</td>
             <td className=""><Button variant="warning">Update</Button> <Button variant="danger">Delete </Button> <Button variant="info">View</Button></td>
             </tr>)  
      })
    return (
   <>
          {
              employeeList
          }  
   </>
    )
}
