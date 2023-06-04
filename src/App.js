import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";



function App() {
  return (

    <>
      <Header></Header>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/shop" element={''}></Route>
        <Route path="/login" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
