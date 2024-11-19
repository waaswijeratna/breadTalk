import CategoryMenu from "../components/CategoryMenu"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import SpecialDishes from "../components/SpecialDishes"


const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <CategoryMenu/>
      <SpecialDishes/>
      <Footer/>
    </div>
  )
}

export default Home
