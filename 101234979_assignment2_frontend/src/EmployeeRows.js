import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import UpdateButton from './UpdateButton'
import DeleteButton from './DeleteButton'
import ViewButton from './ViewButton'
export default function EmployeeRows() {
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
             <td><UpdateButton/> <DeleteButton/> <ViewButton/> </td>
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
