import React from 'react'
import { useRootContext } from '../hooks/useRootContext'

type Props = Record<string, never>

const Banner = (props: Props) => {
    const { value, dispatch } = useRootContext();
    return (
        <div className='h-[100vh] w-full bg-red-300'>
            <div className='h-full w-full'>
                <img src={value.banner} alt="" className='object-cover h-full' />
            </div>
        </div>
    )
}

export default Banner