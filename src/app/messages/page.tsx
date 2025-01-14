import Image from "@/components/Image";
import Link from "next/link";

const PopularTags = () => {
    return (
        <div className="p-4 border-[1px] h-full border-borderGray flex flex-col gap-4">
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-0 z-10 bg-[#00000084]">
                <Link href="/">
                    <Image path="icons/back.svg" alt="back" w={24} h={24} />
                </Link>
                <h1 className="font-bold text-lg">Messages</h1>
            </div>
            <div className="flex flex-col w-full md:w-4/6 mt-3 md:m-auto p-5">
                <h1 className="text-xl md:text-3xl font-extrabold">Select a message</h1>
                <span className="mt-2 text-gray-500">Choose from your existing conversations, start a new one, or just keep swimming.</span>
                <span className="mt-5 bg-[#1d9bf0] w-fit text-lg px-4 py-1 md:px-8 md:py-3 rounded-full">New Message</span>
            </div>
        </div>
    );
};

export default PopularTags;