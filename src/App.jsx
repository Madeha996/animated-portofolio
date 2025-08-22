import { Route, Routes } from "react-router";
import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Layout from "./layouts/Layout";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about";
import Portoflio from "./pages/portofolio";

const App = () => {
  return (
    <div>
      <Cursor />
      <section>
        <Layout>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/portoflio" element={<Portoflio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </section>
    </div>
  );
};

export default App;
