import AdvantagesSection from "../components/Advantages/AdvantagesSection"
import HeroSlider from "../components/HeroSlider/HeroSlider"
import Navbar from "../components/Navbar/Navbar"
import RecomendedDepartment from "../components/RecomendedDepartment/RecomendedDepartment"
import TopBar from "../components/TopBar/TopBar"
import TopStrip from "../components/TopStrip/TopStrip"

function MainPage() {
  return (
    <>
      <TopStrip />
      <TopBar />
      <Navbar />
      <HeroSlider />
      <AdvantagesSection />
      <RecomendedDepartment />
    </>
  )
}

export default MainPage