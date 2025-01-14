"use client"

import NextImage from "next/image";
import { useEffect, useState } from "react";

const Comments = () => {
   const [isRender, setIsRender] = useState<boolean>(false);
  
    useEffect(() => {
      setIsRender(true);
    }, []);
  
    if (!isRender) {
      return null;
    }
  return (
    <div className=''>
      <form className='flex items-center justify-between gap-4 p-4 '>
        <div className='relative w-10 h-10 rounded-full overflow-hidden'>
          <NextImage src="/general/avatar.png" alt="profile pic" width={100} height={100} />
        </div>
        <input type="text" className="flex-1 bg-transparent outline-none p-2 md:text-xl text-base w-full" placeholder="Add a Comment..." />
        <button className="py-0 md:py-2 px-2 md:px-4 md:text-base text-sm md:font-bold bg-white text-black rounded-full">Add</button>
      </form>
    </div>
  )
}

export default Comments