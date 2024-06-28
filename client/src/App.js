import React, {Fragment} from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Home from "./components/Home";
import TodoList from "./components/TodoList";

function App() {
  return (
   <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todolist" element={<TodoList/>}/>
      </Routes>
    </BrowserRouter>
    {/* <div className="container">
      <Home/>
    </div> */}
   </Fragment> 
  );
}

export default App;
