import Navbar from "../components/Navbar/Navbar"
import TopBar from "../components/TopBar/TopBar"
import TopStrip from "../components/TopStrip/TopStrip"
import NotFoundComponent from "../components/NotFoundComponent/404"
import Footer from "../components/Footer/Footer"


function NotFoundPage() {
    return (
        <>
            <TopStrip />
            <TopBar />
            <Navbar />
            <NotFoundComponent />
            <Footer />
        </>
    )
}

export default NotFoundPage