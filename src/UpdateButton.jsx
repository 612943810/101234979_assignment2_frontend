import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router';
export default function UpdateButton(props) {
const navigateLink=useNavigate();
    return (
        <>
       
              <Button variant="warning" className="text-secondary" onClick={()=>navigateLink(`/add-employee/${props.id}`)}>Update</Button>   
            
        </>
    )
}
