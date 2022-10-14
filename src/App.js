import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import ProductList from "./components/ProductList";
import Toggle from "./components/Toggle";

const App = () => {
  return (
    <div>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
