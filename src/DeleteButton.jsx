import axios from 'axios'
import React from 'react'
import Button from 'react-bootstrap/Button'
export default function DeleteButton(props) {
 const deleteEmployee=()=>{
     axios.delete(`/api/v1/employees/${props.id}`)
 }

    return (
        <>
           <Button variant="danger" className="text-secondary" onClick={deleteEmployee }>Delete </Button>   
        </>
    )
}
