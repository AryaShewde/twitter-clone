"use client"

import { useEffect, useState } from "react";
import Image from "./Image"

const BookmarkSearch = () => {
  const [isRender, setIsRender] = useState<boolean>(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (!isRender) {
    return null;
  }
  return (
    <div className='bg-black border border-gray-700 py-1 md:py-3 px-2 md:px-4 flex items-center gap-1 rounded-full'>
      <Image path="icons/explore.svg" alt="search" w={16} h={16} className="opacity-65" />
      <input type="text" placeholder="Search Bookmarks" className="text-sm bg-transparent outline-none placeholder:text-gray-700" />
    </div>
  )
}

export default BookmarkSearch;