import logo from './logo.svg';


import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import EmployeeHeader from './EmployeeHeader';
import EmployeeList from './EmployeeList';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeForm from './CreateEmployeeForm';
function App() {
  return (
    <div className="text-center" >
      <EmployeeHeader/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList/>}/>
        <Route path="/add-employee/_add" element={<CreateEmployeeForm/>}/>
      </Routes> 
      </BrowserRouter>


    </div>
  );
}

export default App;
