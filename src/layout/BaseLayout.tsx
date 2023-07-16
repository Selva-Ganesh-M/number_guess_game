import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"

type Props = Record<string, never>

const BaseLayout = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div id="left" className="flex-1">
        <Outlet />
      </div>
      <div id="right" className="flex-[2]">
        <Banner />
      </div>
    </div>
  )
}

export default BaseLayout