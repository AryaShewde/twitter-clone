import Image from "@/components/Image";
import Post from "@/components/Post";
import Link from "next/link";

const fetchFileIds = async (): Promise<{ fileData: { fileId: string; description: string }[] }> => {
    try {

        const apiUrl = process.env.NODE_ENV === 'production'
            ? 'https://your-production-api-url.com/api/getImageFileIds'
            : 'http://localhost:3000/api/getImageFileIds';

        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching file IDs:", error);
        return { fileData: [] };
    }
};

const Page = async () => {
    const data = await fetchFileIds();
    return (
        <div className="p-4 pt-1 border-[1px] h-full border-borderGray flex flex-col gap-2 w-full">
            <div className="flex items-center p-2 justify-between sticky top-0 z-30 backdrop-blur-md bg-[#00000084]">
                <div className="flex md:gap-8 gap-1 items-center">
                    <Link className="h-fit" href="/">
                        <Image path="icons/back.svg" alt="back" w={22} h={22} />
                    </Link>
                    <h1 className="font-bold text-base md:text-xl">Communities</h1>
                </div>
                <div className="flex gap-4">
                    <Image path="icons/explore.svg" alt="back" w={20} h={20} />
                    <Image path="icons/community.svg" alt="back" w={20} h={20} />
                </div>
            </div>
            <hr className="border-[0.5px] border-borderGray" />
            <div className="gap-1 overflow-x-auto scrollbar-hide bg-black z-20 flex w-[calc(100vw-100px)] md:w-full">
                <span className="border-[1px] border-borderGray px-2 md:px-4 py-[2px] rounded-full font-bold text-xs md:text-base">Sports</span>
                <span className="border-[1px] border-borderGray px-2 md:px-4 py-[2px] rounded-full font-bold text-xs md:text-base">Technology</span>
                <span className="border-[1px] border-borderGray px-2 md:px-4 py-[2px] rounded-full font-bold text-xs md:text-base">Art</span>
                <span className="border-[1px] border-borderGray px-2 md:px-4 py-[2px] rounded-full font-bold text-xs md:text-base">Entertainment</span>
                <span className="border-[1px] border-borderGray px-2 md:px-4 py-[2px] rounded-full font-bold text-xs md:text-base">Gaming</span>
                <span className="border-[1px] border-borderGray px-2 md:px-4 py-[2px] rounded-full font-bold text-xs md:text-base">Politics</span>
            </div>
            <div className='mt-[-19px] z-10'>
                {data.fileData.slice().reverse().map((filesubdata) => (
                    <Post key={filesubdata.fileId} id={filesubdata.fileId} desc={filesubdata.description} />
                ))}
            </div>
        </div>
    );
};

export default Page;