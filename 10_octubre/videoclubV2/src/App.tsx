import "./App.scss";
import { Routes, Route } from "react-router-dom";
import GetShows from "./pages/GetShows/GetShows";
import PostShow from "./pages/PostShow/PostShow";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<GetShows />} />
        <Route path="/post" element={<PostShow />} />
        <Route path="*" element={<GetShows />} />
      </Routes>
    </>
  );
}

export default App;
