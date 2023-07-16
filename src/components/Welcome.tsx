import { useState, useEffect } from "react";
import { useRootContext } from "../hooks/useRootContext"
import { ERootActions } from "../context/rootContext";
import { useNavigate } from "react-router-dom"

type Props = Record<string, never>

const Welcome = (props: Props) => {
    const navigate = useNavigate()
    const { value, dispatch } = useRootContext()
    const [name, setName] = useState<string>("")
    const startGame = () => {
        dispatch({
            type: ERootActions.updatePlayer,
            payload: {
                type: ERootActions.updatePlayer,
                data: {
                    ...value.player, name, isPlayer: true
                }
            }
        })
        console.log(`start game ended`);

    }

    useEffect(() => {
        console.log(`side-effect ran`);

        if (value.player.isPlayer) {
            navigate("/game")
        }
    }, [value.player.isPlayer, navigate])

    return (
        <div className='h-[100vh] w-full flex items-center justify-center'>
            <div className='w-[70%] h-[50%] rounded-3xl flex flex-col gap-3 items-center p-3'>
                <h1 className="text-5xl text-blue-500">Guess The Number</h1>
                <div id="input" className="w-[90%] m-x-auto flex flex-col gap-4">
                    <label htmlFor="" className="text-2xl">player Name:</label>
                    <input type="text" className="text-2xl border-2 w-full outline-none bg-white px-2 text-gray-500" placeholder="eg.Selva" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="" className="text-2xl">Difficulty:</label>
                    <select name="" id="" className="w-full py-2 text-2xl text-gray-500 outline-none border-2">
                        <option value="beginner">beginner</option>
                        <option value="beginner">intermediate</option>
                        <option value="beginner">advanced</option>
                    </select>
                </div>
                <button
                    className="bg-blue-600 px-4 mt-6 py-2 text-white hover:rounded-lg transition-all duration-400 trasition-[border] text-xl w-[90%] m-auto hover:bg-red-400"
                    onClick={startGame}
                >
                    Start Game!
                </button>
            </div>
        </div>
    )
}

export default Welcome