import CategoriesSection from "../components/CategoriesSection"
import FeaturedProducts from "../components/FeaturedProducts"
import FeaturesSection from "../components/FeaturesSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import NewsletterSection from "../components/NewsLetterSection"



const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <CategoriesSection />
      <FeaturedProducts />
      <FeaturesSection />
      <NewsletterSection/>
      <Footer/>
    </div>
  )
}

export default Home
