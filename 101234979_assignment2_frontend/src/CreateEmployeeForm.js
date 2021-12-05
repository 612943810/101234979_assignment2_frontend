import Button from "react-bootstrap/Button";
import React,{useState} from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

export default function CreateEmployeeForm() {
    const [data, setData] = useState({
        firstname:'',
        lastname:'',
        emailid:''
    })
    const navigateLink=useNavigate();
    const submitForm=(submissionValue)=>{
    submissionValue.preventDefault();
const fullData={
    firstname:data.firstname,
    lastname:data.lastname,
    emailid:data.emailid
}
  axios.post("http://localhost:8080/api/v1/employees",fullData)
  .then((postData)=>{
    //   setData({
    //     firstname:'',
    //     lastname:'',
    //     emailid:'' 
    //   })
  })
  .catch((err)=>console.log(err.response.data))
  navigateLink('/')
}
  return (
    <>
      <div className="text-center m-3">
        <h1>Add Employee</h1>
        <Form onSubmit={submitForm}>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="First Name"  onChange={(setFirstName)=>setData({...data,firstname:setFirstName.target.value})}/>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Last Name"  onChange={(setLastName)=>setData({...data,lastname:setLastName.target.value})}/>
            <Form.Label>Email Id:</Form.Label>
            <Form.Control type="email" placeholder="Email Address" onChange={(setEmail)=>setData({...data,emailid:setEmail.target.value})} />
          </Form.Group>
          <Button type="submit" variant="success" className="m-3">
            Save
          </Button>
          <Button type="button" variant="danger">
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}
