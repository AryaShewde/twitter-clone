"use client"

import { useEffect, useState } from "react";
import Image from "./Image"

const Search = () => {
  const [isRender, setIsRender] = useState<boolean>(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (!isRender) {
    return null;
  }
  return (
    <div className='bg-black border-[1px] border-borderGray py-2 px-4 flex items-center gap-2 rounded-full'>
      <Image path="icons/explore.svg" alt="search" w={16} h={16} />
      <input type="text" placeholder="Search" className="bg-transparent outline-none placeholder:text-textGray w-full" />
    </div>
  )
}

export default Search