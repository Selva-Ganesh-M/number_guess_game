import { useEffect } from "react"
import Game from "./components/Game"
import PageNotFound from "./components/PageNotFound"
import Welcome from "./components/Welcome"
import BaseLayout from "./layout/BaseLayout"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import { useRootContext } from "./hooks/useRootContext"

type Props = Record<string, never>

const App = (props: Props) => {
  // const { value, dispatch } = useRootContext()
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />} >
        <Route index element={<Welcome />} />
        <Route path="game" element={<Game />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App