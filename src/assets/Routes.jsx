import LoginPageComponent from "./components/LoginPageComponent/LoginFormComponent"
import SignupPageComponent from "./components/SignupPageComponent/SignupPageComponent"
import MainPage from "./pages/MainPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductPage from "./pages/ProductPage"

const routes = [
    {path: "/", element: <MainPage />},
    {path: "/login", element: <LoginPageComponent />},
    {path: "/sign-up", element: <SignupPageComponent />},
    {path: "/product/:productID", element: <ProductPage />},
    {path: "*", element: <NotFoundPage />}
]

export default routes