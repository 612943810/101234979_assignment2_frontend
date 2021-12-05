import logo from './logo.svg';


import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import EmployeeHeader from './EmployeeHeader';
import EmployeeList from './EmployeeList';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeForm from './CreateEmployeeForm';
import EditEmployeeForm from './EditEmployeeForm'
import ViewEmployee from './ViewEmployee';
function App() {
  return (
    <div className="text-center" >
      <EmployeeHeader/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList/>}/>
        <Route path="/add-employee/_add" element={<CreateEmployeeForm/>}/>
        <Route path="/add-employee/:id" element={<EditEmployeeForm/>}/>
        <Route path="/view-employee/:id" element={<ViewEmployee/>}/>
      </Routes> 
      </BrowserRouter>


    </div>
  );
}

export default App;
