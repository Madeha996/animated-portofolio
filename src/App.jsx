import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <div>
      <Cursor />
      <section>
        <Layout>
          <Hero />
        </Layout>
      </section>
    </div>
  );
};

export default App;
