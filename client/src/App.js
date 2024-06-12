import React, {Fragment} from "react";
import './App.css';

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Home from "./components/Home";

function App() {
  return (
   <Fragment>
    <div className="container">
      {/* <InputTodo/>
      <ListTodos/> */}
      <Home/>
    </div>
   </Fragment> 
  );
}

export default App;
