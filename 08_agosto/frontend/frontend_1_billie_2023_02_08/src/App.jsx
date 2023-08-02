import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default App;
