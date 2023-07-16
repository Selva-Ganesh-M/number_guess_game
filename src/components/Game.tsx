import React, { useEffect, useState } from 'react'
import { useRootContext } from '../hooks/useRootContext';
import { EBanner, ERootActions, banners } from '../context/rootContext';
import { useNavigate } from "react-router-dom"

type Props = Record<string, never>

const Game = (props: Props) => {
    const navigate = useNavigate();
    const { value, dispatch } = useRootContext()
    const [number, setNumber] = useState<number>(0)
    useEffect(() => {
        console.log(value.gameNumber);

    }, [value.gameNumber])

    const check = () => {
        if (!value.gameNumber) return navigate("/")
        if (number < value.gameNumber) {
            dispatch({
                payload: {
                    type: ERootActions.updateBanner,
                    data: banners[EBanner.goHigh]
                }
            })
        } else if (number > value.gameNumber) {
            dispatch({
                payload: {
                    type: ERootActions.updateBanner,
                    data: banners[EBanner.goLow]
                }
            })
        } else {
            dispatch({
                payload: {
                    type: ERootActions.updateBanner,
                    data: banners[EBanner.success]
                }
            })

        }
    }
    return (
        <div className='h-[100vh] w-full flex items-center justify-center'>
            <div className='w-[70%] h-[50%] rounded-3xl flex flex-col gap-3 items-center p-3'>
                <h1 className="text-5xl text-blue-500">Guess The Number</h1>
                <div id="input" className="w-[90%] m-x-auto flex flex-col gap-4 mt-6">
                    <input type="number" className="text-2xl border-2 w-full outline-none bg-white px-2 text-gray-500" placeholder="eg.100" onChange={(e) => setNumber(Number(e.target.value))} />
                </div>
                <button
                    className="bg-blue-600 px-4 mt-6 py-2 text-white hover:rounded-lg transition-all duration-400 trasition-[border] text-xl w-[90%] m-auto hover:bg-red-400"
                    onClick={check}
                >
                    Check
                </button>
            </div>
        </div>
    )
}

export default Game