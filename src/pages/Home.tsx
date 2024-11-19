// import CategoryMenu from "../components/CategoryMenu"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import SpecialDishes from "../components/SpecialDishes"
import IntroSection from "../components/IntroSection"
import MainCategories from "../components/MainCategories"


const Home = () => {
  return (
    <div>
      <Header/>
      <IntroSection/>
      {/* <CategoryMenu/> */}
      <MainCategories/>
      <SpecialDishes/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default Home
