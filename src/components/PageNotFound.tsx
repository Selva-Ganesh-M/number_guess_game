import pageNotfound from "../assets/images/pageNotFound.jpg"
import { useNavigate } from "react-router-dom"

type Props = Record<string, never>

const PageNotFound = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-10">
            <div className="w-[600px] h-[400px]">
                <img src={pageNotfound} alt={'page not found - image'} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col justify-center items-center gap-6 text-3xl">
                <div className="text-center">You seem lost. Wanna play a Game!</div>
                <button className="animate-bounce bg-blue-600 px-4 py-2 text-white rounded-xl" onClick={() => navigate("/")}>
                    Wanna Play a game!
                </button>
            </div>
        </div>
    )
}

export default PageNotFound