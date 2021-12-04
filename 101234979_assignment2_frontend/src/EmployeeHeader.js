import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './css/styles.css'
import Navbar from 'react-bootstrap/Navbar'
export default function EmployeeHeader() {
    return (
        <div>
 <Navbar bg="primary" variant="info" className="text-info">Employee Management App</Navbar>          
        </div>
    )
}
