
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/AddEmployee';
import Status from './components/EmployeeList';
import Online from './components/Online';


function App() {
  return (
    <div className="App">

     <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Status" element={<Status/>}></Route>
                    <Route path="/Online" element={<Online/>}></Route>
                   
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
