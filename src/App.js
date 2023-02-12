import './App.css';
import Home from "./Pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchAppBar from "./Components/AppBar";
import Tour from "./Pages/Tour";
import {useState} from "react";

function App() {
    const [obj , setObj] = useState('')
    const  setObjFunction = (value)=>{
        setObj(value)
    }

  return (
    <BrowserRouter>
        <SearchAppBar/>
        <Routes>
            <Route path='/' element={<Home setObjFunction={setObjFunction}/>} />
            <Route path='/:id' element={<Tour obj={obj} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
