import "./App.css";
import Input from "./Input/Input";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditInput from "./Input/EditInput";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  exact path="/" element={<Input />} />
      <Route exact path="/edit" element={<EditInput />} />
    </Routes>
    </BrowserRouter>
    
 )
};

export default App;
