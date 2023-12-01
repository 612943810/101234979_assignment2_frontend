import React from 'react'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'

export default function CreateButton() {
    let navigationLink=useNavigate();
    return (
        <div className="text-center m-3">
       <Button variant="success"  className="text-secondary"  onClick={()=>navigationLink("/add-employee/_add")}>Create</Button>     
        </div>
    )
}
