
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Hero from "./components/layout/hero/Hero";
import Slider from "./components/layout/slider/Slider";
import jsonData from "./assets/homepage.json";
import "./styles/style.scss";

function App() {

  const heroBannerModule = jsonData.titles.find(module => module.moduleType === 'HERO');
  const otherModules = jsonData.titles.filter(module => module.moduleType !== 'HERO');
  const bannerData = heroBannerModule.layoutTitles.titles;

  return (
    <>
      <Header></Header>

      <main>
        {heroBannerModule && (
          <Hero banners={bannerData} />
        )}

        {otherModules.map(module =>
          <Slider module={module}></Slider>
        )}

        <div className="load-btn">
          <button className="btn">Explore Movies</button>
        </div>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
