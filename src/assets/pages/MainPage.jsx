import AdvantagesSection from "../components/Advantages/AdvantagesSection"
import HeroSlider from "../components/HeroSlider/HeroSlider"
import Navbar from "../components/Navbar/Navbar"
import RecomendedDepartment from "../components/RecomendedDepartment/RecomendedDepartment"
import SpecialOfferSection from "../components/SpecialOfferSection/SpecialOfferSection"
import TopBar from "../components/TopBar/TopBar"
import TopStrip from "../components/TopStrip/TopStrip"
import TrensSection from "../components/TrensSection/TrensSection"

function MainPage() {
  return (
    <>
      <TopStrip />
      <TopBar />
      <Navbar />
      <HeroSlider />
      <AdvantagesSection />
      <RecomendedDepartment />
      <TrensSection />
      <SpecialOfferSection />
    </>
  )
}

export default MainPage