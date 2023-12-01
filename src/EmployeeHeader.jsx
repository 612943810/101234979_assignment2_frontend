import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './css/styles.css'
import Navbar from 'react-bootstrap/Navbar'
export default function EmployeeHeader() {
    return (
        <div >
 <Navbar bg="primary" variant="info" className="text-info">
     <div >
  <Navbar.Brand className="m-3 text-info">Employee Management App</Navbar.Brand>   
    </div> 

 </Navbar>          
        </div>
    )
}
