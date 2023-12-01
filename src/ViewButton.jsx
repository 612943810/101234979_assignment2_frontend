import React from 'react'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom';
export default function ViewButton(props) {  
    const navigateLink=useNavigate();  
    return (
      
        <>
       <Button variant="info"   onClick={()=>navigateLink(`/view-employee/${props.id}`)}>View</Button>     
        </>
    )
}
