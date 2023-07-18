import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReactHookForm from "./pages/ReactHookForm/ReactHookForm";
import Navbar from "./components/Navbar/Navbar";
import FormikPage from "./pages/Formik/FormikPage";
import OurFormLibrary from "./pages/OurFormLibrary/OurFormLibrary";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/formik" element={<FormikPage></FormikPage>} />
        <Route path="/hookform" element={<ReactHookForm></ReactHookForm>} />
        <Route path="/ourform" element={<OurFormLibrary></OurFormLibrary>} />
        <Route path="*" element={<FormikPage></FormikPage>} />
      </Routes>
    </>
  );
}

export default App;
