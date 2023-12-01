import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import UpdateButton from './UpdateButton'
import DeleteButton from './DeleteButton'
import ViewButton from './ViewButton'
export default function EmployeeRows() {
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/employees/')
        .then((employeeOutput)=>{
            setEmployee(employeeOutput.data)
     
        })
    })
   const employeeList=employee.map((employeeView)=>{
         return(<tr>
             <td>{employeeView.firstname}</td>
             <td>{employeeView.lastname}</td>
             <td>{employeeView.emailid}</td>
             <td><UpdateButton id={employeeView._id}/> <DeleteButton id={employeeView._id}/> <ViewButton id={employeeView._id}/> </td>
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
