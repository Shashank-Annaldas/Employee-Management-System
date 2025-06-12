
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddEmployee from './Employee/AddEmployee';
import EditEmployee from './Employee/EditEmployee';
import ViewEmployee from './Employee/ViewEmployee';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={ <Home />} />
          <Route path="/addEmployee" element={<AddEmployee />}/>
          <Route path="/employees/:id" element={<EditEmployee />} />
          <Route path="/view/:id" element={<ViewEmployee />} />

        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
