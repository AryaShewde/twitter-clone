import BookmarkSearch from "@/components/BookmarkSearch";
import NextImage from "next/image";
import Link from "next/link";

const PopularTags = () => {
    return (
        <div className="p-4 border-[1px] h-full border-borderGray flex flex-col gap-4">
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-0 z-10 bg-[#00000084]">
                <Link href="/">
                    <NextImage src="/icons/back.svg" alt="back" width={24} height={24} />
                </Link>
                <h1 className="font-bold text-lg">Bookmarks</h1>
            </div>
            <h1 className="text-textGrayLight">
                <BookmarkSearch />
            </h1>
            <div className="flex flex-col w-full md:w-9/12 mx-auto p-2 md:p-5">
                <h1 className="text-xl md:text-3xl font-extrabold">Save posts for later</h1>
                <span className="mt-2 text-gray-500">Bookmark posts to easily find them again in the future.</span>
            </div>
        </div>
    );
};

export default PopularTags;