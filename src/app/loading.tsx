import React from 'react'
import NextImage from "next/image";

const loading = () => {
    return (
        <div className='w-full my-6'>
            <NextImage src={"/svg/loading-7528_256.gif"} className='m-auto' alt="..." width={30} height={30} />
        </div>
    )
}

export default loading
