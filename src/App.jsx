import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <div>
      <Cursor />
      <section>
        <Layout />
      </section>
    </div>
  );
};

export default App;
