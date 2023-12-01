import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
export default function ViewEmployee() {
    const [view, setView] = useState({
        firstname:'',
        lastname:'',
        emailid:''
      })
     
  
  const {id}=useParams()
  useEffect(() => { 
    axios.get(`http://localhost:8080/api/v1/employees/${id}`,)
    .then((postData)=>{
        setView({
          firstname:postData.data.firstname,
          lastname:postData.data.lastname,
          emailid:postData.data.emailid
     
        })  
    })
    .catch((err)=>console.log(err.response.data))  
  
  })
  const navigateLink=useNavigate();  
    return (
        <div className="bg-info m-5 justify-content-center">
           <h1>View Employee Details</h1> 
           <p>Employee First Name:{view.firstname}</p>
           <p>Employee Last Name:{view.lastname}</p>
           <p>Employee Email ID:{view.emailid}</p>
<Button variant="secondary" onClick={()=>navigateLink('/')}>Back</Button>
        </div>
    )
}
