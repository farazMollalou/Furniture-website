import { useEffect, useState } from "react"
import ProductPageComponent from "../ProductPageComponent/ProductPageComponent"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import TopBar from "../components/TopBar/TopBar"
import TopStrip from "../components/TopStrip/TopStrip"
import PreLoader from "../components/PreLoader/PreLoader"
// import { useParams } from "react-router-dom"

function ProductPage() {
    
    const [isLoaded, setIsLoaded] = useState(false)

    // const parameter = useParams()
    // const productId = parameter.productID

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(false)
        }, 3000)
    }, [])

    return (
        <>
            {!isLoaded && <PreLoader />}

            {isLoaded && <TopStrip />}
            {isLoaded && <TopBar />}
            {isLoaded && <Navbar />}
            {isLoaded && <ProductPageComponent />}
            {isLoaded && <Footer />}
        </>
    )
}

export default ProductPage