import { useRoutes } from "react-router-dom"
import routes from "./assets/Routes";
import './App.css';

function App() {

  const router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  )
}

export default App
