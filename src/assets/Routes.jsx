import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"

const routes = [
    {path: "/", element: <MainPage />},
    {path: "/login", element: <LoginPage />}
]

export default routes