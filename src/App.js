import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { Helmet } from "react-helmet";



function App() {
  return (

    <>
      <Helmet>
        <title>New projectss</title>
      </Helmet>
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
