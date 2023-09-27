import LoginPageComponent from "./components/LoginPageComponent/LoginFormComponent"
import SignupPageComponent from "./components/SignupPageComponent/SignupPageComponent"
import MainPage from "./pages/MainPage"

const routes = [
    {path: "/", element: <MainPage />},
    {path: "/login", element: <LoginPageComponent />},
    {path: "/sign-up", element: <SignupPageComponent />}
]

export default routes