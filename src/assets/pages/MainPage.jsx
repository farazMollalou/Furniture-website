import HeroSlider from "../components/HeroSlider/HeroSlider"
import Navbar from "../components/Navbar/Navbar"
import TopBar from "../components/TopBar/TopBar"
import TopStrip from "../components/TopStrip/TopStrip"

function MainPage() {
  return (
    <>
      <TopStrip />
      <TopBar />
      <Navbar />
      <HeroSlider />
    </>
  )
}

export default MainPage