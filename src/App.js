import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { Helmet } from "react-helmet";
import Shop from "./component/Shop/Shop";



function App() {
  return (

    <>
      <Helmet>
        <title>Local Storage</title>
      </Helmet>
      <Header></Header>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/login" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
