import './App.css';
import Addproduct from "./Addproduct";
import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Addproduct />}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
