
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Hero from "./components/layout/hero/Hero";
import Slider from "./components/layout/slider/Slider";
import "./styles/style.scss";

function App() {

  return (
    <>
      <Header></Header>

      <main>
        <Hero></Hero>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>

        {/* Load More */}
        <div className="load-btn">
          <button className="btn">Explore Movies</button>
        </div>
        {/* Load More */}
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
