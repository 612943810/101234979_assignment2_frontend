import Button from "react-bootstrap/Button";
import React,{useState,useEffect} from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate ,useParams} from "react-router";

export default function EditEmployeeForm(props) {
    const [edit, setEdit] = useState({
      firstname:'',
      lastname:'',
      emailid:''
    })
    const navigateLink=useNavigate();

const {id}=useParams()
useEffect(() => { 
  axios.get(`http://localhost:8080/api/v1/employees/${id}`,)
  .then((postData)=>{
      setEdit({
        firstname:postData.data.firstname,
        lastname:postData.data.lastname,
        emailid:postData.data.emailid
   
      })  
  })
  .catch((err)=>console.log(err.response.data))  

}, [])
    const submitForm=(submissionValue)=>{
    submissionValue.preventDefault();
const editFill={
    firstname:edit.firstname,
    lastname:edit.lastname,
    emailid:edit.emailid   
}
 axios.put(`http://localhost:8080/api/v1/employees/${id}`,editFill)
 .then((editData)=>{
  setEdit({
    firstname:'',
    lastname:'',
    emailid:'' 
  })
  .catch((employeeError)=>{
    console.log(employeeError.response.data)
  })
 })
navigateLink('/')
}
  return (
    <>
      <div className="text-center m-3">
        <h1>Update Employee</h1>
        <Form onSubmit={submitForm}>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="First Name"  value={edit.firstname} onChange={(setFirstName)=>setEdit({...edit,firstname:setFirstName.target.value})}/>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Last Name" value={edit.lastname} onChange={(setLastName)=>setEdit({...edit,lastname:setLastName.target.value})}/>
            <Form.Label>Email Id:</Form.Label>
            <Form.Control type="email" placeholder="Email Address" value={edit.emailid} onChange={(setEmail)=>setEdit({...edit,emailid:setEmail.target.value})} />
          </Form.Group>
          <Button type="submit" variant="success" className="m-3">
            Save
          </Button>
          <Button type="button" variant="danger" onClick={()=>navigateLink('/')}>
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}
